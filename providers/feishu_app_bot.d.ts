import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one emoji reaction to a Feishu/Lark message. */
    "feishu_app_bot.add_message_reaction": {
      input: {
        /**
         * The Feishu message ID to react to.
         * @minLength 1
         */
        messageId: string;
        /**
         * The Feishu emoji type to add.
         * @minLength 1
         */
        emojiType: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The returned reaction payload. */
        data: {
          /** The reaction ID. */
          reaction_id: string;
          /** The reaction operator. */
          operator: {
            /** The reaction operator ID. */
            operator_id: string;
            /** The reaction operator type. */
            operator_type: string;
            [key: string]: unknown;
          };
          /** The reaction action time in milliseconds. */
          action_time: string;
          /** The reaction type. */
          reaction_type: {
            /** The Feishu emoji type. */
            emoji_type: string;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Download one Feishu/Lark file by file key and upload it to transit storage. */
    "feishu_app_bot.download_file": {
      input: {
        /**
         * The Feishu file key to download.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The optional file name to use for the downloaded transit file.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The Feishu file key that was downloaded. */
        fileKey: string;
        /** The downloaded file uploaded to transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        };
        /** The MIME type of the downloaded file. */
        contentType: string;
      };
    };
    /** Download one Feishu/Lark image by image key and upload it to transit storage. */
    "feishu_app_bot.download_image": {
      input: {
        /**
         * The Feishu image key to download.
         * @minLength 1
         */
        imageKey: string;
        /**
         * The optional file name to use for the downloaded transit file.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The Feishu image key that was downloaded. */
        imageKey: string;
        /** The downloaded image uploaded to transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        };
        /** The MIME type of the downloaded image. */
        contentType: string;
      };
    };
    /** Edit a Feishu/Lark text or post message sent by the app bot. */
    "feishu_app_bot.edit_message": {
      input: {
        /**
         * The Feishu message ID to edit.
         * @minLength 1
         */
        messageId: string;
        /** The Feishu message type supported by the edit endpoint. */
        msgType: "text" | "post";
        /** The message content payload. */
        content: string | Record<string, unknown>;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The message payload returned by Feishu. */
        data: {
          /** The Feishu message identifier. */
          message_id: string;
          /** The root message identifier. */
          root_id?: string;
          /** The parent message identifier. */
          parent_id?: string;
          /** The thread identifier. */
          thread_id?: string;
          /** The Feishu message type. */
          msg_type: string;
          /** The message creation timestamp in milliseconds. */
          create_time: string;
          /** The message update timestamp in milliseconds. */
          update_time: string;
          /** Whether the message has been recalled or deleted. */
          deleted: boolean;
          /** Whether the message has been updated. */
          updated: boolean;
          /** The Feishu chat identifier. */
          chat_id: string;
          /** The sender metadata. */
          sender: {
            /** The sender identifier. */
            id: string;
            /** The type of the sender identifier. */
            id_type: string;
            /** The sender type such as `user` or `app`. */
            sender_type: string;
            /** The tenant key of the sender. */
            tenant_key: string;
            [key: string]: unknown;
          };
          /** The message body. */
          body: {
            /** The serialized Feishu message content JSON string. */
            content?: string;
            [key: string]: unknown;
          };
          /** The mentions contained in the message. */
          mentions?: Array<{
            /** The stable mention placeholder key. */
            key: string;
            /** The mentioned user or bot identifier. */
            id: string;
            /** The identifier type of the mentioned user or bot. */
            id_type: string;
            /** The display name of the mentioned user or bot. */
            name: string;
            /** The tenant key of the mentioned user or bot. */
            tenant_key: string;
            [key: string]: unknown;
          }>;
          /** The parent message identifier for merge-forward payloads. */
          upper_message_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Feishu/Lark chat by `chat_id`. */
    "feishu_app_bot.get_chat": {
      input: {
        /**
         * The Feishu chat ID to fetch.
         * @minLength 1
         */
        chatId: string;
        /** The user identifier type returned by the read APIs. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The returned chat detail. */
        data: {
          /** The chat avatar URL. */
          avatar?: string;
          /** The chat name. */
          name?: string;
          /** The chat description. */
          description?: string;
          /** The localized chat names. */
          i18n_names?: {
            /** The Chinese localized value. */
            zh_cn?: string;
            /** The English localized value. */
            en_us?: string;
            /** The Japanese localized value. */
            ja_jp?: string;
            [key: string]: unknown;
          };
          /** Who can add chat members. */
          add_member_permission?: string;
          /** Whether the chat can be shared. */
          share_card_permission?: string;
          /** Who can mention all members. */
          at_all_permission?: string;
          /** Who can edit the chat. */
          edit_permission?: string;
          /** The owner ID type. */
          owner_id_type?: string;
          /** The owner ID. */
          owner_id?: string;
          /** The user manager IDs. */
          user_manager_id_list?: Array<string>;
          /** The bot manager app IDs. */
          bot_manager_id_list?: Array<string>;
          /** The group message mode. */
          group_message_type?: string;
          /** The chat mode. */
          chat_mode?: string;
          /** The chat visibility type. */
          chat_type?: string;
          /** The primary chat tag. */
          chat_tag?: string;
          /** Who can see join messages. */
          join_message_visibility?: string;
          /** Who can see leave messages. */
          leave_message_visibility?: string;
          /** Whether join approval is required. */
          membership_approval?: string;
          /** Who can speak in the chat. */
          moderation_permission?: string;
          /** Whether the chat is external. */
          external?: boolean;
          /** The tenant key of the chat. */
          tenant_key?: string;
          /** The user member count. */
          user_count?: string;
          /** The bot member count. */
          bot_count?: string;
          /** The restricted-mode settings. */
          restricted_mode_setting?: {
            /** Whether restricted mode is enabled. */
            status?: boolean;
            /** Who can capture screenshots or recordings. */
            screenshot_has_permission_setting?: string;
            /** Who can download images, videos, and files. */
            download_has_permission_setting?: string;
            /** Who can copy or forward messages. */
            message_has_permission_setting?: string;
            [key: string]: unknown;
          };
          /** Who can mark urgent. */
          urgent_setting?: string;
          /** Who can start video meetings. */
          video_conference_setting?: string;
          /** Who can view the member count. */
          hide_member_count_setting?: string;
          /** The chat status. */
          chat_status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Feishu/Lark message by `message_id`. */
    "feishu_app_bot.get_message": {
      input: {
        /**
         * The Feishu message ID to fetch.
         * @minLength 1
         */
        messageId: string;
        /** The user identifier type returned by the read APIs. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** Return the original card JSON when the target message is a card. */
        cardMsgContentType?: "user_card_content";
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu get-message payload. */
        data: {
          /** The messages returned for the queried message ID. */
          items: Array<{
            /** The Feishu message identifier. */
            message_id: string;
            /** The root message identifier. */
            root_id?: string;
            /** The parent message identifier. */
            parent_id?: string;
            /** The thread identifier. */
            thread_id?: string;
            /** The Feishu message type. */
            msg_type: string;
            /** The message creation timestamp in milliseconds. */
            create_time: string;
            /** The message update timestamp in milliseconds. */
            update_time: string;
            /** Whether the message has been recalled or deleted. */
            deleted: boolean;
            /** Whether the message has been updated. */
            updated: boolean;
            /** The Feishu chat identifier. */
            chat_id: string;
            /** The sender metadata. */
            sender: {
              /** The sender identifier. */
              id: string;
              /** The type of the sender identifier. */
              id_type: string;
              /** The sender type such as `user` or `app`. */
              sender_type: string;
              /** The tenant key of the sender. */
              tenant_key: string;
              [key: string]: unknown;
            };
            /** The message body. */
            body: {
              /** The serialized Feishu message content JSON string. */
              content?: string;
              [key: string]: unknown;
            };
            /** The mentions contained in the message. */
            mentions?: Array<{
              /** The stable mention placeholder key. */
              key: string;
              /** The mentioned user or bot identifier. */
              id: string;
              /** The identifier type of the mentioned user or bot. */
              id_type: string;
              /** The display name of the mentioned user or bot. */
              name: string;
              /** The tenant key of the mentioned user or bot. */
              tenant_key: string;
              [key: string]: unknown;
            }>;
            /** The parent message identifier for merge-forward payloads. */
            upper_message_id?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List visible members in one Feishu/Lark chat. */
    "feishu_app_bot.list_chat_members": {
      input: {
        /**
         * The Feishu chat ID to inspect.
         * @minLength 1
         */
        chatId: string;
        /** The member identifier type returned by Feishu. */
        memberIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The Feishu page size.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Feishu pagination token.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu chat-member-list payload. */
        data: {
          /** The returned chat members. */
          items: Array<{
            /** The member ID type. */
            member_id_type: string;
            /** The member ID. */
            member_id: string;
            /** The member display name. */
            name: string;
            /** The member tenant key. */
            tenant_key: string;
            [key: string]: unknown;
          }>;
          /** The pagination token for the next page. */
          page_token?: string;
          /** Whether another page is available. */
          has_more: boolean;
          /** The total member count. */
          member_total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List chats that the Feishu/Lark app bot currently belongs to. */
    "feishu_app_bot.list_chats": {
      input: {
        /** The user identifier type returned by the read APIs. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** The sort order used for listing chats. */
        sortType?: "ByCreateTimeAsc" | "ByActiveTimeDesc";
        /**
         * The Feishu page size.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Feishu pagination token.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu chat-list payload. */
        data: {
          /** The returned chat summaries. */
          items: Array<{
            /** The Feishu chat ID. */
            chat_id: string;
            /** The chat avatar URL. */
            avatar?: string;
            /** The chat name. */
            name?: string;
            /** The chat description. */
            description?: string;
            /** The owner user ID. */
            owner_id?: string;
            /** The owner ID type. */
            owner_id_type?: string;
            /** Whether the chat is external. */
            external?: boolean;
            /** The tenant key of the chat. */
            tenant_key?: string;
            /** The chat status. */
            chat_status?: string;
            [key: string]: unknown;
          }>;
          /** The pagination token for the next page. */
          page_token?: string;
          /** Whether another page is available. */
          has_more: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List emoji reactions on one Feishu/Lark message. */
    "feishu_app_bot.list_message_reactions": {
      input: {
        /**
         * The Feishu message ID to inspect.
         * @minLength 1
         */
        messageId: string;
        /**
         * Filter by one Feishu emoji type.
         * @minLength 1
         */
        reactionType?: string;
        /**
         * The Feishu page size.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * The Feishu pagination token.
         * @minLength 1
         */
        pageToken?: string;
        /** The user identifier type returned by the read APIs. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu reaction-list payload. */
        data: {
          /** The returned reactions. */
          items: Array<{
            /** The reaction ID. */
            reaction_id: string;
            /** The reaction operator. */
            operator: {
              /** The reaction operator ID. */
              operator_id: string;
              /** The reaction operator type. */
              operator_type: string;
              [key: string]: unknown;
            };
            /** The reaction action time in milliseconds. */
            action_time: string;
            /** The reaction type. */
            reaction_type: {
              /** The Feishu emoji type. */
              emoji_type: string;
            };
            [key: string]: unknown;
          }>;
          /** Whether another page is available. */
          has_more: boolean;
          /** The pagination token for the next page. */
          page_token?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Feishu/Lark history messages from a chat or thread. */
    "feishu_app_bot.list_messages": {
      input: {
        /** The container type to read history from. */
        containerIdType: "chat" | "thread";
        /**
         * The Feishu chat or thread identifier.
         * @minLength 1
         */
        containerId: string;
        /**
         * The optional start time in seconds.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The optional end time in seconds.
         * @minLength 1
         */
        endTime?: string;
        /** The sort order used for listing history messages. */
        sortType?: "ByCreateTimeAsc" | "ByCreateTimeDesc";
        /**
         * The Feishu page size.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * The Feishu pagination token.
         * @minLength 1
         */
        pageToken?: string;
        /** Return the original card JSON when the target message is a card. */
        cardMsgContentType?: "user_card_content";
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The paginated Feishu message list payload. */
        data: {
          /** Whether another history page is available. */
          has_more: boolean;
          /** The pagination token for the next page. */
          page_token?: string;
          /** The history messages returned by Feishu. */
          items: Array<{
            /** The Feishu message identifier. */
            message_id: string;
            /** The root message identifier. */
            root_id?: string;
            /** The parent message identifier. */
            parent_id?: string;
            /** The thread identifier. */
            thread_id?: string;
            /** The Feishu message type. */
            msg_type: string;
            /** The message creation timestamp in milliseconds. */
            create_time: string;
            /** The message update timestamp in milliseconds. */
            update_time: string;
            /** Whether the message has been recalled or deleted. */
            deleted: boolean;
            /** Whether the message has been updated. */
            updated: boolean;
            /** The Feishu chat identifier. */
            chat_id: string;
            /** The sender metadata. */
            sender: {
              /** The sender identifier. */
              id: string;
              /** The type of the sender identifier. */
              id_type: string;
              /** The sender type such as `user` or `app`. */
              sender_type: string;
              /** The tenant key of the sender. */
              tenant_key: string;
              [key: string]: unknown;
            };
            /** The message body. */
            body: {
              /** The serialized Feishu message content JSON string. */
              content?: string;
              [key: string]: unknown;
            };
            /** The mentions contained in the message. */
            mentions?: Array<{
              /** The stable mention placeholder key. */
              key: string;
              /** The mentioned user or bot identifier. */
              id: string;
              /** The identifier type of the mentioned user or bot. */
              id_type: string;
              /** The display name of the mentioned user or bot. */
              name: string;
              /** The tenant key of the mentioned user or bot. */
              tenant_key: string;
              [key: string]: unknown;
            }>;
            /** The parent message identifier for merge-forward payloads. */
            upper_message_id?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List pin records in one Feishu/Lark chat and time window. */
    "feishu_app_bot.list_pins": {
      input: {
        /**
         * The Feishu chat ID to inspect.
         * @minLength 1
         */
        chatId: string;
        /**
         * The optional start time in milliseconds.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The optional end time in milliseconds.
         * @minLength 1
         */
        endTime?: string;
        /**
         * The Feishu page size.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * The Feishu pagination token.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu pin-list payload. */
        data: {
          /** The returned pin records. */
          items: Array<{
            /** The pinned message ID. */
            message_id: string;
            /** The pinned chat ID. */
            chat_id: string;
            /** The pin operator ID. */
            operator_id: string;
            /** The pin operator ID type. */
            operator_id_type: string;
            /** The pin creation time in milliseconds. */
            create_time: string;
            [key: string]: unknown;
          }>;
          /** Whether another page is available. */
          has_more: boolean;
          /** The pagination token for the next page. */
          page_token?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Pin one Feishu/Lark message inside its chat. */
    "feishu_app_bot.pin_message": {
      input: {
        /**
         * The Feishu message ID to pin.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu pin payload. */
        data: {
          /** The returned pin record. */
          pin: {
            /** The pinned message ID. */
            message_id: string;
            /** The pinned chat ID. */
            chat_id: string;
            /** The pin operator ID. */
            operator_id: string;
            /** The pin operator ID type. */
            operator_id_type: string;
            /** The pin creation time in milliseconds. */
            create_time: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Recall one Feishu/Lark message that the app bot sent. */
    "feishu_app_bot.recall_message": {
      input: {
        /**
         * The Feishu message ID to recall.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu empty response payload. */
        data: Record<string, unknown>;
      };
    };
    /** Remove one Feishu/Lark message reaction by `reaction_id`. */
    "feishu_app_bot.remove_message_reaction": {
      input: {
        /**
         * The Feishu message ID to update.
         * @minLength 1
         */
        messageId: string;
        /**
         * The Feishu reaction ID to remove.
         * @minLength 1
         */
        reactionId: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu empty response payload. */
        data: Record<string, unknown>;
      };
    };
    /** Remove the pin state from one Feishu/Lark message. */
    "feishu_app_bot.remove_pin": {
      input: {
        /**
         * The Feishu message ID to unpin.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu empty response payload. */
        data: Record<string, unknown>;
      };
    };
    /** Reply to an existing Feishu/Lark message as the app bot. */
    "feishu_app_bot.reply_message": {
      input: {
        /**
         * The Feishu message ID to reply to.
         * @minLength 1
         */
        messageId: string;
        /** The Feishu message type to send in the reply. */
        msgType: "text" | "post" | "image" | "file" | "audio" | "media" | "sticker" | "interactive" | "share_chat" | "share_user";
        /** The message content payload. */
        content: string | Record<string, unknown>;
        /** Whether Feishu should create the reply inside the thread. */
        replyInThread?: boolean;
        /**
         * The optional Feishu deduplication UUID for this reply.
         * @maxLength 50
         */
        uuid?: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The message payload returned by Feishu. */
        data: {
          /** The Feishu message identifier. */
          message_id: string;
          /** The root message identifier. */
          root_id?: string;
          /** The parent message identifier. */
          parent_id?: string;
          /** The thread identifier. */
          thread_id?: string;
          /** The Feishu message type. */
          msg_type: string;
          /** The message creation timestamp in milliseconds. */
          create_time: string;
          /** The message update timestamp in milliseconds. */
          update_time: string;
          /** Whether the message has been recalled or deleted. */
          deleted: boolean;
          /** Whether the message has been updated. */
          updated: boolean;
          /** The Feishu chat identifier. */
          chat_id: string;
          /** The sender metadata. */
          sender: {
            /** The sender identifier. */
            id: string;
            /** The type of the sender identifier. */
            id_type: string;
            /** The sender type such as `user` or `app`. */
            sender_type: string;
            /** The tenant key of the sender. */
            tenant_key: string;
            [key: string]: unknown;
          };
          /** The message body. */
          body: {
            /** The serialized Feishu message content JSON string. */
            content?: string;
            [key: string]: unknown;
          };
          /** The mentions contained in the message. */
          mentions?: Array<{
            /** The stable mention placeholder key. */
            key: string;
            /** The mentioned user or bot identifier. */
            id: string;
            /** The identifier type of the mentioned user or bot. */
            id_type: string;
            /** The display name of the mentioned user or bot. */
            name: string;
            /** The tenant key of the mentioned user or bot. */
            tenant_key: string;
            [key: string]: unknown;
          }>;
          /** The parent message identifier for merge-forward payloads. */
          upper_message_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Search chats visible to the Feishu/Lark app bot by keyword. */
    "feishu_app_bot.search_chats": {
      input: {
        /**
         * The chat search keyword.
         * @minLength 1
         * @maxLength 64
         */
        query: string;
        /** The user identifier type returned by the read APIs. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The Feishu page size.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Feishu pagination token.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu chat-list payload. */
        data: {
          /** The returned chat summaries. */
          items: Array<{
            /** The Feishu chat ID. */
            chat_id: string;
            /** The chat avatar URL. */
            avatar?: string;
            /** The chat name. */
            name?: string;
            /** The chat description. */
            description?: string;
            /** The owner user ID. */
            owner_id?: string;
            /** The owner ID type. */
            owner_id_type?: string;
            /** Whether the chat is external. */
            external?: boolean;
            /** The tenant key of the chat. */
            tenant_key?: string;
            /** The chat status. */
            chat_status?: string;
            [key: string]: unknown;
          }>;
          /** The pagination token for the next page. */
          page_token?: string;
          /** Whether another page is available. */
          has_more: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Send a Feishu/Lark app bot message to a user or chat. */
    "feishu_app_bot.send_message": {
      input: {
        /** The identifier type used by `receiveId`. */
        receiveIdType: "open_id" | "union_id" | "user_id" | "email" | "chat_id";
        /**
         * The target user or chat identifier.
         * @minLength 1
         */
        receiveId: string;
        /** The Feishu message type to send. */
        msgType: "text" | "post" | "image" | "file" | "audio" | "media" | "sticker" | "interactive" | "share_chat" | "share_user" | "system";
        /** The message content payload. */
        content: string | Record<string, unknown>;
        /**
         * The optional Feishu deduplication UUID for this message.
         * @maxLength 50
         */
        uuid?: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The message payload returned by Feishu. */
        data: {
          /** The Feishu message identifier. */
          message_id: string;
          /** The root message identifier. */
          root_id?: string;
          /** The parent message identifier. */
          parent_id?: string;
          /** The thread identifier. */
          thread_id?: string;
          /** The Feishu message type. */
          msg_type: string;
          /** The message creation timestamp in milliseconds. */
          create_time: string;
          /** The message update timestamp in milliseconds. */
          update_time: string;
          /** Whether the message has been recalled or deleted. */
          deleted: boolean;
          /** Whether the message has been updated. */
          updated: boolean;
          /** The Feishu chat identifier. */
          chat_id: string;
          /** The sender metadata. */
          sender: {
            /** The sender identifier. */
            id: string;
            /** The type of the sender identifier. */
            id_type: string;
            /** The sender type such as `user` or `app`. */
            sender_type: string;
            /** The tenant key of the sender. */
            tenant_key: string;
            [key: string]: unknown;
          };
          /** The message body. */
          body: {
            /** The serialized Feishu message content JSON string. */
            content?: string;
            [key: string]: unknown;
          };
          /** The mentions contained in the message. */
          mentions?: Array<{
            /** The stable mention placeholder key. */
            key: string;
            /** The mentioned user or bot identifier. */
            id: string;
            /** The identifier type of the mentioned user or bot. */
            id_type: string;
            /** The display name of the mentioned user or bot. */
            name: string;
            /** The tenant key of the mentioned user or bot. */
            tenant_key: string;
            [key: string]: unknown;
          }>;
          /** The parent message identifier for merge-forward payloads. */
          upper_message_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload one public file URL to Feishu/Lark and return the file key for message sending. */
    "feishu_app_bot.upload_file": {
      input: {
        /**
         * The public file URL to download and upload to Feishu.
         * @format uri
         */
        fileUrl: string;
        /** The Feishu file type used by the file upload API. */
        fileType: "opus" | "mp4" | "pdf" | "doc" | "xls" | "ppt" | "stream";
        /**
         * The optional file name to send to Feishu. Inferred from the URL when omitted.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The optional duration in milliseconds for audio or video uploads.
         * @minimum 0
         */
        duration?: number;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu file-upload payload. */
        data: {
          /** The Feishu file key returned by the upload API. */
          file_key: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload one public image URL to Feishu/Lark and return the image key for message sending. */
    "feishu_app_bot.upload_image": {
      input: {
        /**
         * The public image URL to download and upload to Feishu.
         * @format uri
         */
        imageUrl: string;
      };
      output: {
        /** The Feishu API code. `0` means success. */
        code: number;
        /** The Feishu API message. */
        msg: string;
        /** The Feishu image-upload payload. */
        data: {
          /** The Feishu image key returned by the upload API. */
          image_key: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
