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
    /** Approve a user's pending request to join a Telegram chat. */
    "telegram.approve_chat_join_request": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The user identifier from the join request. */
        userId: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Ban a user from a group, supergroup, or channel. */
    "telegram.ban_chat_member": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target user identifier. */
        userId: number;
        /** The Unix timestamp when the ban ends. */
        untilDate?: number;
        /** Whether to delete all messages from the banned user. */
        revokeMessages?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Copy one message without linking back to the original message. */
    "telegram.copy_message": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target Telegram chat ID or channel username. */
        fromChatId: number | string;
        /**
         * A Telegram message identifier.
         * @exclusiveMinimum 0
         */
        messageId: number;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /**
         * A replacement media caption.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode for the replacement caption. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /** Whether to show the replacement caption above the media. */
        showCaptionAboveMedia?: boolean;
        /** Whether to copy the message silently. */
        disableNotification?: boolean;
        /** Whether to protect the copied message from forwarding and saving. */
        protectContent?: boolean;
      };
      output: {
        /**
         * A Telegram message identifier.
         * @exclusiveMinimum 0
         */
        messageId: number;
      };
    };
    /** Copy 1-100 messages without links to the originals while preserving album grouping. */
    "telegram.copy_messages": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target Telegram chat ID or channel username. */
        fromChatId: number | string;
        /**
         * The identifiers of 1-100 Telegram messages in strictly increasing order.
         * @minItems 1
         * @maxItems 100
         */
        messageIds: Array<number>;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to deliver the messages silently. */
        disableNotification?: boolean;
        /** Whether to protect the messages from forwarding and saving. */
        protectContent?: boolean;
        /** Whether to remove captions from copied messages. */
        removeCaption?: boolean;
      };
      output: {
        /** The returned message identifiers. */
        messageIds: Array<number>;
      };
    };
    /** Create an additional Telegram chat invite link with optional expiry or approval rules. */
    "telegram.create_chat_invite_link": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The invite link name.
         * @maxLength 32
         */
        name?: string;
        /** The Unix timestamp when the link expires. */
        expireDate?: number;
        /**
         * The maximum number of simultaneous members using the link.
         * @minimum 1
         * @maximum 99999
         */
        memberLimit?: number;
        /** Whether users joining through the link require administrator approval. */
        createsJoinRequest?: boolean;
      };
      output: {
        /** The invite link. */
        inviteLink: string;
        /** A Telegram user record. */
        creator: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** Whether users must be approved by chat administrators. */
        createsJoinRequest: boolean;
        /** Whether the link is the primary invite link. */
        isPrimary: boolean;
        /** Whether the link has been revoked. */
        isRevoked: boolean;
        /** The invite link name. */
        name?: string;
        /** The Unix timestamp when the link expires. */
        expireDate?: number;
        /** The maximum number of simultaneous members using the link. */
        memberLimit?: number;
        /** The number of pending join requests created through the link. */
        pendingJoinRequestCount?: number;
        /** The subscription period in seconds. */
        subscriptionPeriod?: number;
        /** The subscription price in Telegram Stars. */
        subscriptionPrice?: number;
      };
    };
    /** Decline a user's pending request to join a Telegram chat. */
    "telegram.decline_chat_join_request": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The user identifier from the join request. */
        userId: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Delete one or more messages on behalf of a connected Telegram business account. */
    "telegram.delete_business_messages": {
      input: {
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId: string;
        /**
         * The identifiers of 1-100 Telegram messages.
         * @minItems 1
         * @maxItems 100
         */
        messageIds: Array<number>;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
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
    /** Delete 1-100 messages from one Telegram chat. */
    "telegram.delete_messages": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The identifiers of 1-100 Telegram messages.
         * @minItems 1
         * @maxItems 100
         */
        messageIds: Array<number>;
      };
      output: {
        /** Whether the request succeeded. */
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
    /** Edit an additional Telegram chat invite link created by the bot. */
    "telegram.edit_chat_invite_link": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The invite link to edit.
         * @minLength 1
         */
        inviteLink: string;
        /**
         * The invite link name.
         * @maxLength 32
         */
        name?: string;
        /** The Unix timestamp when the link expires. */
        expireDate?: number;
        /**
         * The maximum number of simultaneous members using the link.
         * @minimum 1
         * @maximum 99999
         */
        memberLimit?: number;
        /** Whether users joining through the link require administrator approval. */
        createsJoinRequest?: boolean;
      };
      output: {
        /** The invite link. */
        inviteLink: string;
        /** A Telegram user record. */
        creator: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** Whether users must be approved by chat administrators. */
        createsJoinRequest: boolean;
        /** Whether the link is the primary invite link. */
        isPrimary: boolean;
        /** Whether the link has been revoked. */
        isRevoked: boolean;
        /** The invite link name. */
        name?: string;
        /** The Unix timestamp when the link expires. */
        expireDate?: number;
        /** The maximum number of simultaneous members using the link. */
        memberLimit?: number;
        /** The number of pending join requests created through the link. */
        pendingJoinRequestCount?: number;
        /** The subscription period in seconds. */
        subscriptionPeriod?: number;
        /** The subscription price in Telegram Stars. */
        subscriptionPrice?: number;
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
    /** Export the primary invite link for a Telegram chat. */
    "telegram.export_chat_invite_link": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
      };
      output: {
        /** The exported invite link. */
        inviteLink: string;
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
    /** Forward 1-100 messages while preserving links and album grouping. */
    "telegram.forward_messages": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target Telegram chat ID or channel username. */
        fromChatId: number | string;
        /**
         * The identifiers of 1-100 Telegram messages in strictly increasing order.
         * @minItems 1
         * @maxItems 100
         */
        messageIds: Array<number>;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to deliver the messages silently. */
        disableNotification?: boolean;
        /** Whether to protect the messages from forwarding and saving. */
        protectContent?: boolean;
      };
      output: {
        /** The returned message identifiers. */
        messageIds: Array<number>;
      };
    };
    /** Return the current state and granted rights of a Telegram business connection. */
    "telegram.get_business_connection": {
      input: {
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId: string;
      };
      output: {
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        id: string;
        /** A Telegram user record. */
        user: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** The private chat identifier for the user who created the connection. */
        userChatId: number;
        /** The Unix timestamp when the connection was established. */
        date: number;
        /** The rights granted to the bot for a Telegram business connection. */
        rights?: {
          /** Whether the bot can send and edit messages in eligible private chats. */
          canReply?: boolean;
          /** Whether the bot can mark incoming private messages as read. */
          canReadMessages?: boolean;
          /** Whether the bot can delete messages sent by the bot. */
          canDeleteSentMessages?: boolean;
          /** Whether the bot can delete all messages in managed private chats. */
          canDeleteAllMessages?: boolean;
          /** Whether the bot can edit the business account name. */
          canEditName?: boolean;
          /** Whether the bot can edit the business account bio. */
          canEditBio?: boolean;
          /** Whether the bot can edit the business account profile photo. */
          canEditProfilePhoto?: boolean;
          /** Whether the bot can edit the business account username. */
          canEditUsername?: boolean;
          /** Whether the bot can change business gift settings. */
          canChangeGiftSettings?: boolean;
          /** Whether the bot can view business gifts and Stars. */
          canViewGiftsAndStars?: boolean;
          /** Whether the bot can convert business gifts to Stars. */
          canConvertGiftsToStars?: boolean;
          /** Whether the bot can transfer and upgrade business gifts. */
          canTransferAndUpgradeGifts?: boolean;
          /** Whether the bot can transfer business account Stars. */
          canTransferStars?: boolean;
          /** Whether the bot can manage stories for the business account. */
          canManageStories?: boolean;
        };
        /** Whether the business connection is active. */
        isEnabled: boolean;
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
          /** A normalized Telegram message record. */
          message?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId?: string;
            /** A Telegram user record. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The message text, when present. */
            text?: string;
            /** The media caption, when present. */
            caption?: string;
            /** The available sizes of the attached photo. */
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
              [key: string]: unknown;
            }>;
            /** A Telegram document file. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original document filename. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram geographic location. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** A Telegram poll. */
            poll?: {
              /** The unique poll identifier. */
              id: string;
              /** The poll question. */
              question: string;
              /** The available poll options. */
              options: Array<{
                /** The poll option text. */
                text: string;
                /** The number of votes for the option. */
                voterCount: number;
                [key: string]: unknown;
              }>;
              /** The total number of poll voters. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The poll type. */
              type: "regular" | "quiz";
              /** Whether the poll allows multiple answers. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The number of seconds the poll remains open. */
              openPeriod?: number;
              /** The explanation shown for a quiz poll. */
              explanation?: string;
              /** The zero-based identifier of the correct quiz option. */
              correctOptionId?: number;
              [key: string]: unknown;
            };
            /** The entities parsed from the message text. */
            entities?: Array<Record<string, unknown>>;
            /** The entities parsed from the media caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** A Telegram user record. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The original message identifier inside the source chat. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded channel post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
            /** A Telegram video file. */
            video?: {
              /** The file identifier used to download or reuse the video. */
              fileId: string;
              /** The stable unique identifier of the video. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The video duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The available sizes of the video cover. */
              cover?: Array<{
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
                [key: string]: unknown;
              }>;
              /** The start timestamp for the video in the message. */
              startTimestamp?: number;
              /** The available encoded video qualities. */
              qualities?: Array<{
                /** The file identifier used to download or reuse this video quality. */
                fileId: string;
                /** The stable unique identifier of this video quality. */
                fileUniqueId: string;
                /** The video width in pixels. */
                width: number;
                /** The video height in pixels. */
                height: number;
                /** The codec used to encode the video. */
                codec: string;
                /** The video quality file size in bytes. */
                fileSize?: number;
                [key: string]: unknown;
              }>;
              /** The original video filename. */
              fileName?: string;
              /** The MIME type of the video. */
              mimeType?: string;
              /** The video file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram audio file. */
            audio?: {
              /** The file identifier used to download or reuse the audio. */
              fileId: string;
              /** The stable unique identifier of the audio. */
              fileUniqueId: string;
              /** The audio duration in seconds. */
              duration: number;
              /** The performer of the audio. */
              performer?: string;
              /** The audio track title. */
              title?: string;
              /** The original audio filename. */
              fileName?: string;
              /** The MIME type of the audio. */
              mimeType?: string;
              /** The audio file size in bytes. */
              fileSize?: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** A Telegram voice message file. */
            voice?: {
              /** The file identifier used to download or reuse the voice message. */
              fileId: string;
              /** The stable unique identifier of the voice message. */
              fileUniqueId: string;
              /** The voice message duration in seconds. */
              duration: number;
              /** The MIME type of the voice message. */
              mimeType?: string;
              /** The voice message file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram animation file. */
            animation?: {
              /** The file identifier used to download or reuse the animation. */
              fileId: string;
              /** The stable unique identifier of the animation. */
              fileUniqueId: string;
              /** The animation width in pixels. */
              width: number;
              /** The animation height in pixels. */
              height: number;
              /** The animation duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The original animation filename. */
              fileName?: string;
              /** The MIME type of the animation. */
              mimeType?: string;
              /** The animation file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram contact. */
            contact?: {
              /** The contact phone number. */
              phoneNumber: string;
              /** The contact first name. */
              firstName: string;
              /** The contact last name. */
              lastName?: string;
              /** The Telegram user identifier associated with the contact. */
              userId?: number;
              /** Additional contact data in vCard format. */
              vcard?: string;
              [key: string]: unknown;
            };
            /** A Telegram venue. */
            venue?: {
              /** A Telegram geographic location. */
              location: {
                /** The latitude of the location. */
                latitude: number;
                /** The longitude of the location. */
                longitude: number;
                /** The radius of uncertainty in meters. */
                horizontalAccuracy?: number;
                /** The live location update period in seconds. */
                livePeriod?: number;
                /** The direction of travel in degrees. */
                heading?: number;
                /** The proximity alert radius in meters. */
                proximityAlertRadius?: number;
                [key: string]: unknown;
              };
              /** The venue name. */
              title: string;
              /** The venue address. */
              address: string;
              /** The Foursquare place identifier. */
              foursquareId?: string;
              /** The Foursquare place type. */
              foursquareType?: string;
              /** The Google Places identifier. */
              googlePlaceId?: string;
              /** The Google Places type. */
              googlePlaceType?: string;
              [key: string]: unknown;
            };
            /** A Telegram animated dice result. */
            dice?: {
              /** The emoji used for the animation. */
              emoji: string;
              /** The generated dice value. */
              value: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A normalized Telegram message record. */
          editedMessage?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId?: string;
            /** A Telegram user record. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The message text, when present. */
            text?: string;
            /** The media caption, when present. */
            caption?: string;
            /** The available sizes of the attached photo. */
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
              [key: string]: unknown;
            }>;
            /** A Telegram document file. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original document filename. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram geographic location. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** A Telegram poll. */
            poll?: {
              /** The unique poll identifier. */
              id: string;
              /** The poll question. */
              question: string;
              /** The available poll options. */
              options: Array<{
                /** The poll option text. */
                text: string;
                /** The number of votes for the option. */
                voterCount: number;
                [key: string]: unknown;
              }>;
              /** The total number of poll voters. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The poll type. */
              type: "regular" | "quiz";
              /** Whether the poll allows multiple answers. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The number of seconds the poll remains open. */
              openPeriod?: number;
              /** The explanation shown for a quiz poll. */
              explanation?: string;
              /** The zero-based identifier of the correct quiz option. */
              correctOptionId?: number;
              [key: string]: unknown;
            };
            /** The entities parsed from the message text. */
            entities?: Array<Record<string, unknown>>;
            /** The entities parsed from the media caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** A Telegram user record. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The original message identifier inside the source chat. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded channel post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
            /** A Telegram video file. */
            video?: {
              /** The file identifier used to download or reuse the video. */
              fileId: string;
              /** The stable unique identifier of the video. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The video duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The available sizes of the video cover. */
              cover?: Array<{
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
                [key: string]: unknown;
              }>;
              /** The start timestamp for the video in the message. */
              startTimestamp?: number;
              /** The available encoded video qualities. */
              qualities?: Array<{
                /** The file identifier used to download or reuse this video quality. */
                fileId: string;
                /** The stable unique identifier of this video quality. */
                fileUniqueId: string;
                /** The video width in pixels. */
                width: number;
                /** The video height in pixels. */
                height: number;
                /** The codec used to encode the video. */
                codec: string;
                /** The video quality file size in bytes. */
                fileSize?: number;
                [key: string]: unknown;
              }>;
              /** The original video filename. */
              fileName?: string;
              /** The MIME type of the video. */
              mimeType?: string;
              /** The video file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram audio file. */
            audio?: {
              /** The file identifier used to download or reuse the audio. */
              fileId: string;
              /** The stable unique identifier of the audio. */
              fileUniqueId: string;
              /** The audio duration in seconds. */
              duration: number;
              /** The performer of the audio. */
              performer?: string;
              /** The audio track title. */
              title?: string;
              /** The original audio filename. */
              fileName?: string;
              /** The MIME type of the audio. */
              mimeType?: string;
              /** The audio file size in bytes. */
              fileSize?: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** A Telegram voice message file. */
            voice?: {
              /** The file identifier used to download or reuse the voice message. */
              fileId: string;
              /** The stable unique identifier of the voice message. */
              fileUniqueId: string;
              /** The voice message duration in seconds. */
              duration: number;
              /** The MIME type of the voice message. */
              mimeType?: string;
              /** The voice message file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram animation file. */
            animation?: {
              /** The file identifier used to download or reuse the animation. */
              fileId: string;
              /** The stable unique identifier of the animation. */
              fileUniqueId: string;
              /** The animation width in pixels. */
              width: number;
              /** The animation height in pixels. */
              height: number;
              /** The animation duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The original animation filename. */
              fileName?: string;
              /** The MIME type of the animation. */
              mimeType?: string;
              /** The animation file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram contact. */
            contact?: {
              /** The contact phone number. */
              phoneNumber: string;
              /** The contact first name. */
              firstName: string;
              /** The contact last name. */
              lastName?: string;
              /** The Telegram user identifier associated with the contact. */
              userId?: number;
              /** Additional contact data in vCard format. */
              vcard?: string;
              [key: string]: unknown;
            };
            /** A Telegram venue. */
            venue?: {
              /** A Telegram geographic location. */
              location: {
                /** The latitude of the location. */
                latitude: number;
                /** The longitude of the location. */
                longitude: number;
                /** The radius of uncertainty in meters. */
                horizontalAccuracy?: number;
                /** The live location update period in seconds. */
                livePeriod?: number;
                /** The direction of travel in degrees. */
                heading?: number;
                /** The proximity alert radius in meters. */
                proximityAlertRadius?: number;
                [key: string]: unknown;
              };
              /** The venue name. */
              title: string;
              /** The venue address. */
              address: string;
              /** The Foursquare place identifier. */
              foursquareId?: string;
              /** The Foursquare place type. */
              foursquareType?: string;
              /** The Google Places identifier. */
              googlePlaceId?: string;
              /** The Google Places type. */
              googlePlaceType?: string;
              [key: string]: unknown;
            };
            /** A Telegram animated dice result. */
            dice?: {
              /** The emoji used for the animation. */
              emoji: string;
              /** The generated dice value. */
              value: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A normalized Telegram message record. */
          channelPost?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId?: string;
            /** A Telegram user record. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The message text, when present. */
            text?: string;
            /** The media caption, when present. */
            caption?: string;
            /** The available sizes of the attached photo. */
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
              [key: string]: unknown;
            }>;
            /** A Telegram document file. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original document filename. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram geographic location. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** A Telegram poll. */
            poll?: {
              /** The unique poll identifier. */
              id: string;
              /** The poll question. */
              question: string;
              /** The available poll options. */
              options: Array<{
                /** The poll option text. */
                text: string;
                /** The number of votes for the option. */
                voterCount: number;
                [key: string]: unknown;
              }>;
              /** The total number of poll voters. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The poll type. */
              type: "regular" | "quiz";
              /** Whether the poll allows multiple answers. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The number of seconds the poll remains open. */
              openPeriod?: number;
              /** The explanation shown for a quiz poll. */
              explanation?: string;
              /** The zero-based identifier of the correct quiz option. */
              correctOptionId?: number;
              [key: string]: unknown;
            };
            /** The entities parsed from the message text. */
            entities?: Array<Record<string, unknown>>;
            /** The entities parsed from the media caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** A Telegram user record. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The original message identifier inside the source chat. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded channel post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
            /** A Telegram video file. */
            video?: {
              /** The file identifier used to download or reuse the video. */
              fileId: string;
              /** The stable unique identifier of the video. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The video duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The available sizes of the video cover. */
              cover?: Array<{
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
                [key: string]: unknown;
              }>;
              /** The start timestamp for the video in the message. */
              startTimestamp?: number;
              /** The available encoded video qualities. */
              qualities?: Array<{
                /** The file identifier used to download or reuse this video quality. */
                fileId: string;
                /** The stable unique identifier of this video quality. */
                fileUniqueId: string;
                /** The video width in pixels. */
                width: number;
                /** The video height in pixels. */
                height: number;
                /** The codec used to encode the video. */
                codec: string;
                /** The video quality file size in bytes. */
                fileSize?: number;
                [key: string]: unknown;
              }>;
              /** The original video filename. */
              fileName?: string;
              /** The MIME type of the video. */
              mimeType?: string;
              /** The video file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram audio file. */
            audio?: {
              /** The file identifier used to download or reuse the audio. */
              fileId: string;
              /** The stable unique identifier of the audio. */
              fileUniqueId: string;
              /** The audio duration in seconds. */
              duration: number;
              /** The performer of the audio. */
              performer?: string;
              /** The audio track title. */
              title?: string;
              /** The original audio filename. */
              fileName?: string;
              /** The MIME type of the audio. */
              mimeType?: string;
              /** The audio file size in bytes. */
              fileSize?: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** A Telegram voice message file. */
            voice?: {
              /** The file identifier used to download or reuse the voice message. */
              fileId: string;
              /** The stable unique identifier of the voice message. */
              fileUniqueId: string;
              /** The voice message duration in seconds. */
              duration: number;
              /** The MIME type of the voice message. */
              mimeType?: string;
              /** The voice message file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram animation file. */
            animation?: {
              /** The file identifier used to download or reuse the animation. */
              fileId: string;
              /** The stable unique identifier of the animation. */
              fileUniqueId: string;
              /** The animation width in pixels. */
              width: number;
              /** The animation height in pixels. */
              height: number;
              /** The animation duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The original animation filename. */
              fileName?: string;
              /** The MIME type of the animation. */
              mimeType?: string;
              /** The animation file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram contact. */
            contact?: {
              /** The contact phone number. */
              phoneNumber: string;
              /** The contact first name. */
              firstName: string;
              /** The contact last name. */
              lastName?: string;
              /** The Telegram user identifier associated with the contact. */
              userId?: number;
              /** Additional contact data in vCard format. */
              vcard?: string;
              [key: string]: unknown;
            };
            /** A Telegram venue. */
            venue?: {
              /** A Telegram geographic location. */
              location: {
                /** The latitude of the location. */
                latitude: number;
                /** The longitude of the location. */
                longitude: number;
                /** The radius of uncertainty in meters. */
                horizontalAccuracy?: number;
                /** The live location update period in seconds. */
                livePeriod?: number;
                /** The direction of travel in degrees. */
                heading?: number;
                /** The proximity alert radius in meters. */
                proximityAlertRadius?: number;
                [key: string]: unknown;
              };
              /** The venue name. */
              title: string;
              /** The venue address. */
              address: string;
              /** The Foursquare place identifier. */
              foursquareId?: string;
              /** The Foursquare place type. */
              foursquareType?: string;
              /** The Google Places identifier. */
              googlePlaceId?: string;
              /** The Google Places type. */
              googlePlaceType?: string;
              [key: string]: unknown;
            };
            /** A Telegram animated dice result. */
            dice?: {
              /** The emoji used for the animation. */
              emoji: string;
              /** The generated dice value. */
              value: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A normalized Telegram message record. */
          editedChannelPost?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId?: string;
            /** A Telegram user record. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The message text, when present. */
            text?: string;
            /** The media caption, when present. */
            caption?: string;
            /** The available sizes of the attached photo. */
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
              [key: string]: unknown;
            }>;
            /** A Telegram document file. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original document filename. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram geographic location. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** A Telegram poll. */
            poll?: {
              /** The unique poll identifier. */
              id: string;
              /** The poll question. */
              question: string;
              /** The available poll options. */
              options: Array<{
                /** The poll option text. */
                text: string;
                /** The number of votes for the option. */
                voterCount: number;
                [key: string]: unknown;
              }>;
              /** The total number of poll voters. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The poll type. */
              type: "regular" | "quiz";
              /** Whether the poll allows multiple answers. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The number of seconds the poll remains open. */
              openPeriod?: number;
              /** The explanation shown for a quiz poll. */
              explanation?: string;
              /** The zero-based identifier of the correct quiz option. */
              correctOptionId?: number;
              [key: string]: unknown;
            };
            /** The entities parsed from the message text. */
            entities?: Array<Record<string, unknown>>;
            /** The entities parsed from the media caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** A Telegram user record. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The original message identifier inside the source chat. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded channel post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
            /** A Telegram video file. */
            video?: {
              /** The file identifier used to download or reuse the video. */
              fileId: string;
              /** The stable unique identifier of the video. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The video duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The available sizes of the video cover. */
              cover?: Array<{
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
                [key: string]: unknown;
              }>;
              /** The start timestamp for the video in the message. */
              startTimestamp?: number;
              /** The available encoded video qualities. */
              qualities?: Array<{
                /** The file identifier used to download or reuse this video quality. */
                fileId: string;
                /** The stable unique identifier of this video quality. */
                fileUniqueId: string;
                /** The video width in pixels. */
                width: number;
                /** The video height in pixels. */
                height: number;
                /** The codec used to encode the video. */
                codec: string;
                /** The video quality file size in bytes. */
                fileSize?: number;
                [key: string]: unknown;
              }>;
              /** The original video filename. */
              fileName?: string;
              /** The MIME type of the video. */
              mimeType?: string;
              /** The video file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram audio file. */
            audio?: {
              /** The file identifier used to download or reuse the audio. */
              fileId: string;
              /** The stable unique identifier of the audio. */
              fileUniqueId: string;
              /** The audio duration in seconds. */
              duration: number;
              /** The performer of the audio. */
              performer?: string;
              /** The audio track title. */
              title?: string;
              /** The original audio filename. */
              fileName?: string;
              /** The MIME type of the audio. */
              mimeType?: string;
              /** The audio file size in bytes. */
              fileSize?: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** A Telegram voice message file. */
            voice?: {
              /** The file identifier used to download or reuse the voice message. */
              fileId: string;
              /** The stable unique identifier of the voice message. */
              fileUniqueId: string;
              /** The voice message duration in seconds. */
              duration: number;
              /** The MIME type of the voice message. */
              mimeType?: string;
              /** The voice message file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram animation file. */
            animation?: {
              /** The file identifier used to download or reuse the animation. */
              fileId: string;
              /** The stable unique identifier of the animation. */
              fileUniqueId: string;
              /** The animation width in pixels. */
              width: number;
              /** The animation height in pixels. */
              height: number;
              /** The animation duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The original animation filename. */
              fileName?: string;
              /** The MIME type of the animation. */
              mimeType?: string;
              /** The animation file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram contact. */
            contact?: {
              /** The contact phone number. */
              phoneNumber: string;
              /** The contact first name. */
              firstName: string;
              /** The contact last name. */
              lastName?: string;
              /** The Telegram user identifier associated with the contact. */
              userId?: number;
              /** Additional contact data in vCard format. */
              vcard?: string;
              [key: string]: unknown;
            };
            /** A Telegram venue. */
            venue?: {
              /** A Telegram geographic location. */
              location: {
                /** The latitude of the location. */
                latitude: number;
                /** The longitude of the location. */
                longitude: number;
                /** The radius of uncertainty in meters. */
                horizontalAccuracy?: number;
                /** The live location update period in seconds. */
                livePeriod?: number;
                /** The direction of travel in degrees. */
                heading?: number;
                /** The proximity alert radius in meters. */
                proximityAlertRadius?: number;
                [key: string]: unknown;
              };
              /** The venue name. */
              title: string;
              /** The venue address. */
              address: string;
              /** The Foursquare place identifier. */
              foursquareId?: string;
              /** The Foursquare place type. */
              foursquareType?: string;
              /** The Google Places identifier. */
              googlePlaceId?: string;
              /** The Google Places type. */
              googlePlaceType?: string;
              [key: string]: unknown;
            };
            /** A Telegram animated dice result. */
            dice?: {
              /** The emoji used for the animation. */
              emoji: string;
              /** The generated dice value. */
              value: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The callback query payload. */
          callbackQuery?: Record<string, unknown>;
          /** A Telegram business account connection. */
          businessConnection?: {
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            id: string;
            /** A Telegram user record. */
            user: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** The private chat identifier for the user who created the connection. */
            userChatId: number;
            /** The Unix timestamp when the connection was established. */
            date: number;
            /** The rights granted to the bot for a Telegram business connection. */
            rights?: {
              /** Whether the bot can send and edit messages in eligible private chats. */
              canReply?: boolean;
              /** Whether the bot can mark incoming private messages as read. */
              canReadMessages?: boolean;
              /** Whether the bot can delete messages sent by the bot. */
              canDeleteSentMessages?: boolean;
              /** Whether the bot can delete all messages in managed private chats. */
              canDeleteAllMessages?: boolean;
              /** Whether the bot can edit the business account name. */
              canEditName?: boolean;
              /** Whether the bot can edit the business account bio. */
              canEditBio?: boolean;
              /** Whether the bot can edit the business account profile photo. */
              canEditProfilePhoto?: boolean;
              /** Whether the bot can edit the business account username. */
              canEditUsername?: boolean;
              /** Whether the bot can change business gift settings. */
              canChangeGiftSettings?: boolean;
              /** Whether the bot can view business gifts and Stars. */
              canViewGiftsAndStars?: boolean;
              /** Whether the bot can convert business gifts to Stars. */
              canConvertGiftsToStars?: boolean;
              /** Whether the bot can transfer and upgrade business gifts. */
              canTransferAndUpgradeGifts?: boolean;
              /** Whether the bot can transfer business account Stars. */
              canTransferStars?: boolean;
              /** Whether the bot can manage stories for the business account. */
              canManageStories?: boolean;
            };
            /** Whether the business connection is active. */
            isEnabled: boolean;
          };
          /** A normalized Telegram message record. */
          businessMessage?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId?: string;
            /** A Telegram user record. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The message text, when present. */
            text?: string;
            /** The media caption, when present. */
            caption?: string;
            /** The available sizes of the attached photo. */
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
              [key: string]: unknown;
            }>;
            /** A Telegram document file. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original document filename. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram geographic location. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** A Telegram poll. */
            poll?: {
              /** The unique poll identifier. */
              id: string;
              /** The poll question. */
              question: string;
              /** The available poll options. */
              options: Array<{
                /** The poll option text. */
                text: string;
                /** The number of votes for the option. */
                voterCount: number;
                [key: string]: unknown;
              }>;
              /** The total number of poll voters. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The poll type. */
              type: "regular" | "quiz";
              /** Whether the poll allows multiple answers. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The number of seconds the poll remains open. */
              openPeriod?: number;
              /** The explanation shown for a quiz poll. */
              explanation?: string;
              /** The zero-based identifier of the correct quiz option. */
              correctOptionId?: number;
              [key: string]: unknown;
            };
            /** The entities parsed from the message text. */
            entities?: Array<Record<string, unknown>>;
            /** The entities parsed from the media caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** A Telegram user record. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The original message identifier inside the source chat. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded channel post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
            /** A Telegram video file. */
            video?: {
              /** The file identifier used to download or reuse the video. */
              fileId: string;
              /** The stable unique identifier of the video. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The video duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The available sizes of the video cover. */
              cover?: Array<{
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
                [key: string]: unknown;
              }>;
              /** The start timestamp for the video in the message. */
              startTimestamp?: number;
              /** The available encoded video qualities. */
              qualities?: Array<{
                /** The file identifier used to download or reuse this video quality. */
                fileId: string;
                /** The stable unique identifier of this video quality. */
                fileUniqueId: string;
                /** The video width in pixels. */
                width: number;
                /** The video height in pixels. */
                height: number;
                /** The codec used to encode the video. */
                codec: string;
                /** The video quality file size in bytes. */
                fileSize?: number;
                [key: string]: unknown;
              }>;
              /** The original video filename. */
              fileName?: string;
              /** The MIME type of the video. */
              mimeType?: string;
              /** The video file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram audio file. */
            audio?: {
              /** The file identifier used to download or reuse the audio. */
              fileId: string;
              /** The stable unique identifier of the audio. */
              fileUniqueId: string;
              /** The audio duration in seconds. */
              duration: number;
              /** The performer of the audio. */
              performer?: string;
              /** The audio track title. */
              title?: string;
              /** The original audio filename. */
              fileName?: string;
              /** The MIME type of the audio. */
              mimeType?: string;
              /** The audio file size in bytes. */
              fileSize?: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** A Telegram voice message file. */
            voice?: {
              /** The file identifier used to download or reuse the voice message. */
              fileId: string;
              /** The stable unique identifier of the voice message. */
              fileUniqueId: string;
              /** The voice message duration in seconds. */
              duration: number;
              /** The MIME type of the voice message. */
              mimeType?: string;
              /** The voice message file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram animation file. */
            animation?: {
              /** The file identifier used to download or reuse the animation. */
              fileId: string;
              /** The stable unique identifier of the animation. */
              fileUniqueId: string;
              /** The animation width in pixels. */
              width: number;
              /** The animation height in pixels. */
              height: number;
              /** The animation duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The original animation filename. */
              fileName?: string;
              /** The MIME type of the animation. */
              mimeType?: string;
              /** The animation file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram contact. */
            contact?: {
              /** The contact phone number. */
              phoneNumber: string;
              /** The contact first name. */
              firstName: string;
              /** The contact last name. */
              lastName?: string;
              /** The Telegram user identifier associated with the contact. */
              userId?: number;
              /** Additional contact data in vCard format. */
              vcard?: string;
              [key: string]: unknown;
            };
            /** A Telegram venue. */
            venue?: {
              /** A Telegram geographic location. */
              location: {
                /** The latitude of the location. */
                latitude: number;
                /** The longitude of the location. */
                longitude: number;
                /** The radius of uncertainty in meters. */
                horizontalAccuracy?: number;
                /** The live location update period in seconds. */
                livePeriod?: number;
                /** The direction of travel in degrees. */
                heading?: number;
                /** The proximity alert radius in meters. */
                proximityAlertRadius?: number;
                [key: string]: unknown;
              };
              /** The venue name. */
              title: string;
              /** The venue address. */
              address: string;
              /** The Foursquare place identifier. */
              foursquareId?: string;
              /** The Foursquare place type. */
              foursquareType?: string;
              /** The Google Places identifier. */
              googlePlaceId?: string;
              /** The Google Places type. */
              googlePlaceType?: string;
              [key: string]: unknown;
            };
            /** A Telegram animated dice result. */
            dice?: {
              /** The emoji used for the animation. */
              emoji: string;
              /** The generated dice value. */
              value: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A normalized Telegram message record. */
          editedBusinessMessage?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId?: string;
            /** A Telegram user record. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The message text, when present. */
            text?: string;
            /** The media caption, when present. */
            caption?: string;
            /** The available sizes of the attached photo. */
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
              [key: string]: unknown;
            }>;
            /** A Telegram document file. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original document filename. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram geographic location. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** A Telegram poll. */
            poll?: {
              /** The unique poll identifier. */
              id: string;
              /** The poll question. */
              question: string;
              /** The available poll options. */
              options: Array<{
                /** The poll option text. */
                text: string;
                /** The number of votes for the option. */
                voterCount: number;
                [key: string]: unknown;
              }>;
              /** The total number of poll voters. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The poll type. */
              type: "regular" | "quiz";
              /** Whether the poll allows multiple answers. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The number of seconds the poll remains open. */
              openPeriod?: number;
              /** The explanation shown for a quiz poll. */
              explanation?: string;
              /** The zero-based identifier of the correct quiz option. */
              correctOptionId?: number;
              [key: string]: unknown;
            };
            /** The entities parsed from the message text. */
            entities?: Array<Record<string, unknown>>;
            /** The entities parsed from the media caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** A Telegram user record. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether the account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              [key: string]: unknown;
            };
            /** A Telegram chat record. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The original message identifier inside the source chat. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded channel post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
            /** A Telegram video file. */
            video?: {
              /** The file identifier used to download or reuse the video. */
              fileId: string;
              /** The stable unique identifier of the video. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The video duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The available sizes of the video cover. */
              cover?: Array<{
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
                [key: string]: unknown;
              }>;
              /** The start timestamp for the video in the message. */
              startTimestamp?: number;
              /** The available encoded video qualities. */
              qualities?: Array<{
                /** The file identifier used to download or reuse this video quality. */
                fileId: string;
                /** The stable unique identifier of this video quality. */
                fileUniqueId: string;
                /** The video width in pixels. */
                width: number;
                /** The video height in pixels. */
                height: number;
                /** The codec used to encode the video. */
                codec: string;
                /** The video quality file size in bytes. */
                fileSize?: number;
                [key: string]: unknown;
              }>;
              /** The original video filename. */
              fileName?: string;
              /** The MIME type of the video. */
              mimeType?: string;
              /** The video file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram audio file. */
            audio?: {
              /** The file identifier used to download or reuse the audio. */
              fileId: string;
              /** The stable unique identifier of the audio. */
              fileUniqueId: string;
              /** The audio duration in seconds. */
              duration: number;
              /** The performer of the audio. */
              performer?: string;
              /** The audio track title. */
              title?: string;
              /** The original audio filename. */
              fileName?: string;
              /** The MIME type of the audio. */
              mimeType?: string;
              /** The audio file size in bytes. */
              fileSize?: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** A Telegram voice message file. */
            voice?: {
              /** The file identifier used to download or reuse the voice message. */
              fileId: string;
              /** The stable unique identifier of the voice message. */
              fileUniqueId: string;
              /** The voice message duration in seconds. */
              duration: number;
              /** The MIME type of the voice message. */
              mimeType?: string;
              /** The voice message file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram animation file. */
            animation?: {
              /** The file identifier used to download or reuse the animation. */
              fileId: string;
              /** The stable unique identifier of the animation. */
              fileUniqueId: string;
              /** The animation width in pixels. */
              width: number;
              /** The animation height in pixels. */
              height: number;
              /** The animation duration in seconds. */
              duration: number;
              /** A Telegram photo or thumbnail size. */
              thumbnail?: {
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
                [key: string]: unknown;
              };
              /** The original animation filename. */
              fileName?: string;
              /** The MIME type of the animation. */
              mimeType?: string;
              /** The animation file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            };
            /** A Telegram contact. */
            contact?: {
              /** The contact phone number. */
              phoneNumber: string;
              /** The contact first name. */
              firstName: string;
              /** The contact last name. */
              lastName?: string;
              /** The Telegram user identifier associated with the contact. */
              userId?: number;
              /** Additional contact data in vCard format. */
              vcard?: string;
              [key: string]: unknown;
            };
            /** A Telegram venue. */
            venue?: {
              /** A Telegram geographic location. */
              location: {
                /** The latitude of the location. */
                latitude: number;
                /** The longitude of the location. */
                longitude: number;
                /** The radius of uncertainty in meters. */
                horizontalAccuracy?: number;
                /** The live location update period in seconds. */
                livePeriod?: number;
                /** The direction of travel in degrees. */
                heading?: number;
                /** The proximity alert radius in meters. */
                proximityAlertRadius?: number;
                [key: string]: unknown;
              };
              /** The venue name. */
              title: string;
              /** The venue address. */
              address: string;
              /** The Foursquare place identifier. */
              foursquareId?: string;
              /** The Foursquare place type. */
              foursquareType?: string;
              /** The Google Places identifier. */
              googlePlaceId?: string;
              /** The Google Places type. */
              googlePlaceType?: string;
              [key: string]: unknown;
            };
            /** A Telegram animated dice result. */
            dice?: {
              /** The emoji used for the animation. */
              emoji: string;
              /** The generated dice value. */
              value: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A Telegram business message deletion event. */
          deletedBusinessMessages?: {
            /**
             * The unique identifier of the Telegram business connection.
             * @minLength 1
             */
            businessConnectionId: string;
            /** A Telegram chat record. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type. */
              type: string;
              /** The chat title. */
              title?: string;
              /** The public username of the chat. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              [key: string]: unknown;
            };
            /** The identifiers of messages deleted from the business chat. */
            messageIds: Array<number>;
          };
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
    /** Pin a message in a Telegram chat. */
    "telegram.pin_chat_message": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * A Telegram message identifier.
         * @exclusiveMinimum 0
         */
        messageId: number;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** Whether to suppress the pin notification. */
        disableNotification?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Promote, update, or demote a supergroup or channel administrator. */
    "telegram.promote_chat_member": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target user identifier. */
        userId: number;
        /** Whether the administrator is hidden. */
        isAnonymous?: boolean;
        /** Whether the administrator can access general chat management features. */
        canManageChat?: boolean;
        /** Whether the administrator can delete other users' messages. */
        canDeleteMessages?: boolean;
        /** Whether the administrator can manage video chats. */
        canManageVideoChats?: boolean;
        /** Whether the administrator can restrict or ban members. */
        canRestrictMembers?: boolean;
        /** Whether the administrator can appoint other administrators. */
        canPromoteMembers?: boolean;
        /** Whether the administrator can change chat information. */
        canChangeInfo?: boolean;
        /** Whether the administrator can invite users. */
        canInviteUsers?: boolean;
        /** Whether the administrator can post stories. */
        canPostStories?: boolean;
        /** Whether the administrator can edit stories. */
        canEditStories?: boolean;
        /** Whether the administrator can delete stories. */
        canDeleteStories?: boolean;
        /** Whether the administrator can post channel messages. */
        canPostMessages?: boolean;
        /** Whether the administrator can edit channel messages. */
        canEditMessages?: boolean;
        /** Whether the administrator can pin messages. */
        canPinMessages?: boolean;
        /** Whether the administrator can manage forum topics. */
        canManageTopics?: boolean;
        /** Whether the administrator can manage channel direct messages. */
        canManageDirectMessages?: boolean;
        /** Whether the administrator can manage member tags. */
        canManageTags?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Mark an incoming message as read on behalf of a connected Telegram business account. */
    "telegram.read_business_message": {
      input: {
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId: string;
        /** The identifier of the active private chat. */
        chatId: number;
        /**
         * The identifier of the message to mark as read.
         * @exclusiveMinimum 0
         */
        messageId: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Set temporary or permanent permissions for one supergroup member. */
    "telegram.restrict_chat_member": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target user identifier. */
        userId: number;
        /** The permissions granted to chat members. */
        permissions: {
          /** Whether users may send text messages, contacts, giveaways, and locations. */
          canSendMessages?: boolean;
          /** Whether users may send audio files. */
          canSendAudios?: boolean;
          /** Whether users may send documents. */
          canSendDocuments?: boolean;
          /** Whether users may send photos. */
          canSendPhotos?: boolean;
          /** Whether users may send videos. */
          canSendVideos?: boolean;
          /** Whether users may send video notes. */
          canSendVideoNotes?: boolean;
          /** Whether users may send voice notes. */
          canSendVoiceNotes?: boolean;
          /** Whether users may send polls. */
          canSendPolls?: boolean;
          /** Whether users may send animations, games, stickers, and other media. */
          canSendOtherMessages?: boolean;
          /** Whether users may add web page previews. */
          canAddWebPagePreviews?: boolean;
          /** Whether users may change chat information. */
          canChangeInfo?: boolean;
          /** Whether users may invite new users. */
          canInviteUsers?: boolean;
          /** Whether users may pin messages. */
          canPinMessages?: boolean;
          /** Whether users may create and manage forum topics. */
          canManageTopics?: boolean;
        };
        /** Whether each media permission is applied independently. */
        useIndependentChatPermissions?: boolean;
        /** The Unix timestamp when the restrictions end. */
        untilDate?: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Revoke a Telegram chat invite link created by the bot. */
    "telegram.revoke_chat_invite_link": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The invite link to revoke.
         * @minLength 1
         */
        inviteLink: string;
      };
      output: {
        /** The invite link. */
        inviteLink: string;
        /** A Telegram user record. */
        creator: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** Whether users must be approved by chat administrators. */
        createsJoinRequest: boolean;
        /** Whether the link is the primary invite link. */
        isPrimary: boolean;
        /** Whether the link has been revoked. */
        isRevoked: boolean;
        /** The invite link name. */
        name?: string;
        /** The Unix timestamp when the link expires. */
        expireDate?: number;
        /** The maximum number of simultaneous members using the link. */
        memberLimit?: number;
        /** The number of pending join requests created through the link. */
        pendingJoinRequestCount?: number;
        /** The subscription period in seconds. */
        subscriptionPeriod?: number;
        /** The subscription price in Telegram Stars. */
        subscriptionPrice?: number;
      };
    };
    /** Send a GIF or silent MPEG-4 animation by URL or Telegram file_id. */
    "telegram.send_animation": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The HTTP URL or Telegram file_id of the GIF or silent MPEG-4 animation.
         * @minLength 1
         */
        animation: string;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The media caption.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode for the caption. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /**
         * The media duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the media silently. */
        disableNotification?: boolean;
        /** Whether to protect the media from forwarding and saving. */
        protectContent?: boolean;
        /**
         * The animation width.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The animation height.
         * @exclusiveMinimum 0
         */
        height?: number;
        /** Whether to show the caption above the animation. */
        showCaptionAboveMedia?: boolean;
        /** Whether to cover the animation with a spoiler animation. */
        hasSpoiler?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Send an MP3 or M4A audio track by URL or Telegram file_id. */
    "telegram.send_audio": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The HTTP URL or Telegram file_id of the MP3 or M4A audio to send.
         * @minLength 1
         */
        audio: string;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The media caption.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode for the caption. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /**
         * The media duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the media silently. */
        disableNotification?: boolean;
        /** Whether to protect the media from forwarding and saving. */
        protectContent?: boolean;
        /** The audio performer. */
        performer?: string;
        /** The audio track name. */
        title?: string;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Show a temporary typing, upload, recording, or location activity status in a chat. */
    "telegram.send_chat_action": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The activity status to broadcast. */
        action: "typing" | "upload_photo" | "record_video" | "upload_video" | "record_voice" | "upload_voice" | "upload_document" | "choose_sticker" | "find_location" | "record_video_note" | "upload_video_note";
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Send a phone contact to a Telegram chat. */
    "telegram.send_contact": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The contact phone number.
         * @minLength 1
         */
        phoneNumber: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName: string;
        /** The contact last name. */
        lastName?: string;
        /**
         * Additional contact data in vCard format.
         * @maxLength 2048
         */
        vcard?: string;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the contact silently. */
        disableNotification?: boolean;
        /** Whether to protect the contact from forwarding and saving. */
        protectContent?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Send an animated dice, darts, basketball, football, bowling, or slot-machine emoji. */
    "telegram.send_dice": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The dice animation emoji. */
        emoji?: "🎲" | "🎯" | "🏀" | "⚽" | "🎳" | "🎰";
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the animation silently. */
        disableNotification?: boolean;
        /** Whether to protect the animation from forwarding. */
        protectContent?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
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
    /** Send an album containing 2-10 photos, videos, documents, or audio items. */
    "telegram.send_media_group": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The InputMedia objects in the album.
         * @minItems 2
         * @maxItems 10
         */
        media: Array<{
          /** The media type. */
          type: "photo" | "video" | "audio" | "document";
          /**
           * The HTTP URL or Telegram file_id of the media.
           * @minLength 1
           */
          media: string;
          [key: string]: unknown;
        }>;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the album silently. */
        disableNotification?: boolean;
        /** Whether to protect the album from forwarding and saving. */
        protectContent?: boolean;
      };
      output: {
        /** The sent media messages. */
        messages: Array<{
          /** The unique message identifier inside the chat. */
          messageId: number;
          /** The Unix timestamp when the message was sent. */
          date: number;
          /** A Telegram chat record. */
          chat: {
            /** The unique identifier of the chat. */
            id: number;
            /** The chat type. */
            type: string;
            /** The chat title. */
            title?: string;
            /** The public username of the chat. */
            username?: string;
            /** The first name for a private chat counterpart. */
            firstName?: string;
            /** The last name for a private chat counterpart. */
            lastName?: string;
            [key: string]: unknown;
          };
          /**
           * The unique identifier of the Telegram business connection.
           * @minLength 1
           */
          businessConnectionId?: string;
          /** A Telegram user record. */
          from?: {
            /** The unique identifier of the user or bot. */
            id: number;
            /** Whether the account is a bot. */
            isBot: boolean;
            /** The first name of the user or bot. */
            firstName: string;
            /** The username of the user or bot. */
            username?: string;
            [key: string]: unknown;
          };
          /** A Telegram chat record. */
          senderChat?: {
            /** The unique identifier of the chat. */
            id: number;
            /** The chat type. */
            type: string;
            /** The chat title. */
            title?: string;
            /** The public username of the chat. */
            username?: string;
            /** The first name for a private chat counterpart. */
            firstName?: string;
            /** The last name for a private chat counterpart. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** The message text, when present. */
          text?: string;
          /** The media caption, when present. */
          caption?: string;
          /** The available sizes of the attached photo. */
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
            [key: string]: unknown;
          }>;
          /** A Telegram document file. */
          document?: {
            /** The file identifier used to download or reuse the document. */
            fileId: string;
            /** The stable unique identifier of the document. */
            fileUniqueId: string;
            /** The original document filename. */
            fileName?: string;
            /** The MIME type of the document. */
            mimeType?: string;
            /** The document file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          };
          /** A Telegram geographic location. */
          location?: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** A Telegram poll. */
          poll?: {
            /** The unique poll identifier. */
            id: string;
            /** The poll question. */
            question: string;
            /** The available poll options. */
            options: Array<{
              /** The poll option text. */
              text: string;
              /** The number of votes for the option. */
              voterCount: number;
              [key: string]: unknown;
            }>;
            /** The total number of poll voters. */
            totalVoterCount: number;
            /** Whether the poll is closed. */
            isClosed: boolean;
            /** Whether the poll is anonymous. */
            isAnonymous: boolean;
            /** The poll type. */
            type: "regular" | "quiz";
            /** Whether the poll allows multiple answers. */
            allowsMultipleAnswers: boolean;
            /** The Unix timestamp when the poll closes. */
            closeDate?: number;
            /** The number of seconds the poll remains open. */
            openPeriod?: number;
            /** The explanation shown for a quiz poll. */
            explanation?: string;
            /** The zero-based identifier of the correct quiz option. */
            correctOptionId?: number;
            [key: string]: unknown;
          };
          /** The entities parsed from the message text. */
          entities?: Array<Record<string, unknown>>;
          /** The entities parsed from the media caption. */
          captionEntities?: Array<Record<string, unknown>>;
          /** The Unix timestamp of the original forwarded message. */
          forwardDate?: number;
          /** A Telegram user record. */
          forwardFrom?: {
            /** The unique identifier of the user or bot. */
            id: number;
            /** Whether the account is a bot. */
            isBot: boolean;
            /** The first name of the user or bot. */
            firstName: string;
            /** The username of the user or bot. */
            username?: string;
            [key: string]: unknown;
          };
          /** A Telegram chat record. */
          forwardFromChat?: {
            /** The unique identifier of the chat. */
            id: number;
            /** The chat type. */
            type: string;
            /** The chat title. */
            title?: string;
            /** The public username of the chat. */
            username?: string;
            /** The first name for a private chat counterpart. */
            firstName?: string;
            /** The last name for a private chat counterpart. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** The original message identifier inside the source chat. */
          forwardFromMessageId?: number;
          /** The original author signature for a forwarded channel post. */
          forwardSignature?: string;
          /** The display name of a forwarded sender who disallows linking. */
          forwardSenderName?: string;
          /** The link preview options attached to the message. */
          linkPreviewOptions?: Record<string, unknown>;
          /** A Telegram video file. */
          video?: {
            /** The file identifier used to download or reuse the video. */
            fileId: string;
            /** The stable unique identifier of the video. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The video duration in seconds. */
            duration: number;
            /** A Telegram photo or thumbnail size. */
            thumbnail?: {
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
              [key: string]: unknown;
            };
            /** The available sizes of the video cover. */
            cover?: Array<{
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
              [key: string]: unknown;
            }>;
            /** The start timestamp for the video in the message. */
            startTimestamp?: number;
            /** The available encoded video qualities. */
            qualities?: Array<{
              /** The file identifier used to download or reuse this video quality. */
              fileId: string;
              /** The stable unique identifier of this video quality. */
              fileUniqueId: string;
              /** The video width in pixels. */
              width: number;
              /** The video height in pixels. */
              height: number;
              /** The codec used to encode the video. */
              codec: string;
              /** The video quality file size in bytes. */
              fileSize?: number;
              [key: string]: unknown;
            }>;
            /** The original video filename. */
            fileName?: string;
            /** The MIME type of the video. */
            mimeType?: string;
            /** The video file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          };
          /** A Telegram audio file. */
          audio?: {
            /** The file identifier used to download or reuse the audio. */
            fileId: string;
            /** The stable unique identifier of the audio. */
            fileUniqueId: string;
            /** The audio duration in seconds. */
            duration: number;
            /** The performer of the audio. */
            performer?: string;
            /** The audio track title. */
            title?: string;
            /** The original audio filename. */
            fileName?: string;
            /** The MIME type of the audio. */
            mimeType?: string;
            /** The audio file size in bytes. */
            fileSize?: number;
            /** A Telegram photo or thumbnail size. */
            thumbnail?: {
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
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A Telegram voice message file. */
          voice?: {
            /** The file identifier used to download or reuse the voice message. */
            fileId: string;
            /** The stable unique identifier of the voice message. */
            fileUniqueId: string;
            /** The voice message duration in seconds. */
            duration: number;
            /** The MIME type of the voice message. */
            mimeType?: string;
            /** The voice message file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          };
          /** A Telegram animation file. */
          animation?: {
            /** The file identifier used to download or reuse the animation. */
            fileId: string;
            /** The stable unique identifier of the animation. */
            fileUniqueId: string;
            /** The animation width in pixels. */
            width: number;
            /** The animation height in pixels. */
            height: number;
            /** The animation duration in seconds. */
            duration: number;
            /** A Telegram photo or thumbnail size. */
            thumbnail?: {
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
              [key: string]: unknown;
            };
            /** The original animation filename. */
            fileName?: string;
            /** The MIME type of the animation. */
            mimeType?: string;
            /** The animation file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          };
          /** A Telegram contact. */
          contact?: {
            /** The contact phone number. */
            phoneNumber: string;
            /** The contact first name. */
            firstName: string;
            /** The contact last name. */
            lastName?: string;
            /** The Telegram user identifier associated with the contact. */
            userId?: number;
            /** Additional contact data in vCard format. */
            vcard?: string;
            [key: string]: unknown;
          };
          /** A Telegram venue. */
          venue?: {
            /** A Telegram geographic location. */
            location: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction of travel in degrees. */
              heading?: number;
              /** The proximity alert radius in meters. */
              proximityAlertRadius?: number;
              [key: string]: unknown;
            };
            /** The venue name. */
            title: string;
            /** The venue address. */
            address: string;
            /** The Foursquare place identifier. */
            foursquareId?: string;
            /** The Foursquare place type. */
            foursquareType?: string;
            /** The Google Places identifier. */
            googlePlaceId?: string;
            /** The Google Places type. */
            googlePlaceType?: string;
            [key: string]: unknown;
          };
          /** A Telegram animated dice result. */
          dice?: {
            /** The emoji used for the animation. */
            emoji: string;
            /** The generated dice value. */
            value: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
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
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
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
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
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
    /** Send a venue with coordinates, title, address, and optional place identifiers. */
    "telegram.send_venue": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The venue latitude.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The venue longitude.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * The venue name.
         * @minLength 1
         */
        title: string;
        /**
         * The venue address.
         * @minLength 1
         */
        address: string;
        /** The Foursquare place identifier. */
        foursquareId?: string;
        /** The Foursquare place type. */
        foursquareType?: string;
        /** The Google Places identifier. */
        googlePlaceId?: string;
        /** The Google Places type. */
        googlePlaceType?: string;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the venue silently. */
        disableNotification?: boolean;
        /** Whether to protect the venue from forwarding and saving. */
        protectContent?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Send an MPEG-4 video by URL or Telegram file_id. */
    "telegram.send_video": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The HTTP URL or Telegram file_id of the MPEG-4 video to send.
         * @minLength 1
         */
        video: string;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The media caption.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode for the caption. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /**
         * The media duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the media silently. */
        disableNotification?: boolean;
        /** Whether to protect the media from forwarding and saving. */
        protectContent?: boolean;
        /**
         * The video width.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The video height.
         * @exclusiveMinimum 0
         */
        height?: number;
        /** The HTTP URL or Telegram file_id of the video cover. */
        cover?: string;
        /**
         * The start timestamp shown for the video.
         * @minimum 0
         */
        startTimestamp?: number;
        /** Whether to show the caption above the video. */
        showCaptionAboveMedia?: boolean;
        /** Whether to cover the video with a spoiler animation. */
        hasSpoiler?: boolean;
        /** Whether the video supports streaming. */
        supportsStreaming?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Send a playable voice message by URL or Telegram file_id. */
    "telegram.send_voice": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The HTTP URL or Telegram file_id of the OGG, MP3, or M4A voice message.
         * @minLength 1
         */
        voice: string;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /**
         * The media caption.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode for the caption. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /**
         * The media duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The target forum topic identifier.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /** Whether to send the media silently. */
        disableNotification?: boolean;
        /** Whether to protect the media from forwarding and saving. */
        protectContent?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** A Telegram chat record. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
        /** A Telegram user record. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The message text, when present. */
        text?: string;
        /** The media caption, when present. */
        caption?: string;
        /** The available sizes of the attached photo. */
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
          [key: string]: unknown;
        }>;
        /** A Telegram document file. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original document filename. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram geographic location. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction of travel in degrees. */
          heading?: number;
          /** The proximity alert radius in meters. */
          proximityAlertRadius?: number;
          [key: string]: unknown;
        };
        /** A Telegram poll. */
        poll?: {
          /** The unique poll identifier. */
          id: string;
          /** The poll question. */
          question: string;
          /** The available poll options. */
          options: Array<{
            /** The poll option text. */
            text: string;
            /** The number of votes for the option. */
            voterCount: number;
            [key: string]: unknown;
          }>;
          /** The total number of poll voters. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The poll type. */
          type: "regular" | "quiz";
          /** Whether the poll allows multiple answers. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The number of seconds the poll remains open. */
          openPeriod?: number;
          /** The explanation shown for a quiz poll. */
          explanation?: string;
          /** The zero-based identifier of the correct quiz option. */
          correctOptionId?: number;
          [key: string]: unknown;
        };
        /** The entities parsed from the message text. */
        entities?: Array<Record<string, unknown>>;
        /** The entities parsed from the media caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** A Telegram user record. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether the account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          [key: string]: unknown;
        };
        /** A Telegram chat record. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type. */
          type: string;
          /** The chat title. */
          title?: string;
          /** The public username of the chat. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          [key: string]: unknown;
        };
        /** The original message identifier inside the source chat. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded channel post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
        /** A Telegram video file. */
        video?: {
          /** The file identifier used to download or reuse the video. */
          fileId: string;
          /** The stable unique identifier of the video. */
          fileUniqueId: string;
          /** The video width in pixels. */
          width: number;
          /** The video height in pixels. */
          height: number;
          /** The video duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The available sizes of the video cover. */
          cover?: Array<{
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
            [key: string]: unknown;
          }>;
          /** The start timestamp for the video in the message. */
          startTimestamp?: number;
          /** The available encoded video qualities. */
          qualities?: Array<{
            /** The file identifier used to download or reuse this video quality. */
            fileId: string;
            /** The stable unique identifier of this video quality. */
            fileUniqueId: string;
            /** The video width in pixels. */
            width: number;
            /** The video height in pixels. */
            height: number;
            /** The codec used to encode the video. */
            codec: string;
            /** The video quality file size in bytes. */
            fileSize?: number;
            [key: string]: unknown;
          }>;
          /** The original video filename. */
          fileName?: string;
          /** The MIME type of the video. */
          mimeType?: string;
          /** The video file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram audio file. */
        audio?: {
          /** The file identifier used to download or reuse the audio. */
          fileId: string;
          /** The stable unique identifier of the audio. */
          fileUniqueId: string;
          /** The audio duration in seconds. */
          duration: number;
          /** The performer of the audio. */
          performer?: string;
          /** The audio track title. */
          title?: string;
          /** The original audio filename. */
          fileName?: string;
          /** The MIME type of the audio. */
          mimeType?: string;
          /** The audio file size in bytes. */
          fileSize?: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A Telegram voice message file. */
        voice?: {
          /** The file identifier used to download or reuse the voice message. */
          fileId: string;
          /** The stable unique identifier of the voice message. */
          fileUniqueId: string;
          /** The voice message duration in seconds. */
          duration: number;
          /** The MIME type of the voice message. */
          mimeType?: string;
          /** The voice message file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram animation file. */
        animation?: {
          /** The file identifier used to download or reuse the animation. */
          fileId: string;
          /** The stable unique identifier of the animation. */
          fileUniqueId: string;
          /** The animation width in pixels. */
          width: number;
          /** The animation height in pixels. */
          height: number;
          /** The animation duration in seconds. */
          duration: number;
          /** A Telegram photo or thumbnail size. */
          thumbnail?: {
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
            [key: string]: unknown;
          };
          /** The original animation filename. */
          fileName?: string;
          /** The MIME type of the animation. */
          mimeType?: string;
          /** The animation file size in bytes. */
          fileSize?: number;
          [key: string]: unknown;
        };
        /** A Telegram contact. */
        contact?: {
          /** The contact phone number. */
          phoneNumber: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name. */
          lastName?: string;
          /** The Telegram user identifier associated with the contact. */
          userId?: number;
          /** Additional contact data in vCard format. */
          vcard?: string;
          [key: string]: unknown;
        };
        /** A Telegram venue. */
        venue?: {
          /** A Telegram geographic location. */
          location: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction of travel in degrees. */
            heading?: number;
            /** The proximity alert radius in meters. */
            proximityAlertRadius?: number;
            [key: string]: unknown;
          };
          /** The venue name. */
          title: string;
          /** The venue address. */
          address: string;
          /** The Foursquare place identifier. */
          foursquareId?: string;
          /** The Foursquare place type. */
          foursquareType?: string;
          /** The Google Places identifier. */
          googlePlaceId?: string;
          /** The Google Places type. */
          googlePlaceType?: string;
          [key: string]: unknown;
        };
        /** A Telegram animated dice result. */
        dice?: {
          /** The emoji used for the animation. */
          emoji: string;
          /** The generated dice value. */
          value: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Set default permissions for all members of a group or supergroup. */
    "telegram.set_chat_permissions": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The permissions granted to chat members. */
        permissions: {
          /** Whether users may send text messages, contacts, giveaways, and locations. */
          canSendMessages?: boolean;
          /** Whether users may send audio files. */
          canSendAudios?: boolean;
          /** Whether users may send documents. */
          canSendDocuments?: boolean;
          /** Whether users may send photos. */
          canSendPhotos?: boolean;
          /** Whether users may send videos. */
          canSendVideos?: boolean;
          /** Whether users may send video notes. */
          canSendVideoNotes?: boolean;
          /** Whether users may send voice notes. */
          canSendVoiceNotes?: boolean;
          /** Whether users may send polls. */
          canSendPolls?: boolean;
          /** Whether users may send animations, games, stickers, and other media. */
          canSendOtherMessages?: boolean;
          /** Whether users may add web page previews. */
          canAddWebPagePreviews?: boolean;
          /** Whether users may change chat information. */
          canChangeInfo?: boolean;
          /** Whether users may invite new users. */
          canInviteUsers?: boolean;
          /** Whether users may pin messages. */
          canPinMessages?: boolean;
          /** Whether users may create and manage forum topics. */
          canManageTopics?: boolean;
        };
        /** Whether each media permission is applied independently. */
        useIndependentChatPermissions?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Replace the bot's chosen reaction on a Telegram message. */
    "telegram.set_message_reaction": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * A Telegram message identifier.
         * @exclusiveMinimum 0
         */
        messageId: number;
        /**
         * The reaction types to set; an empty array removes the reaction.
         * @maxItems 1
         */
        reaction?: Array<Record<string, unknown>>;
        /** Whether to display a large reaction animation. */
        isBig?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
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
    /** Unban a user so they can join the chat again. */
    "telegram.unban_chat_member": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target user identifier. */
        userId: number;
        /** Whether to do nothing when the user is not currently banned. */
        onlyIfBanned?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Remove all pinned messages from a Telegram chat. */
    "telegram.unpin_all_chat_messages": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
    /** Unpin one message, or the most recently pinned message, from a Telegram chat. */
    "telegram.unpin_chat_message": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * A Telegram message identifier.
         * @exclusiveMinimum 0
         */
        messageId?: number;
        /**
         * The unique identifier of the Telegram business connection.
         * @minLength 1
         */
        businessConnectionId?: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
      };
    };
  }
}
