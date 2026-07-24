import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add attendees to a WeCom schedule. */
    "wecom_bot.add_schedule_attendees": {
      input: {
        /**
         * The schedule ID.
         * @minLength 1
         */
        scheduleId: string;
        /**
         * The WeCom user IDs to add.
         * @minItems 1
         */
        userIds: Array<string>;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Call a dynamically discovered WeCom MCP tool that does not have a curated action yet. */
    "wecom_bot.call_tool": {
      input: {
        /** The official WeCom MCP business category. */
        category: "contact" | "doc" | "meeting" | "msg" | "schedule" | "todo";
        /**
         * The exact tool name returned by `list_tools`.
         * @minLength 1
         */
        toolName: string;
        /** The arguments validated against the tool's current input schema. */
        arguments: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Cancel a scheduled WeCom meeting. */
    "wecom_bot.cancel_meeting": {
      input: {
        /**
         * The meeting ID.
         * @minLength 1
         */
        meetingId: string;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a WeCom schedule. */
    "wecom_bot.cancel_schedule": {
      input: {
        /**
         * The schedule ID.
         * @minLength 1
         */
        scheduleId: string;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Change one follower's status on a WeCom todo. */
    "wecom_bot.change_todo_user_status": {
      input: {
        /**
         * The todo ID.
         * @minLength 1
         */
        todoId: string;
        /**
         * A WeCom user ID returned by a contact lookup.
         * @minLength 1
         */
        userId: string;
        /**
         * The follower status: `0` rejected, `1` accepted, or `2` completed.
         * @minimum 0
         * @maximum 2
         */
        userStatus: number;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Read busy time slots for up to 10 WeCom members. */
    "wecom_bot.check_availability": {
      input: {
        /**
         * The WeCom user IDs to check.
         * @minItems 1
         * @maxItems 10
         */
        userIds: Array<string>;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        startTime: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime: string;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The busy slots grouped by member. */
        user_busy_list?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create an empty WeCom document, online sheet, or smart sheet. */
    "wecom_bot.create_doc": {
      input: {
        /** The document type to create. */
        documentType: "document" | "sheet" | "smart_sheet";
        /**
         * The document name, up to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The created document ID. */
        docid?: string;
        /** The created document URL. */
        url?: string;
        [key: string]: unknown;
      };
    };
    /** Create a scheduled WeCom meeting. */
    "wecom_bot.create_meeting": {
      input: {
        /**
         * The meeting title.
         * @minLength 1
         */
        title: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm` format.
         * @minLength 1
         */
        startTime: string;
        /**
         * The meeting duration in seconds.
         * @minimum 1
         */
        durationSeconds: number;
        /** The optional meeting description. */
        description?: string;
        /** The optional meeting location. */
        location?: string;
        /**
         * The WeCom members to invite.
         * @minItems 1
         */
        inviteeUserIds?: Array<string>;
        /** Official WeCom meeting settings. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The meeting ID. */
        meetingid?: string;
        /** The meeting code. */
        meeting_code?: string;
        /** The meeting join link. */
        meeting_link?: string;
        /** Invitees without valid meeting accounts. */
        excess_users?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Create a WeCom schedule with attendees and reminders. */
    "wecom_bot.create_schedule": {
      input: {
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        startTime: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime: string;
        /**
         * The schedule title, up to 128 characters.
         * @maxLength 128
         */
        summary?: string;
        /**
         * The schedule description, up to 1000 characters.
         * @maxLength 1000
         */
        description?: string;
        /**
         * The schedule location, up to 128 characters.
         * @maxLength 128
         */
        location?: string;
        /**
         * Whether this is an all-day schedule: `0` or `1`.
         * @minimum 0
         * @maximum 1
         */
        isWholeDay?: number;
        /**
         * The WeCom user IDs to invite.
         * @minItems 1
         */
        attendeeUserIds?: Array<string>;
        /** Schedule reminder settings. */
        reminders?: {
          /**
           * Whether reminders are enabled: `0` or `1`.
           * @minimum 0
           * @maximum 1
           */
          isRemind?: number;
          /** Seconds before the event for the reminder. */
          remindBeforeEventSeconds?: number;
          /** Additional reminder offsets in seconds. */
          remindTimeDiffs?: Array<number>;
          /**
           * The timezone offset from UTC, from `-12` to `12`.
           * @minimum -12
           * @maximum 12
           */
          timezone?: number;
        };
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The created schedule ID. */
        schedule_id?: string;
        [key: string]: unknown;
      };
    };
    /** Create a WeCom todo with followers, deadline, and reminders. */
    "wecom_bot.create_todo": {
      input: {
        /**
         * The todo content.
         * @minLength 1
         */
        content: string;
        /**
         * The todo followers.
         * @minItems 1
         */
        followers: Array<{
          /**
           * A WeCom user ID returned by a contact lookup.
           * @minLength 1
           */
          userId: string;
          /**
           * The follower status: `0` rejected, `1` accepted, or `2` completed.
           * @minimum 0
           * @maximum 2
           */
          status?: number;
        }>;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime?: string;
        /** The reminder types relative to the deadline. */
        reminderTypes?: Array<number>;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The created todo ID. */
        todo_id?: string;
        [key: string]: unknown;
      };
    };
    /** Remove attendees from a WeCom schedule. */
    "wecom_bot.del_schedule_attendees": {
      input: {
        /**
         * The schedule ID.
         * @minLength 1
         */
        scheduleId: string;
        /**
         * The WeCom user IDs to remove.
         * @minItems 1
         */
        userIds: Array<string>;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a WeCom todo. */
    "wecom_bot.delete_todo": {
      input: {
        /**
         * The todo ID.
         * @minLength 1
         */
        todoId: string;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Download WeCom message media and return a Connector transit URL instead of base64 or a server-local path. */
    "wecom_bot.download_message_media": {
      input: {
        /**
         * The media ID returned by `get_message`.
         * @minLength 1
         * @maxLength 256
         */
        mediaId: string;
      };
      output: {
        /** The WeCom response code. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
        /** The file-transit result. */
        file: {
          /** The original WeCom media ID. */
          media_id: string;
          /** The media file name. */
          name: string;
          /** The WeCom media type. */
          type: string;
          /** The media MIME type. */
          content_type: string;
          /** The decoded media size in bytes. */
          size: number;
          /**
           * The Connector transit URL for the downloaded media.
           * @format uri
           */
          transit_url: string;
        };
      };
    };
    /** Replace all content in a WeCom document with Markdown. */
    "wecom_bot.edit_doc_content": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Read complete WeCom document content as Markdown with polling handled internally. */
    "wecom_bot.get_doc_content": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom response code. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
        /** The complete Markdown content. */
        content: string;
        /** The number of upstream requests used to finish the export. */
        poll_count: number;
      };
    };
    /** Get complete details for a WeCom meeting. */
    "wecom_bot.get_meeting_info": {
      input: {
        /**
         * The meeting ID.
         * @minLength 1
         */
        meetingId: string;
        /** The optional meeting code. */
        meetingCode?: string;
        /** The optional recurring sub-meeting ID. */
        subMeetingId?: string;
      };
      output: Record<string, unknown>;
    };
    /** Read recent messages from one WeCom direct chat or group chat. */
    "wecom_bot.get_message": {
      input: {
        /**
         * The chat type: `1` for direct chat or `2` for group chat.
         * @minimum 1
         * @maximum 2
         */
        chatType: number;
        /**
         * The member user ID for a direct chat or chat ID for a group chat.
         * @minLength 1
         */
        chatId: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        beginTime: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime: string;
        /** The pagination cursor returned by the previous page. */
        cursor?: string;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The messages in this page. */
        messages?: Array<Record<string, unknown>>;
        /** The cursor for the next page. */
        next_cursor?: string;
        [key: string]: unknown;
      };
    };
    /** List chats that had messages during a time range. */
    "wecom_bot.get_msg_chat_list": {
      input: {
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        beginTime: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime: string;
        /** The pagination cursor returned by the previous page. */
        cursor?: string;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The chats in this page. */
        chats?: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        has_more?: boolean;
        /** The cursor for the next page. */
        next_cursor?: string;
        [key: string]: unknown;
      };
    };
    /** Get details for up to 50 WeCom schedules. */
    "wecom_bot.get_schedule_detail": {
      input: {
        /**
         * The schedule IDs to read.
         * @minItems 1
         * @maxItems 50
         */
        scheduleIds: Array<string>;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The schedule detail records. */
        schedule?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List WeCom schedule IDs within a time range. */
    "wecom_bot.get_schedule_list_by_range": {
      input: {
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        startTime: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime: string;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The schedule IDs. */
        schedule_id_list?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get details for up to 20 WeCom todos. */
    "wecom_bot.get_todo_detail": {
      input: {
        /**
         * The todo IDs to read.
         * @minItems 1
         * @maxItems 20
         */
        todoIds: Array<string>;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The todo detail records. */
        data_list?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List WeCom todos for one follower with optional time and status filters. */
    "wecom_bot.get_todo_list": {
      input: {
        /**
         * A WeCom user ID returned by a contact lookup.
         * @minLength 1
         */
        userId: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        createBeginTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        createEndTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        remindBeginTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        remindEndTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        deadlineBeginTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        deadlineEndTime?: string;
        /**
         * The todo status: `0` completed or `1` in progress.
         * @minimum 0
         * @maximum 1
         */
        todoStatus?: number;
        /**
         * The page size, up to 20.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** The pagination cursor. */
        cursor?: string;
      };
      output: Record<string, unknown>;
    };
    /** List WeCom members visible to the API-mode smart bot. */
    "wecom_bot.get_userlist": {
      input: Record<string, never>;
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The visible members. */
        userlist?: Array<{
          /** The member user ID. */
          userid?: string;
          /** The member name. */
          name?: string;
          /** The optional member alias. */
          alias?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the current WeCom MCP tools and input schemas available to this bot. */
    "wecom_bot.list_tools": {
      input: {
        /** The official WeCom MCP business category. */
        category?: "contact" | "doc" | "meeting" | "msg" | "schedule" | "todo";
      };
      output: {
        /** Tool groups by business category. */
        categories: Array<{
          /** The official WeCom MCP business category. */
          category: "contact" | "doc" | "meeting" | "msg" | "schedule" | "todo";
          /** The tools available in this category. */
          tools: Array<{
            /** The tool name. */
            name?: string;
            /** The tool description. */
            description?: string;
            /** The current input JSON Schema returned by WeCom. */
            inputSchema?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
        }>;
      };
    };
    /** List WeCom meetings in a time range. */
    "wecom_bot.list_user_meetings": {
      input: {
        /**
         * A date and time in `YYYY-MM-DD HH:mm` format.
         * @minLength 1
         */
        beginTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm` format.
         * @minLength 1
         */
        endTime?: string;
        /** The pagination cursor. */
        cursor?: string;
        /**
         * The page size, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The meeting IDs. */
        meetingid_list?: Array<string>;
        /** The cursor for the next page. */
        next_cursor?: string;
        [key: string]: unknown;
      };
    };
    /** Search WeCom users by name or alias for todo assignment. */
    "wecom_bot.search_todo_userid": {
      input: {
        /**
         * The member name or alias to search for.
         * @minLength 1
         */
        keyword: string;
      };
      output: Record<string, unknown>;
    };
    /** Send an image message through the WeCom bot webhook. */
    "wecom_bot.send_image_message": {
      input: {
        /**
         * The base64-encoded image bytes. The raw image must be a JPG or PNG no larger than 2 MB.
         * @minLength 1
         */
        base64: string;
        /** The MD5 digest of the raw image bytes before base64 encoding. */
        md5: string;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a markdown message through the WeCom bot webhook. */
    "wecom_bot.send_markdown_message": {
      input: {
        /**
         * The markdown content encoded as UTF-8.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a markdown_v2 message through the WeCom bot webhook. */
    "wecom_bot.send_markdown_v2_message": {
      input: {
        /**
         * The markdown_v2 content encoded as UTF-8. WeCom markdown_v2 does not support `@` mentions.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a text message to a WeCom direct chat or group chat. */
    "wecom_bot.send_message": {
      input: {
        /**
         * The chat type: `1` for direct chat or `2` for group chat.
         * @minimum 1
         * @maximum 2
         */
        chatType: number;
        /**
         * The member user ID for a direct chat or chat ID for a group chat.
         * @minLength 1
         */
        chatId: string;
        /**
         * The text content, up to 2048 UTF-8 bytes.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Send a news message through the WeCom bot webhook. */
    "wecom_bot.send_news_message": {
      input: {
        /**
         * The news articles to send. WeCom supports 1 to 8 articles per message.
         * @minItems 1
         * @maxItems 8
         */
        articles: Array<{
          /**
           * The article title. Titles longer than 128 bytes are truncated by WeCom.
           * @minLength 1
           */
          title: string;
          /** The optional article description. Descriptions longer than 512 bytes are truncated by WeCom. */
          description?: string;
          /**
           * The URL opened after the user clicks the article.
           * @minLength 1
           */
          url: string;
          /**
           * The optional JPG or PNG image URL shown for the article.
           * @minLength 1
           */
          picurl?: string;
        }>;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a text message through the WeCom bot webhook. */
    "wecom_bot.send_text_message": {
      input: {
        /**
         * The text content. The value can include WeCom `<@userid>` mention syntax.
         * @minLength 1
         */
        content: string;
        /**
         * Optional user IDs to mention explicitly.
         * @minItems 1
         */
        mentionedList?: Array<string>;
        /**
         * Optional mobile numbers to mention explicitly.
         * @minItems 1
         */
        mentionedMobileList?: Array<string>;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Replace the full invitee list for a WeCom meeting. */
    "wecom_bot.set_invite_meeting_members": {
      input: {
        /**
         * The meeting ID.
         * @minLength 1
         */
        meetingId: string;
        /**
         * The complete replacement invitee list.
         * @minItems 1
         */
        inviteeUserIds: Array<string>;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Add a sub-sheet to a WeCom online sheet. */
    "wecom_bot.sheet_add_sub": {
      input: {
        /**
         * The online-sheet document ID.
         * @minLength 1
         */
        docId: string;
        /**
         * The sub-sheet title.
         * @minLength 1
         */
        title: string;
        /**
         * The initial row count.
         * @minimum 1
         */
        rowCount?: number;
        /**
         * The initial column count.
         * @minimum 1
         */
        columnCount?: number;
        /**
         * The insertion position; `0` appends and `1` inserts first.
         * @minimum 0
         */
        index?: number;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Append one row to the end of a WeCom online sheet. */
    "wecom_bot.sheet_append_data": {
      input: {
        /**
         * The online-sheet document ID.
         * @minLength 1
         */
        docId: string;
        /**
         * The target sub-sheet ID.
         * @minLength 1
         */
        sheetId: string;
        /**
         * The cells to append in column order.
         * @minItems 1
         */
        values: Array<{
          /** The cell value, such as text, link, or formula. */
          cellValue?: Record<string, unknown>;
          /** The optional provider-defined cell format. */
          cellFormat?: Record<string, unknown>;
          /** The cell data type expected by WeCom. */
          dataType?: "TEXT" | "NUMBER" | "LINK" | "FORMUAL";
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a sub-sheet from a WeCom online sheet. */
    "wecom_bot.sheet_delete_sub": {
      input: {
        /**
         * The online-sheet document ID.
         * @minLength 1
         */
        docId: string;
        /**
         * The sub-sheet ID to delete.
         * @minLength 1
         */
        sheetId: string;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Get online-sheet metadata and sub-sheet IDs. */
    "wecom_bot.sheet_get_info": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Write cells and formats into a specified online-sheet range. */
    "wecom_bot.sheet_update_range_data": {
      input: {
        /**
         * The online-sheet document ID.
         * @minLength 1
         */
        docId: string;
        /**
         * The target sub-sheet ID.
         * @minLength 1
         */
        sheetId: string;
        /**
         * The zero-based starting row index.
         * @minimum 0
         */
        startRow: number;
        /**
         * The zero-based starting column index.
         * @minimum 0
         */
        startColumn: number;
        /**
         * The rows to write.
         * @minItems 1
         */
        rows: Array<{
          /**
           * The cells in this row.
           * @minItems 1
           */
          values: Array<{
            /** The cell value, such as text, link, or formula. */
            cellValue?: Record<string, unknown>;
            /** The optional provider-defined cell format. */
            cellFormat?: Record<string, unknown>;
            /** The cell data type expected by WeCom. */
            dataType?: "TEXT" | "NUMBER" | "LINK" | "FORMUAL";
            [key: string]: unknown;
          }>;
        }>;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Create a WeCom smart page from inline text or Markdown pages. */
    "wecom_bot.smartpage_create": {
      input: {
        /** The optional smart-page title. */
        title?: string;
        /**
         * The inline pages to create.
         * @minItems 1
         */
        pages: Array<{
          /** The optional child-page title. */
          pageTitle?: string;
          /** The page content type. */
          contentType?: "markdown" | "text";
          /**
           * The optional inline page content, up to 10 MB.
           * @minLength 0
           */
          content?: string;
        }>;
      };
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The created smart-page document ID. */
        docid?: string;
        /** The created smart-page URL. */
        url?: string;
        [key: string]: unknown;
      };
    };
    /** Export complete WeCom smart-page content as Markdown with polling handled internally. */
    "wecom_bot.smartpage_export": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom response code. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
        /** The exported Markdown content. */
        content: string;
        /** The number of result-poll requests used to finish the export. */
        poll_count: number;
      };
    };
    /** Add fields to a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_add_fields": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Add records to a WeCom smart sheet, uploading `fileUrl` attachments before the write. */
    "wecom_bot.smartsheet_add_records": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Add a sub-sheet to a WeCom smart sheet. */
    "wecom_bot.smartsheet_add_sheet": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete fields from a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_delete_fields": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete records from a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_delete_records": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_delete_sheet": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** List fields in a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_get_fields": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Read a page of records from a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_get_records": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom response code. */
        errcode?: number;
        /** The WeCom response message. */
        errmsg?: string;
        /** The total matching record count. */
        total?: number;
        /** Whether another page is available. */
        has_more?: boolean;
        /** The cursor for the next page. */
        next_cursor?: string;
        /** The smart-sheet records. */
        records?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List sub-sheets in a WeCom smart sheet. */
    "wecom_bot.smartsheet_get_sheet": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Rename fields in a WeCom smart-sheet sub-sheet without changing their types. */
    "wecom_bot.smartsheet_update_fields": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Update WeCom smart-sheet records, uploading `fileUrl` attachments before the write. */
    "wecom_bot.smartsheet_update_records": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Rename a WeCom smart-sheet sub-sheet. */
    "wecom_bot.smartsheet_update_sheet": {
      input: Record<string, unknown>;
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Update selected fields on a WeCom schedule. */
    "wecom_bot.update_schedule": {
      input: {
        /**
         * The schedule ID.
         * @minLength 1
         */
        scheduleId: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        startTime?: string;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime?: string;
        /**
         * The schedule title, up to 128 characters.
         * @maxLength 128
         */
        summary?: string;
        /**
         * The schedule description, up to 1000 characters.
         * @maxLength 1000
         */
        description?: string;
        /**
         * The schedule location, up to 128 characters.
         * @maxLength 128
         */
        location?: string;
        /**
         * Whether this is an all-day schedule: `0` or `1`.
         * @minimum 0
         * @maximum 1
         */
        isWholeDay?: number;
        /**
         * The WeCom user IDs to invite.
         * @minItems 1
         */
        attendeeUserIds?: Array<string>;
        /** Schedule reminder settings. */
        reminders?: {
          /**
           * Whether reminders are enabled: `0` or `1`.
           * @minimum 0
           * @maximum 1
           */
          isRemind?: number;
          /** Seconds before the event for the reminder. */
          remindBeforeEventSeconds?: number;
          /** Additional reminder offsets in seconds. */
          remindTimeDiffs?: Array<number>;
          /**
           * The timezone offset from UTC, from `-12` to `12`.
           * @minimum -12
           * @maximum 12
           */
          timezone?: number;
        };
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
    /** Update a WeCom todo's content, followers, status, deadline, or reminders. */
    "wecom_bot.update_todo": {
      input: {
        /**
         * The todo ID.
         * @minLength 1
         */
        todoId: string;
        /** The replacement todo content. */
        content?: string;
        /**
         * The full replacement follower list.
         * @minItems 1
         */
        followers?: Array<{
          /**
           * A WeCom user ID returned by a contact lookup.
           * @minLength 1
           */
          userId: string;
        }>;
        /**
         * The todo status: `0` completed or `1` in progress.
         * @minimum 0
         * @maximum 1
         */
        todoStatus?: number;
        /**
         * A date and time in `YYYY-MM-DD HH:mm:ss` format.
         * @minLength 1
         */
        endTime?: string;
        /** The replacement reminder types. */
        reminderTypes?: Array<number>;
      };
      output: {
        /** The WeCom business response code. `0` means success. */
        errcode?: number;
        /** The WeCom business response message. */
        errmsg?: string;
        [key: string]: unknown;
      };
    };
  }
}
