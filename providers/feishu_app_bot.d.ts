import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add users or bots to a Feishu chat. */
    "feishu_app_bot.add_chat_members": {
      input: {
        /**
         * The Feishu chat identifier.
         * @minLength 1
         */
        chatId: string;
        /** The member identifier type. */
        memberIdType: "open_id" | "union_id" | "user_id" | "app_id";
        /**
         * The user or bot identifiers to change.
         * @minItems 1
         */
        memberIds: Array<string>;
      };
      output: {
        /** The raw Feishu data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Grant a collaborator permission on a Feishu Drive resource. */
    "feishu_app_bot.add_drive_permission": {
      input: {
        /**
         * The Feishu Drive resource token.
         * @minLength 1
         */
        token: string;
        /** The resource type used by the Drive permission API. */
        resourceType: "doc" | "docx" | "sheet" | "bitable" | "file" | "folder" | "wiki" | "mindnote" | "slides";
        /**
         * The collaborator identifier.
         * @minLength 1
         */
        memberId: string;
        /** How Feishu should interpret the member ID. */
        memberType: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "groupid" | "appid" | "wikispaceid";
        /** The permission role granted to the member. */
        permission: "view" | "edit" | "full_access";
        /** The Wiki permission scope. */
        permType?: "container" | "single_page";
        /** The Wiki-space member role. */
        memberKind?: "wiki_space_member" | "wiki_space_viewer" | "wiki_space_editor";
        /** Whether Feishu should notify the collaborator. */
        needNotification?: boolean;
      };
      output: {
        /** The created permission member. */
        member: Record<string, unknown>;
      };
    };
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
    /** Add a text comment to a Feishu task. */
    "feishu_app_bot.add_task_comment": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /**
         * The comment text.
         * @minLength 1
         */
        content: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task comment object. */
        comment: Record<string, unknown>;
      };
    };
    /** Add a Feishu task to a tasklist. */
    "feishu_app_bot.add_task_to_tasklist": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /**
         * The Feishu tasklist GUID.
         * @minLength 1
         */
        tasklistGuid: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Add a member to a Feishu Wiki space. */
    "feishu_app_bot.add_wiki_member": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The member identifier.
         * @minLength 1
         */
        memberId: string;
        /** The Wiki member identifier type. */
        memberType: "email" | "openid" | "userid" | "unionid" | "openchat" | "opendepartmentid" | "useridlist" | "groupid" | "departmentid" | "appid";
        /** The Wiki space member role. */
        memberRole: "admin" | "member";
        /** Whether Feishu should notify the member. */
        notify?: boolean;
      };
      output: {
        /** A Feishu Wiki object. */
        item: Record<string, unknown>;
      };
    };
    /** Ask Feishu to automatically arrange dashboard blocks. */
    "feishu_app_bot.arrange_base_dashboard": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /** The user ID type used in the response or filters. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create up to 200 records in one Feishu Base request. */
    "feishu_app_bot.batch_create_base_records": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The record field maps to create.
         * @minItems 1
         * @maxItems 200
         */
        records: Array<Record<string, unknown>>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The records returned by Feishu. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Create objectives and their key results sequentially, with optional rollback on failure. */
    "feishu_app_bot.batch_create_okrs": {
      input: {
        /**
         * The OKR cycle ID.
         * @minLength 1
         */
        cycleId: string;
        /**
         * Objectives to create.
         * @minItems 1
         */
        objectives: Array<{
          /**
           * The objective text.
           * @minLength 1
           */
          text: string;
          /** User open_ids mentioned after the text. */
          mentions?: Array<string>;
          /** Optional objective notes. */
          notes?: string;
          /**
           * The objective category ID.
           * @minLength 1
           */
          categoryId?: string;
          /** Key results to create below the objective. */
          keyResults?: Array<{
            /**
             * The key-result text.
             * @minLength 1
             */
            text: string;
            /** User open_ids mentioned after the text. */
            mentions?: Array<string>;
          }>;
        }>;
        /** Whether to delete objectives created by this action if a later step fails. */
        rollbackOnFailure?: boolean;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** Created objective and key-result IDs. */
        objectives: Array<Record<string, unknown>>;
      };
    };
    /** Delete up to 200 records in one Feishu Base request. */
    "feishu_app_bot.batch_delete_base_records": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The record IDs to delete.
         * @minItems 1
         * @maxItems 200
         */
        recordIds: Array<string>;
      };
      output: {
        /** Whether the records were deleted. */
        deleted: true;
        /** The deleted record IDs. */
        recordIds: Array<string>;
      };
    };
    /** Fetch up to 50 Feishu messages by message ID in one request. */
    "feishu_app_bot.batch_get_messages": {
      input: {
        /**
         * The Feishu message IDs.
         * @minItems 1
         * @maxItems 50
         */
        messageIds: Array<string>;
      };
      output: {
        /** The messages returned on this page. */
        items: Array<Record<string, unknown>>;
        /** The token for fetching the next page. */
        pageToken: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** Update up to 200 records with record-specific fields in one Feishu Base request. */
    "feishu_app_bot.batch_update_base_records": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /** A map from record IDs to record-specific field maps. */
        records: Record<string, Record<string, unknown>>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The updated records returned by Feishu, when available. */
        records?: Array<Record<string, unknown>>;
        /** Fields ignored by Feishu during the batch update. */
        ignoredFields?: Array<string>;
      };
    };
    /** Execute multiple Sheet AI write tools in one batch request. */
    "feishu_app_bot.batch_update_sheet": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The operations to execute in order.
         * @minItems 1
         */
        operations: Array<{
          /**
           * The write tool name, such as `set_cell_range` or `clear_cell_range`.
           * @minLength 1
           */
          toolName: string;
          /** The tool-specific input, excluding excel_id. */
          input: Record<string, unknown>;
        }>;
        /** Whether successful operations remain committed after another operation fails. */
        continueOnError?: boolean;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Clear cell contents, formats, or both from an A1 range. */
    "feishu_app_bot.clear_cells": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix, for example `A1:D20`.
         * @minLength 1
         */
        range: string;
        /** What to clear from the range. */
        clearType?: "contents" | "formats" | "all";
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Mark a Feishu task as completed. */
    "feishu_app_bot.complete_task": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Copy a Feishu Base, optionally changing its name, destination folder, content inclusion, or time zone. */
    "feishu_app_bot.copy_base": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The copied Base name.
         * @minLength 1
         */
        name?: string;
        /**
         * The destination Drive folder token.
         * @minLength 1
         */
        folderToken?: string;
        /** Whether to copy only the Base structure without records. */
        withoutContent?: boolean;
        /**
         * The copied Base time zone, for example `Asia/Shanghai`.
         * @minLength 1
         */
        timeZone?: string;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        base: Record<string, unknown>;
        /** Whether the Base was copied. */
        copied: true;
      };
    };
    /** Copy a Feishu Drive file or online document into another folder. */
    "feishu_app_bot.copy_drive_file": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The Feishu Drive resource type. */
        type: "file" | "folder" | "doc" | "docx" | "sheet" | "bitable" | "mindnote" | "slides" | "shortcut";
        /**
         * The copied file name, limited to 256 UTF-8 bytes.
         * @minLength 1
         */
        name: string;
        /**
         * The destination folder token.
         * @minLength 1
         */
        folderToken: string;
        /** The user identifier format returned in the response. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The copied file metadata. */
        file: {
          /** The resource token. */
          token?: string;
          /** The resource name. */
          name?: string;
          /** The resource type. */
          type?: string;
          /** The resource URL. */
          url?: string;
          /** The parent folder token. */
          parent_token?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Copy a cell range. */
    "feishu_app_bot.copy_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        sourceRange: string;
        /**
         * The destination A1 range.
         * @minLength 1
         */
        targetRange: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        targetSheetId?: string;
        /** What to copy. */
        pasteType?: "all" | "values" | "formulas" | "formats";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Copy a Feishu Wiki node into another space or below another parent. */
    "feishu_app_bot.copy_wiki_node": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The Wiki node_token.
         * @minLength 1
         */
        nodeToken: string;
        /**
         * The destination Wiki space ID.
         * @minLength 1
         */
        targetSpaceId?: string;
        /**
         * The destination parent node_token.
         * @minLength 1
         */
        targetParentToken?: string;
        /**
         * An optional title for the copied node.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** A Feishu Wiki object. */
        item: Record<string, unknown>;
      };
    };
    /** Register a slash command, optionally updating the existing command when its name already exists. */
    "feishu_app_bot.create_app_slash_command": {
      input: {
        /**
         * The slash command name without the leading slash.
         * @minLength 1
         */
        command: string;
        /**
         * The default command description shown by Feishu.
         * @minLength 1
         */
        description: string;
        /** Localized descriptions keyed by Feishu language code, such as `zh_cn` or `en_us`. */
        descriptionI18n?: Record<string, string>;
        /**
         * The Feishu icon key shown beside the command.
         * @minLength 1
         */
        iconKey?: string;
        /** Whether a command-name collision should update the existing command in place. */
        force?: boolean;
      };
      output: {
        /** Whether the command was created or updated. */
        action: "created" | "updated";
        /** A Feishu app slash command. */
        item: {
          /**
           * The slash command ID returned by Feishu.
           * @minLength 1
           */
          command_id?: string;
          /**
           * The slash command name without the leading slash.
           * @minLength 1
           */
          command?: string;
          /** The command description and localized values. */
          description?: Record<string, unknown>;
          /** The command icon configuration. */
          icon?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Feishu Base, optionally replacing its default table with a custom initial schema. */
    "feishu_app_bot.create_base": {
      input: {
        /**
         * The Base name.
         * @minLength 1
         */
        name: string;
        /** The destination Drive folder token. */
        folderToken?: string;
        /** The Base time zone, for example `Asia/Shanghai`. */
        timeZone?: string;
        /** A custom initial table that replaces the platform default table. */
        initialTable?: {
          /**
           * The initial table name.
           * @minLength 1
           */
          name: string;
          /**
           * The initial field definitions.
           * @minItems 1
           */
          fields: Array<{
            /** The field name. */
            name?: string;
            /** The field type such as `text`, `number`, or `select`. */
            type?: string;
            /** The type-specific field configuration. */
            property?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
        };
      };
      output: {
        /** The raw Base object returned by Feishu. */
        base: Record<string, unknown>;
        /** Whether the Base was created. */
        created: true;
        /** The raw Base object returned by Feishu. */
        table?: Record<string, unknown>;
        /** The deleted platform-default table ID. */
        deletedDefaultTableId?: string;
      };
    };
    /** Create a folder, table, document, dashboard, or workflow block. */
    "feishu_app_bot.create_base_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /** The resource type to create. */
        type: "folder" | "table" | "docx" | "dashboard" | "workflow";
        /**
         * The resource name.
         * @minLength 1
         */
        name: string;
        /**
         * The destination folder block ID.
         * @minLength 1
         */
        parentId?: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create a dashboard in a Base. */
    "feishu_app_bot.create_base_dashboard": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The dashboard name.
         * @minLength 1
         */
        name: string;
        /** The dashboard theme style. */
        themeStyle?: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create a chart, metric, or text block in a Base dashboard. */
    "feishu_app_bot.create_base_dashboard_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /**
         * The block name.
         * @minLength 1
         */
        name: string;
        /**
         * The chart or text block type.
         * @minLength 1
         */
        type: string;
        /** The complete API configuration object. */
        dataConfig?: Record<string, unknown>;
        /** The user ID type used in the response or filters. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create one field in a Feishu Base table. */
    "feishu_app_bot.create_base_field": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /** A Base field definition using the official field JSON shape. */
        field: {
          /** The field name. */
          name?: string;
          /** The field type such as `text`, `number`, or `select`. */
          type?: string;
          /** The type-specific field configuration. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The raw Base object returned by Feishu. */
        field: Record<string, unknown>;
        /** Whether the resource was created. */
        created: true;
      };
    };
    /** Create a form in a Base table. */
    "feishu_app_bot.create_base_form": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The form name.
         * @minLength 1
         */
        name: string;
        /** The form description. */
        description?: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create up to ten questions in a Base form. */
    "feishu_app_bot.create_base_form_questions": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The form questions to create or update.
         * @minItems 1
         * @maxItems 10
         */
        questions: Array<Record<string, unknown>>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create one record in a Feishu Base table. */
    "feishu_app_bot.create_base_record": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /** A map from Base field names or IDs to Feishu CellValue values. */
        fields: Record<string, unknown>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The raw Base object returned by Feishu. */
        record: Record<string, unknown>;
        /** Whether the resource was created. */
        created: true;
      };
    };
    /** Generate share links for up to 100 Base records. */
    "feishu_app_bot.create_base_record_share_links": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The record IDs to share.
         * @minItems 1
         * @maxItems 100
         */
        recordIds: Array<string>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Create a custom Base role from a complete permission configuration. */
    "feishu_app_bot.create_base_role": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /** The complete API configuration object. */
        role: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create a table with an optional initial field schema in a Feishu Base. */
    "feishu_app_bot.create_base_table": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The table name.
         * @minLength 1
         */
        name: string;
        /**
         * The initial field definitions.
         * @minItems 1
         */
        fields?: Array<{
          /** The field name. */
          name?: string;
          /** The field type such as `text`, `number`, or `select`. */
          type?: string;
          /** The type-specific field configuration. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        table: Record<string, unknown>;
        /** Whether the resource was created. */
        created: true;
      };
    };
    /** Create one or more views sequentially in a Feishu Base table. */
    "feishu_app_bot.create_base_views": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base views to create.
         * @minItems 1
         * @maxItems 100
         */
        views: Array<{
          /**
           * The view name.
           * @minLength 1
           */
          name: string;
          /** The view type; defaults to `grid`. */
          type?: "grid" | "kanban" | "gallery" | "calendar" | "gantt";
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The created Base views. */
        views: Array<Record<string, unknown>>;
      };
    };
    /** Create a disabled Base workflow from a complete definition. */
    "feishu_app_bot.create_base_workflow": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /** The complete API configuration object. */
        workflow: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Create a Feishu calendar event and add attendees, rolling back the event if attendee creation fails. */
    "feishu_app_bot.create_calendar_event": {
      input: {
        /**
         * The Feishu calendar ID. Use `primary` for the caller's primary calendar.
         * @minLength 1
         */
        calendarId: string;
        /**
         * The event title.
         * @minLength 1
         */
        summary: string;
        /** The event description. */
        description?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        startTime: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        endTime: string;
        /** The IANA timezone used by the start and end times. */
        timezone?: string;
        /** Whether the event is an all-day event. */
        isAllDay?: boolean;
        /** The event visibility. */
        visibility?: "default" | "public" | "private";
        /** The permission granted to attendees. */
        attendeeAbility?: "none" | "can_see_others" | "can_invite_others" | "can_modify_event";
        /** How the event affects availability. */
        freeBusyStatus?: "busy" | "free";
        /** The event location object accepted by Feishu. */
        location?: Record<string, unknown>;
        /** The RFC 5545 recurrence rule, without the `RRULE:` prefix. */
        recurrence?: string;
        /** Event reminders. */
        reminders?: Array<{
          /**
           * The number of minutes before the event.
           * @minimum 0
           */
          minutes: number;
        }>;
        /** Attendees to add after creating the event. */
        attendees?: Array<{
          /** The attendee type. */
          type: "user" | "chat" | "resource" | "third_party";
          /**
           * The attendee identifier: a user open_id, chat_id, room_id, or third-party email.
           * @minLength 1
           */
          id: string;
          /** The approval reason required by some meeting rooms. */
          approvalReason?: string;
        }>;
        /** Whether Feishu should notify attendees. */
        notifyAttendees?: boolean;
      };
      output: {
        /** A Feishu calendar object. */
        item: Record<string, unknown>;
      };
    };
    /** Create a Feishu group or topic chat with initial users and bots. */
    "feishu_app_bot.create_chat": {
      input: {
        /** The chat name. */
        name?: string;
        /** The chat description. */
        description?: string;
        /** The owner user identifier. */
        ownerId?: string;
        /** The user identifier type used by this request. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** The initial user identifiers. */
        userIds?: Array<string>;
        /** The initial bot identifiers. */
        botIds?: Array<string>;
        /** The chat mode. */
        chatMode?: "group" | "topic";
        /** The group discoverability type. */
        chatType?: "private" | "public";
        /** Whether the chat may contain external users. */
        external?: boolean;
      };
      output: {
        /** The raw Feishu data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Feishu document from Docx XML or Markdown content, optionally inside a folder or Wiki node. */
    "feishu_app_bot.create_document": {
      input: {
        /**
         * The complete document content in the selected format.
         * @minLength 1
         */
        content: string;
        /**
         * A document title to prepend to the content. For XML, the title is escaped before insertion.
         * @minLength 1
         */
        title?: string;
        /** The document content format. */
        format?: "xml" | "markdown";
        /**
         * The destination folder token or Wiki node token.
         * @minLength 1
         */
        parentToken?: string;
        /**
         * A named destination position such as `my_library`; do not combine it with `parentToken`.
         * @minLength 1
         */
        parentPosition?: string;
        /** A reference map used to preserve rich HTML5-block resources. */
        referenceMap?: Record<string, unknown>;
      };
      output: {
        /** The returned document payload. */
        document: {
          /** The Feishu document ID. */
          document_id?: string;
          /** The current document revision ID. */
          revision_id?: number;
          /** The document title. */
          title?: string;
          /** The document content in the requested format. */
          content?: string;
          /** The Feishu URL for the document. */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a full-resource or anchored rich-text comment on a Feishu Drive document or supported file. */
    "feishu_app_bot.create_drive_comment": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The resource type used by the comments API. */
        fileType: "file" | "doc" | "docx" | "sheet" | "bitable" | "slides";
        /**
         * The rich-text elements that form the initial comment reply.
         * @minItems 1
         */
        replyElements: Array<{
          /** The element type, such as `text` or `mention`. */
          type?: string;
          /** A text-run element payload. */
          text_run?: Record<string, unknown>;
          /** A document-link element payload. */
          docs_link?: Record<string, unknown>;
          /** A person-mention element payload. */
          person?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** An optional Feishu comment anchor for a block, sheet cell, slide element, or Base record. */
        anchor?: Record<string, unknown>;
      };
      output: {
        /** The created comment payload. */
        comment: Record<string, unknown>;
      };
    };
    /** Add a rich-text reply to a Feishu Drive comment. */
    "feishu_app_bot.create_drive_comment_reply": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The resource type used by the comments API. */
        fileType: "file" | "doc" | "docx" | "sheet" | "bitable" | "slides";
        /**
         * The Drive comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * The rich-text reply elements.
         * @minItems 1
         */
        replyElements: Array<{
          /** The element type, such as `text` or `mention`. */
          type?: string;
          /** A text-run element payload. */
          text_run?: Record<string, unknown>;
          /** A document-link element payload. */
          docs_link?: Record<string, unknown>;
          /** A person-mention element payload. */
          person?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The created reply payload. */
        reply: Record<string, unknown>;
      };
    };
    /** Create a folder in Feishu Drive. */
    "feishu_app_bot.create_drive_folder": {
      input: {
        /**
         * The new folder name, limited to 256 UTF-8 bytes.
         * @minLength 1
         */
        name: string;
        /**
         * The parent folder token; omit it to use the caller's root folder.
         * @minLength 1
         */
        folderToken?: string;
      };
      output: {
        /** The created folder metadata. */
        folder: {
          /** The resource token. */
          token?: string;
          /** The resource name. */
          name?: string;
          /** The resource type. */
          type?: string;
          /** The resource URL. */
          url?: string;
          /** The parent folder token. */
          parent_token?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Feishu Drive shortcut to an existing file in another folder. */
    "feishu_app_bot.create_drive_shortcut": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The referenced Drive file type. */
        type: "file" | "docx" | "bitable" | "doc" | "sheet" | "mindnote" | "slides";
        /**
         * The target folder token for the new shortcut.
         * @minLength 1
         */
        folderToken: string;
      };
      output: {
        /** Whether the shortcut was created. */
        created: true;
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        sourceFileToken: string;
        /** The referenced Drive file type. */
        sourceType: "file" | "docx" | "bitable" | "doc" | "sheet" | "mindnote" | "slides";
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        folderToken: string;
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        shortcutToken?: string;
        /**
         * The created shortcut URL.
         * @format uri
         */
        url?: string;
        /** The created shortcut title. */
        title?: string;
        /** The raw shortcut response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a personal Feishu mail template from JSON content and existing Drive-backed attachments. */
    "feishu_app_bot.create_mail_template": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The template name, limited to 100 Unicode characters.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The default message subject. */
        subject?: string;
        /** The HTML or plain-text template body. */
        templateContent?: string;
        /** Whether Feishu should treat the template as plain text. */
        isPlainText?: boolean;
        /** Default primary recipients. */
        to?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          mailAddress: string;
          /** The optional recipient display name. */
          name?: string;
        }>;
        /** Default carbon-copy recipients. */
        cc?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          mailAddress: string;
          /** The optional recipient display name. */
          name?: string;
        }>;
        /** Default blind-carbon-copy recipients. */
        bcc?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          mailAddress: string;
          /** The optional recipient display name. */
          name?: string;
        }>;
        /** Existing Drive-backed attachments. Upload files separately before referencing their keys. */
        attachments?: Array<{
          /**
           * The Drive file key used as the attachment ID and body.
           * @minLength 1
           */
          fileKey: string;
          /**
           * The attachment file name.
           * @minLength 1
           */
          fileName: string;
          /**
           * The Content-ID referenced by inline HTML.
           * @minLength 1
           */
          cid?: string;
          /** Whether this is an inline attachment. */
          inline?: boolean;
          /** How Feishu delivers the attachment. */
          attachmentType?: "small" | "large";
        }>;
      };
      output: {
        /** A Feishu mail API object. */
        template: Record<string, unknown>;
      };
    };
    /** Create a Markdown file from a JSON string in Feishu Drive root, a Drive folder, or a Wiki node. */
    "feishu_app_bot.create_markdown_file": {
      input: {
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName: string;
        /**
         * The complete Markdown content.
         * @minLength 1
         */
        markdown: string;
        /**
         * The destination Drive folder token; omit both destination tokens for Drive root.
         * @minLength 1
         */
        folderToken?: string;
        /**
         * The destination Wiki node token.
         * @minLength 1
         */
        wikiToken?: string;
      };
      output: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        version?: string;
        /**
         * The UTF-8 content size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
        /**
         * The Feishu URL for the Markdown file.
         * @format uri
         */
        url?: string;
      };
    };
    /** Create one Feishu objective or key result from plain text. */
    "feishu_app_bot.create_okr": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The cycle ID for an objective or objective ID for a key result.
         * @minLength 1
         */
        parentId: string;
        /**
         * The objective or key-result text.
         * @minLength 1
         */
        text: string;
        /** User open_ids mentioned after the text. */
        mentions?: Array<string>;
        /** Optional notes for an objective. */
        notes?: string;
        /** User open_ids mentioned after the text. */
        notesMentions?: Array<string>;
        /**
         * The objective category ID.
         * @minLength 1
         */
        categoryId?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The created target level. */
        targetType: string;
        /** The created objective or key-result ID. */
        targetId: string;
        /** A Feishu OKR object. */
        raw: Record<string, unknown>;
      };
    };
    /** Align one Feishu OKR objective to another objective. */
    "feishu_app_bot.create_okr_alignment": {
      input: {
        /**
         * The objective that initiates the alignment.
         * @minLength 1
         */
        objectiveId: string;
        /**
         * The objective that receives the alignment.
         * @minLength 1
         */
        toObjectiveId: string;
      };
      output: {
        /** The created alignment ID. */
        alignmentId: string;
        /** The raw Feishu alignment response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a progress record for an objective or key result. */
    "feishu_app_bot.create_okr_progress": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The objective or key-result ID.
         * @minLength 1
         */
        targetId: string;
        /**
         * The progress update text.
         * @minLength 1
         */
        content: string;
        /** The numeric completion percentage. */
        percent?: number;
        /** The progress status. */
        status?: "normal" | "overdue" | "done";
        /** The source title shown with the progress record. */
        sourceTitle?: string;
        /**
         * The source URL shown with the progress record.
         * @format uri
         */
        sourceUrl?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu OKR object. */
        progress: Record<string, unknown>;
      };
    };
    /** Create an empty sub-sheet with optional position and dimensions. */
    "feishu_app_bot.create_sheet": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        title: string;
        /**
         * The zero-based insertion position.
         * @minimum 0
         */
        index?: number;
        /**
         * The initial row count.
         * @maximum 50000
         * @exclusiveMinimum 0
         */
        rowCount?: number;
        /**
         * The initial column count.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        columnCount?: number;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Create a chart object. */
    "feishu_app_bot.create_sheet_chart": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a conditional format object. */
    "feishu_app_bot.create_sheet_conditional_format": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a filter object. */
    "feishu_app_bot.create_sheet_filter": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a filter view object. */
    "feishu_app_bot.create_sheet_filter_view": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a float image object. */
    "feishu_app_bot.create_sheet_float_image": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a pivot table object. */
    "feishu_app_bot.create_sheet_pivot_table": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The pivot properties, including source and optional target range. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a sparkline object. */
    "feishu_app_bot.create_sheet_sparkline": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Create a page in an existing Feishu Slides presentation. */
    "feishu_app_bot.create_slide": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * A complete SML 2.0 `<slide>` XML element for one Slides page.
         * @minLength 1
         */
        content: string;
        /**
         * Insert the new page before this page ID; omit it to append.
         * @minLength 1
         */
        beforeSlideId?: string;
        /**
         * The base revision for optimistic locking; `-1` uses the latest revision.
         * @minimum -1
         */
        revisionId?: number;
      };
      output: {
        /** The resolved presentation ID. */
        presentationId: string;
        /**
         * The stable Slides page ID.
         * @minLength 1
         */
        slideId: string;
        /** The new presentation revision ID. */
        revisionId?: number;
        /** Warnings reported by Feishu. */
        issues?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a Feishu Slides presentation and optionally add up to ten initial pages. */
    "feishu_app_bot.create_slides_presentation": {
      input: {
        /**
         * The presentation title; defaults to `Untitled`.
         * @minLength 1
         */
        title?: string;
        /**
         * Initial Slides pages to add after creation.
         * @maxItems 10
         */
        slides?: Array<string>;
      };
      output: {
        /** The created presentation ID. */
        presentationId: string;
        /** The created presentation title. */
        title: string;
        /** The latest revision ID. */
        revisionId?: number;
        /** The presentation URL. */
        url?: string;
        /** The initial page IDs created by this action. */
        slideIds: Array<string>;
        /** Warnings reported while creating the presentation or pages. */
        issues?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a Feishu task with members, dates, reminders, and tasklist membership. */
    "feishu_app_bot.create_task": {
      input: {
        /**
         * The task summary.
         * @minLength 1
         */
        summary: string;
        /** The task description. */
        description?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in milliseconds. Date-only values create all-day times.
         * @minLength 1
         */
        start?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in milliseconds. Date-only values create all-day times.
         * @minLength 1
         */
        due?: string;
        /** The assignees and followers. */
        members?: Array<{
          /**
           * A user open_id or application ID.
           * @minLength 1
           */
          id: string;
          /** The member type. */
          type: "user" | "app";
          /** The member role. */
          role: "assignee" | "follower";
        }>;
        /** Tasklists that should contain the task. */
        tasklistGuids?: Array<string>;
        /** Reminder offsets in minutes relative to the due time. */
        reminderOffsetsMinutes?: Array<number>;
        /**
         * An idempotency token for task creation.
         * @minLength 1
         */
        clientToken?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Create a Feishu tasklist. */
    "feishu_app_bot.create_tasklist": {
      input: {
        /**
         * The tasklist name.
         * @minLength 1
         */
        name: string;
        /** Initial tasklist members. */
        members?: Array<{
          /**
           * A user open_id or application ID.
           * @minLength 1
           */
          id: string;
          /** The member type. */
          type: "user" | "app";
          /** The tasklist permission granted to the member. */
          role: "editor" | "viewer";
        }>;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu tasklist object. */
        tasklist: Record<string, unknown>;
      };
    };
    /** Create a Mermaid, PlantUML, or SVG diagram node in a Feishu whiteboard. */
    "feishu_app_bot.create_whiteboard_diagram": {
      input: {
        /**
         * The Feishu whiteboard token.
         * @minLength 1
         */
        whiteboardToken: string;
        /** The diagram source format. */
        format: "plantuml" | "mermaid" | "svg";
        /**
         * The complete diagram source.
         * @minLength 1
         */
        source: string;
        /** Delete existing whiteboard content before creating the diagram. */
        overwrite?: boolean;
        /**
         * An idempotency token with at least 10 characters.
         * @minLength 10
         */
        idempotentToken?: string;
      };
      output: {
        /** The created diagram node ID. */
        createdNodeId: string;
      };
    };
    /** Create raw OpenAPI nodes in a Feishu whiteboard, optionally replacing all existing content. */
    "feishu_app_bot.create_whiteboard_nodes": {
      input: {
        /**
         * The Feishu whiteboard token.
         * @minLength 1
         */
        whiteboardToken: string;
        /**
         * The raw whiteboard nodes to create.
         * @minItems 1
         */
        nodes: Array<Record<string, unknown>>;
        /** Delete existing whiteboard content before creating nodes. */
        overwrite?: boolean;
        /**
         * An idempotency token with at least 10 characters.
         * @minLength 10
         */
        idempotentToken?: string;
      };
      output: {
        /** The IDs of the created nodes. */
        createdNodeIds: Array<string>;
      };
    };
    /** Create a document node in a Feishu Wiki space. */
    "feishu_app_bot.create_wiki_node": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /** The document type represented by the Wiki node. */
        objectType: "doc" | "sheet" | "bitable" | "mindnote" | "file" | "slides" | "docx";
        /**
         * The parent node_token, or omit to create at space root.
         * @minLength 1
         */
        parentNodeToken?: string;
        /** Whether to create at the origin or as a shortcut. */
        nodeType?: "origin" | "shortcut";
        /**
         * The title of the new document.
         * @minLength 1
         */
        title?: string;
        /**
         * The origin node_token required when creating a shortcut node.
         * @minLength 1
         */
        originNodeToken?: string;
      };
      output: {
        /** A Feishu Wiki object. */
        item: Record<string, unknown>;
      };
    };
    /** Create a Feishu spreadsheet workbook. */
    "feishu_app_bot.create_workbook": {
      input: {
        /**
         * The workbook title.
         * @minLength 1
         */
        title: string;
        /** The destination Drive folder token. */
        folderToken?: string;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        workbook: Record<string, unknown>;
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
      };
    };
    /** Permanently delete a slash command selected by command ID or exact command name. */
    "feishu_app_bot.delete_app_slash_command": {
      input: {
        /**
         * The command ID; mutually exclusive with command.
         * @minLength 1
         */
        commandId?: string;
        /**
         * The command name without the leading slash; mutually exclusive with commandId.
         * @minLength 1
         */
        command?: string;
      };
      output: {
        /** Whether the command was deleted. */
        deleted: boolean;
        /**
         * The slash command ID returned by Feishu.
         * @minLength 1
         */
        commandId: string;
        /**
         * The slash command name without the leading slash.
         * @minLength 1
         */
        command?: string;
      };
    };
    /** Delete a Base resource block. */
    "feishu_app_bot.delete_base_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
        /**
         * The deleted resource ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete a Base dashboard and its blocks. */
    "feishu_app_bot.delete_base_dashboard": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
        /**
         * The deleted resource ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete a block from a Base dashboard. */
    "feishu_app_bot.delete_base_dashboard_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
        /**
         * The deleted resource ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete one field from a Feishu Base table. */
    "feishu_app_bot.delete_base_field": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base field ID or field name accepted by the API.
         * @minLength 1
         */
        fieldId: string;
      };
      output: {
        /** Whether the field was deleted. */
        deleted: true;
        /**
         * The Base field ID or field name accepted by the API.
         * @minLength 1
         */
        fieldId: string;
      };
    };
    /** Delete a form from a Base table. */
    "feishu_app_bot.delete_base_form": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
        /**
         * The deleted resource ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete up to ten questions from a Base form. */
    "feishu_app_bot.delete_base_form_questions": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The question IDs to delete.
         * @minItems 1
         * @maxItems 10
         */
        questionIds: Array<string>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Delete one record from a Feishu Base table. */
    "feishu_app_bot.delete_base_record": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID, usually starting with `rec`.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether the record was deleted. */
        deleted: true;
        /**
         * The Base record ID, usually starting with `rec`.
         * @minLength 1
         */
        recordId: string;
      };
    };
    /** Delete a custom Base role; system roles cannot be deleted. */
    "feishu_app_bot.delete_base_role": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base role ID.
         * @minLength 1
         */
        roleId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
        /**
         * The deleted resource ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete a table from a Feishu Base. */
    "feishu_app_bot.delete_base_table": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** Whether the table was deleted. */
        deleted: true;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
      };
    };
    /** Delete one view from a Feishu Base table by ID or accepted view name. */
    "feishu_app_bot.delete_base_view": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID or view name accepted by the API.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** Whether the view was deleted. */
        deleted: true;
        /**
         * The Base view ID or view name accepted by the API.
         * @minLength 1
         */
        viewId: string;
      };
    };
    /** Delete a Feishu calendar event. */
    "feishu_app_bot.delete_calendar_event": {
      input: {
        /**
         * The Feishu calendar ID. Use `primary` for the caller's primary calendar.
         * @minLength 1
         */
        calendarId: string;
        /**
         * The Feishu calendar event ID.
         * @minLength 1
         */
        eventId: string;
        /** Whether Feishu should notify attendees. */
        notifyAttendees?: boolean;
      };
      output: {
        /** Whether the event was deleted. */
        deleted: boolean;
        /** The deleted event ID. */
        eventId: string;
      };
    };
    /** Idempotently clear the cover of a Feishu docx document. */
    "feishu_app_bot.delete_document_cover": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
        /** Whether an existing cover was cleared. */
        deleted: boolean;
        /** Whether the document already had no cover. */
        alreadyEmpty: boolean;
        /** The previous cover metadata. */
        previousCover?: Record<string, unknown>;
      };
    };
    /** Delete a Feishu Drive comment. */
    "feishu_app_bot.delete_drive_comment": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The resource type used by the comments API. */
        fileType: "file" | "doc" | "docx" | "sheet" | "bitable" | "slides";
        /**
         * The Drive comment ID.
         * @minLength 1
         */
        commentId: string;
      };
      output: {
        /** Whether the requested resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a reply from a Feishu Drive comment. */
    "feishu_app_bot.delete_drive_comment_reply": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The resource type used by the comments API. */
        fileType: "file" | "doc" | "docx" | "sheet" | "bitable" | "slides";
        /**
         * The Drive comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * The reply ID to delete.
         * @minLength 1
         */
        replyId: string;
      };
      output: {
        /** Whether the requested resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a Feishu Drive file or folder and return a task ID when Feishu processes the deletion asynchronously. */
    "feishu_app_bot.delete_drive_item": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The Feishu Drive resource type. */
        type: "file" | "folder" | "doc" | "docx" | "sheet" | "bitable" | "mindnote" | "slides" | "shortcut";
      };
      output: {
        /** The affected Drive resource token. */
        fileToken: string;
        /** The affected Drive resource type. */
        type: string;
        /** The destination folder token for move operations. */
        folderToken?: string;
        /** The asynchronous task ID returned by Feishu. */
        taskId?: string;
        /** Whether the deletion completed synchronously. */
        deleted?: boolean;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a specific historical version of a Feishu Drive file. */
    "feishu_app_bot.delete_drive_version": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version: string;
      };
      output: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version: string;
        /** Whether the historical version was deleted. */
        deleted: true;
      };
    };
    /** Delete a Feishu OKR objective alignment. */
    "feishu_app_bot.delete_okr_alignment": {
      input: {
        /**
         * The alignment ID to delete.
         * @minLength 1
         */
        alignmentId: string;
      };
      output: {
        /** Whether the alignment was deleted. */
        deleted: boolean;
        /** The deleted alignment ID. */
        alignmentId: string;
      };
    };
    /** Delete a Feishu OKR progress record. */
    "feishu_app_bot.delete_okr_progress": {
      input: {
        /**
         * The progress record ID.
         * @minLength 1
         */
        progressId: string;
      };
      output: {
        /** Whether the progress record was deleted. */
        deleted: boolean;
        /** The deleted progress record ID. */
        progressId: string;
      };
    };
    /** Delete one sub-sheet from a workbook. */
    "feishu_app_bot.delete_sheet": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a chart object. */
    "feishu_app_bot.delete_sheet_chart": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a conditional format object. */
    "feishu_app_bot.delete_sheet_conditional_format": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete rows or columns in a sub-sheet. */
    "feishu_app_bot.delete_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A row range such as 3:7 or column range such as C:F.
         * @minLength 1
         */
        range: string;
        /** The initial group state. */
        groupState?: "expand" | "collapse";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Remove dropdown validation from multiple sheet-prefixed ranges. */
    "feishu_app_bot.delete_sheet_dropdowns": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * Sheet-prefixed destination ranges.
         * @minItems 1
         * @maxItems 100
         */
        ranges: Array<string>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a filter object. */
    "feishu_app_bot.delete_sheet_filter": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID; sheet filters use sheetId.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a filter view object. */
    "feishu_app_bot.delete_sheet_filter_view": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a float image object. */
    "feishu_app_bot.delete_sheet_float_image": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a pivot table object. */
    "feishu_app_bot.delete_sheet_pivot_table": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a sparkline object. */
    "feishu_app_bot.delete_sheet_sparkline": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a page from a Feishu Slides presentation. */
    "feishu_app_bot.delete_slide": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The stable Slides page ID.
         * @minLength 1
         */
        slideId: string;
        /**
         * The base revision for optimistic locking; `-1` uses the latest revision.
         * @minimum -1
         */
        revisionId?: number;
      };
      output: {
        /** The resolved presentation ID. */
        presentationId: string;
        /**
         * The stable Slides page ID.
         * @minLength 1
         */
        slideId: string;
        /** Whether the page was deleted. */
        deleted: boolean;
        /** The new presentation revision ID. */
        revisionId?: number;
      };
    };
    /** Delete a Feishu Wiki node and optionally its descendants. */
    "feishu_app_bot.delete_wiki_node": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The Wiki node_token.
         * @minLength 1
         */
        nodeToken: string;
        /** The document type represented by the Wiki node. */
        objectType?: "doc" | "sheet" | "bitable" | "mindnote" | "file" | "slides" | "docx";
        /** Whether to delete descendant nodes. */
        includeChildren?: boolean;
      };
      output: {
        /** Whether Feishu completed deletion synchronously. */
        deleted: boolean;
        /** The asynchronous task ID, when returned. */
        taskId: string | null;
        /** A Feishu Wiki object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Feishu Wiki space and return either synchronous completion or an asynchronous task ID. */
    "feishu_app_bot.delete_wiki_space": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /** The normalized deletion status. */
        status: "running" | "succeeded";
        /** The asynchronous task ID, when deletion is queued. */
        taskId: string | null;
        /** A Feishu Wiki object. */
        raw: Record<string, unknown>;
      };
    };
    /** Compute a unified line diff between Drive versions or between a Drive version and a JSON Markdown string. */
    "feishu_app_bot.diff_markdown_file": {
      input: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        fromVersion?: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        toVersion?: string;
        /** The proposed Markdown string to compare with the selected remote version. */
        markdown?: string;
        /**
         * The number of unchanged lines to include around each diff hunk.
         * @minimum 0
         * @maximum 100
         * @default 3
         */
        contextLines?: number;
      };
      output: {
        /** Whether the compared content differs. */
        changed: boolean;
        /** The comparison mode. */
        mode: "remote_vs_remote" | "remote_vs_input";
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        fromVersion: string | null;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        toVersion: string | null;
        /** The old-side unified diff label. */
        fromLabel: string;
        /** The new-side unified diff label. */
        toLabel: string;
        /**
         * The number of inserted lines.
         * @minimum 0
         */
        addedLines: number;
        /**
         * The number of deleted lines.
         * @minimum 0
         */
        deletedLines: number;
        /**
         * The requested number of context lines.
         * @minimum 0
         */
        contextLines: number;
        /** The unified diff hunks. */
        hunks: Array<{
          /** The unified diff range header. */
          header: string;
          /**
           * The first old-file line covered by the hunk.
           * @minimum 0
           */
          oldStart: number;
          /**
           * The number of old-file lines covered by the hunk.
           * @minimum 0
           */
          oldLines: number;
          /**
           * The first new-file line covered by the hunk.
           * @minimum 0
           */
          newStart: number;
          /**
           * The number of new-file lines covered by the hunk.
           * @minimum 0
           */
          newLines: number;
        }>;
        /** The complete unified diff, or an empty string when unchanged. */
        diff: string;
      };
    };
    /** Disable advanced permissions for a Base. */
    "feishu_app_bot.disable_base_advanced_permissions": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Disable a Base workflow without changing its steps. */
    "feishu_app_bot.disable_base_workflow": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base workflow ID.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Read Base attachment metadata and download selected or all record attachments into connector transit storage. */
    "feishu_app_bot.download_base_attachments": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID.
         * @minLength 1
         */
        recordId: string;
        /**
         * The attachment file tokens to download.
         * @minItems 1
         * @maxItems 50
         */
        fileTokens?: Array<string>;
      };
      output: {
        /** Files uploaded to connector transit storage. */
        files: Array<{
          /** The field containing the attachment. */
          fieldId: string;
          /**
           * A Feishu file token.
           * @minLength 1
           */
          fileToken: string;
          /** The attachment file name. */
          name: string;
          /** The downloaded MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the attachment.
           * @format uri
           */
          transitUrl: string;
          /**
           * The downloaded size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
        }>;
      };
    };
    /** Download Feishu document media or a whiteboard image into connector transit storage. */
    "feishu_app_bot.download_docs_media": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        token: string;
        /** The resource download type. */
        type?: "media" | "whiteboard";
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The downloaded file name. */
        name: string;
        /** The downloaded file MIME type. */
        mimeType: string;
        /**
         * The temporary transit URL for downloading the file.
         * @format uri
         */
        transitUrl: string;
        /**
         * The downloaded file size in bytes.
         * @minimum 0
         */
        sizeBytes?: number;
      };
    };
    /** Read a Feishu docx document cover and download its image into connector transit storage. */
    "feishu_app_bot.download_document_cover": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
        /** The document cover metadata. */
        cover: Record<string, unknown>;
        /** A file stored in connector transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The downloaded file MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the file.
           * @format uri
           */
          transitUrl: string;
          /**
           * The downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
        };
      };
    };
    /** Download a stable Drive cover preset into connector transit storage. */
    "feishu_app_bot.download_drive_cover": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The stable cover preset. */
        spec: "default" | "icon" | "grid" | "small" | "middle" | "big" | "square";
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version?: string;
        /**
         * An optional downloaded file name override.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The selected cover preset. */
        spec: string;
        /** A downloaded Drive artifact stored in connector transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The downloaded file MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the file.
           * @format uri
           */
          transitUrl: string;
          /**
           * The downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
        };
      };
    };
    /** Download a generated Drive export file into connector transit storage. */
    "feishu_app_bot.download_drive_export": {
      input: {
        /**
         * A Feishu file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The downloaded file name. */
        name: string;
        /** The downloaded file MIME type. */
        mimeType: string;
        /**
         * The temporary transit URL for downloading the file.
         * @format uri
         */
        transitUrl: string;
        /**
         * The downloaded file size in bytes.
         * @minimum 0
         */
        sizeBytes?: number;
      };
    };
    /** Download a Feishu Drive file into connector transit storage. */
    "feishu_app_bot.download_drive_file": {
      input: {
        /**
         * A Feishu file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The downloaded file name. */
        name: string;
        /** The downloaded file MIME type. */
        mimeType: string;
        /**
         * The temporary transit URL for downloading the file.
         * @format uri
         */
        transitUrl: string;
        /**
         * The downloaded file size in bytes.
         * @minimum 0
         */
        sizeBytes?: number;
      };
    };
    /** Resolve a requested Drive preview type and download the ready artifact into connector transit storage. */
    "feishu_app_bot.download_drive_preview": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * A preview name, alias, or type code such as `pdf`, `html`, `text`, `image`, `source`, or `0`.
         * @minLength 1
         */
        previewType: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version?: string;
        /**
         * An optional downloaded file name override.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The resolved preview type. */
        previewType: string;
        /** The resolved Feishu preview type code. */
        previewTypeCode: string;
        /** The resolved file version. */
        version?: string;
        /** A downloaded Drive artifact stored in connector transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The downloaded file MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the file.
           * @format uri
           */
          transitUrl: string;
          /**
           * The downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
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
    /** Download one image or file resource attached to a Feishu message into connector transit storage. */
    "feishu_app_bot.download_message_resource": {
      input: {
        /**
         * The Feishu message ID containing the resource.
         * @minLength 1
         */
        messageId: string;
        /**
         * The image_key or file_key exposed by the message content.
         * @minLength 1
         */
        fileKey: string;
        /** The message resource type. */
        type: "image" | "file";
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The downloaded file name. */
        name: string;
        /** The downloaded file MIME type. */
        mimeType: string;
        /**
         * The temporary transit URL for downloading the file.
         * @format uri
         */
        transitUrl: string;
        /**
         * The downloaded file size in bytes.
         * @minimum 0
         */
        sizeBytes?: number;
      };
    };
    /** Resolve and stream a Feishu Minutes audio or video recording into connector transit storage. */
    "feishu_app_bot.download_minutes_media": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        minuteToken: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        minuteToken: string;
        /** A file stored in connector transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The downloaded file MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the file.
           * @format uri
           */
          transitUrl: string;
          /**
           * The downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
        };
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
    /** Enable advanced permissions for a Base. */
    "feishu_app_bot.enable_base_advanced_permissions": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Enable a Base workflow without changing its steps. */
    "feishu_app_bot.enable_base_workflow": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base workflow ID.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Export a Feishu whiteboard as SVG and return the API's Base64 payload without writing a local file. */
    "feishu_app_bot.export_whiteboard_svg": {
      input: {
        /**
         * The Feishu whiteboard token.
         * @minLength 1
         */
        whiteboardToken: string;
      };
      output: {
        /** The Base64-encoded SVG content. */
        contentBase64: string;
        /** The SVG MIME type returned by Feishu. */
        mimeType: string;
      };
    };
    /** Fetch a Feishu document as Docx XML or Markdown, with optional structural detail and partial-read selection. */
    "feishu_app_bot.fetch_document": {
      input: {
        /**
         * The document ID from a Feishu docx URL, without the URL path or query.
         * @minLength 1
         */
        documentId: string;
        /** The document content format. */
        format?: "xml" | "markdown";
        /** The structural detail included in XML output. */
        detail?: "simple" | "with_ids" | "full";
        /**
         * The language used to display cited users, such as `zh-CN`.
         * @minLength 1
         */
        lang?: string;
        /**
         * The document revision ID; omit to read the latest revision.
         * @minimum 1
         */
        revisionId?: number;
        /** The portion of the document to read. */
        scope?: "full" | "outline" | "range" | "keyword" | "section";
        /**
         * The first block ID for range or section reads.
         * @minLength 1
         */
        startBlockId?: string;
        /**
         * The final block ID for a range read; `-1` means the end of the document.
         * @minLength 1
         */
        endBlockId?: string;
        /**
         * The query used by keyword reads.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The number of top-level sibling blocks to include before a partial match.
         * @minimum 0
         */
        contextBefore?: number;
        /**
         * The number of top-level sibling blocks to include after a partial match.
         * @minimum 0
         */
        contextAfter?: number;
        /**
         * The maximum subtree depth; `-1` means unlimited and `0` means the selected block only.
         * @minimum -1
         */
        maxDepth?: number;
      };
      output: {
        /** The returned document payload. */
        document: {
          /** The Feishu document ID. */
          document_id?: string;
          /** The current document revision ID. */
          revision_id?: number;
          /** The document title. */
          title?: string;
          /** The document content in the requested format. */
          content?: string;
          /** The Feishu URL for the document. */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch the latest or a specific version of a Markdown file from Feishu Drive. */
    "feishu_app_bot.fetch_markdown_file": {
      input: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        version?: string;
      };
      output: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName: string;
        /** The downloaded Markdown content. */
        markdown: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        version?: string;
        /**
         * The downloaded UTF-8 content size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
      };
    };
    /** Fill a destination range from a source pattern. */
    "feishu_app_bot.fill_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        sourceRange: string;
        /**
         * The destination A1 range.
         * @minLength 1
         */
        targetRange: string;
        /** The fill behavior. */
        seriesType?: "copy" | "auto" | "linear" | "growth" | "date";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Find meeting rooms available for the specified event time slots. */
    "feishu_app_bot.find_calendar_rooms": {
      input: {
        /**
         * Candidate meeting time slots.
         * @minItems 1
         * @maxItems 10
         */
        timeSlots: Array<{
          /**
           * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
           * @minLength 1
           */
          startTime: string;
          /**
           * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
           * @minLength 1
           */
          endTime: string;
        }>;
        /** User open_ids attending the meeting. */
        attendeeUserIds?: Array<string>;
        /** Chat IDs whose members attend the meeting. */
        attendeeChatIds?: Array<string>;
        /** The city name used to restrict room results. */
        city?: string;
        /** The building name used to restrict room results. */
        building?: string;
        /** The floor name used to restrict room results. */
        floor?: string;
        /** Text to match in meeting room names. */
        roomName?: string;
        /**
         * The minimum room capacity.
         * @exclusiveMinimum 0
         */
        minCapacity?: number;
        /**
         * The maximum room capacity.
         * @exclusiveMinimum 0
         */
        maxCapacity?: number;
        /** The IANA timezone of the requested slots. */
        timezone?: string;
        /** The RFC 5545 recurrence rule used for availability checks. */
        recurrence?: string;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** Freeze or unfreeze the leading rows or columns. */
    "feishu_app_bot.freeze_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The dimension to freeze. */
        dimension: "row" | "column";
        /**
         * The frozen count; zero unfreezes.
         * @minimum 0
         */
        count: number;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Get the Feishu custom app profile and configured scopes for this connection. */
    "feishu_app_bot.get_app_info": {
      input: Record<string, never>;
      output: {
        /** The application object returned by Feishu. */
        app: Record<string, unknown>;
      };
    };
    /** Get the currently published Feishu app version, tenant scopes, and subscribed events. */
    "feishu_app_bot.get_app_permissions": {
      input: Record<string, never>;
      output: {
        /** The published version identifier. */
        versionId: string | null;
        /** The published version label. */
        version: string | null;
        /** The published tenant_access_token scopes. */
        scopes: Array<string>;
        /** The event types subscribed by the published app version. */
        events: Array<string>;
        /** The raw published app version item. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the metadata of a Feishu Base. */
    "feishu_app_bot.get_base": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        base: Record<string, unknown>;
      };
    };
    /** Get a Base dashboard. */
    "feishu_app_bot.get_base_dashboard": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get a Base dashboard block and its data configuration. */
    "feishu_app_bot.get_base_dashboard_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
        /** The user ID type used in the response or filters. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the computed chart data for a Base dashboard block. */
    "feishu_app_bot.get_base_dashboard_block_data": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get one field from a Feishu Base table. */
    "feishu_app_bot.get_base_field": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base field ID or field name accepted by the API.
         * @minLength 1
         */
        fieldId: string;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        field: Record<string, unknown>;
      };
    };
    /** Get a form configured for a Base table. */
    "feishu_app_bot.get_base_form": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get public form questions and submission metadata by share token. */
    "feishu_app_bot.get_base_form_detail": {
      input: {
        /**
         * The form share token.
         * @minLength 1
         */
        shareToken: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get one record from a Feishu Base table. */
    "feishu_app_bot.get_base_record": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID, usually starting with `rec`.
         * @minLength 1
         */
        recordId: string;
        /**
         * The field IDs or names to return.
         * @maxItems 100
         */
        selectFields?: Array<string>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The raw Base object returned by Feishu. */
        record: Record<string, unknown>;
      };
    };
    /** Get a Base role and its complete permission configuration. */
    "feishu_app_bot.get_base_role": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base role ID.
         * @minLength 1
         */
        roleId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get one table in a Feishu Base. */
    "feishu_app_bot.get_base_table": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        table: Record<string, unknown>;
        /** All fields in the table. */
        fields: Array<Record<string, unknown>>;
        /** All views in the table. */
        views: Array<Record<string, unknown>>;
      };
    };
    /** Get one view from a Feishu Base table. */
    "feishu_app_bot.get_base_view": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID or view name accepted by the API.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        view: Record<string, unknown>;
      };
    };
    /** Get the card configuration of a Base view. */
    "feishu_app_bot.get_base_view_card": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the filter configuration of a Base view. */
    "feishu_app_bot.get_base_view_filter": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the grouping configuration of a Base view. */
    "feishu_app_bot.get_base_view_group": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the sorting configuration of a Base view. */
    "feishu_app_bot.get_base_view_sort": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the timeline configuration of a Base view. */
    "feishu_app_bot.get_base_view_timebar": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the visible field IDs of a Base view. */
    "feishu_app_bot.get_base_view_visible_fields": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get a Base workflow including its steps. */
    "feishu_app_bot.get_base_workflow": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base workflow ID.
         * @minLength 1
         */
        workflowId: string;
        /** The user ID type used in the response or filters. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
      };
    };
    /** Get the complete details of one Feishu calendar event. */
    "feishu_app_bot.get_calendar_event": {
      input: {
        /**
         * The Feishu calendar ID. Use `primary` for the caller's primary calendar.
         * @minLength 1
         */
        calendarId: string;
        /**
         * The Feishu calendar event ID.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** A Feishu calendar object. */
        item: Record<string, unknown>;
      };
    };
    /** Read one or more A1 ranges with values, formulas, and optional styles. */
    "feishu_app_bot.get_cells": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The A1 ranges to read.
         * @minItems 1
         */
        ranges: Array<string>;
        /** Whether to include cell styles. */
        includeStyles?: boolean;
        /** Whether values should be rendered as formulas. */
        renderFormulas?: boolean;
        /** Whether hidden rows and columns should be skipped. */
        skipHidden?: boolean;
        /**
         * The maximum response character count.
         * @exclusiveMinimum 0
         */
        maxCharacters?: number;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
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
    /** Get the status of a Feishu document history revert task. */
    "feishu_app_bot.get_document_revert_status": {
      input: {
        /**
         * The document ID from a Feishu docx URL, without the URL path or query.
         * @minLength 1
         */
        documentId: string;
        /**
         * The task ID returned by `revert_document`.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The task ID used to query the operation status. */
        taskId?: string;
        /** The current task status. */
        status?: string;
        /** The history version involved in the operation. */
        historyVersionId?: string;
        /** The recommended delay before checking status again. */
        pollAfterMs?: number;
        /** Block tokens that failed during a partially successful operation. */
        failedBlockTokens?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get the normalized status and generated file token of a Drive export task. */
    "feishu_app_bot.get_drive_export": {
      input: {
        /**
         * The opaque handle returned by submit_drive_export.
         * @minLength 1
         */
        exportHandle?: string;
        /**
         * The Feishu export task ticket.
         * @minLength 1
         */
        ticket?: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        sourceToken?: string;
      };
      output: {
        /** The Feishu export task ticket. */
        ticket: string;
        /** The normalized asynchronous task status. */
        status: "running" | "succeeded" | "failed";
        /** The raw Feishu job status code. */
        jobStatus: number;
        /**
         * A Feishu file token.
         * @minLength 1
         */
        fileToken?: string;
        /** The generated export file name. */
        fileName?: string;
        /** The generated export file extension. */
        fileExtension?: string;
        /** The source document type. */
        type?: string;
        /**
         * The generated file size in bytes.
         * @minimum 0
         */
        fileSize?: number;
        /** The Feishu export error message. */
        errorMessage?: string;
        /** The raw Feishu export result. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the normalized status and created document token of a Drive import task. */
    "feishu_app_bot.get_drive_import": {
      input: {
        /**
         * The Feishu import task ticket.
         * @minLength 1
         */
        ticket: string;
      };
      output: {
        /** The Feishu import task ticket. */
        ticket: string;
        /** The normalized asynchronous task status. */
        status: "running" | "succeeded" | "failed";
        /** The raw Feishu job status code. */
        jobStatus: number;
        /** The created document type. */
        type?: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        token?: string;
        /**
         * The created document URL.
         * @format uri
         */
        url?: string;
        /** The Feishu import error message. */
        errorMessage?: string;
        /** Additional Feishu import result details. */
        extra?: unknown;
        /** The raw Feishu import result. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current state of an asynchronous Drive move, copy, or delete task. */
    "feishu_app_bot.get_drive_task_status": {
      input: {
        /**
         * The task ID returned by a Drive mutation.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The queried task ID. */
        taskId: string;
        /** The task status returned by Feishu. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Download one specific Feishu Drive file version into connector transit storage. */
    "feishu_app_bot.get_drive_version": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version: string;
        /**
         * An optional downloaded file name override.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version: string;
        /** The historical file stored in connector transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The downloaded file MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the file.
           * @format uri
           */
          transitUrl: string;
          /**
           * The downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
        };
      };
    };
    /** Read one Feishu mail message with body and attachment metadata. */
    "feishu_app_bot.get_mail_message": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The Feishu mail message ID.
         * @minLength 1
         */
        messageId: string;
        /** Whether to include the HTML body. */
        includeHtml?: boolean;
      };
      output: {
        /** A Feishu mail object. */
        message: Record<string, unknown>;
      };
    };
    /** Get asynchronous recall progress and per-recipient results for one Feishu mail message. */
    "feishu_app_bot.get_mail_recall_detail": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The Feishu mail message ID.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /**
         * The Feishu mail message ID.
         * @minLength 1
         */
        messageId: string;
        /** The overall recall progress. */
        recallStatus: string | null;
        /** The aggregate recall result. */
        recallResult: string | null;
        /**
         * The number of successful recipients.
         * @minimum 0
         */
        successCount: number | null;
        /**
         * The number of failed recipients.
         * @minimum 0
         */
        failureCount: number | null;
        /**
         * The number of recipients still processing.
         * @minimum 0
         */
        processingCount: number | null;
        /** Per-recipient recall details. */
        items: Array<Record<string, unknown>>;
        /** A Feishu mail object. */
        raw: Record<string, unknown>;
      };
    };
    /** Read every message in a Feishu mail thread in chronological order. */
    "feishu_app_bot.get_mail_thread": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The Feishu mail thread ID.
         * @minLength 1
         */
        threadId: string;
        /** Whether to include HTML bodies. */
        includeHtml?: boolean;
        /** Whether to include spam and trashed messages. */
        includeSpamTrash?: boolean;
      };
      output: {
        /** The thread ID. */
        threadId: string;
        /** Messages ordered by internal date. */
        messages: Array<Record<string, unknown>>;
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
    /** List users who have read a Feishu message. */
    "feishu_app_bot.get_message_read_users": {
      input: {
        /**
         * The Feishu message identifier.
         * @minLength 1
         */
        messageId: string;
        /** The user identifier type used by this request. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The number of users per page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The page token returned by the previous request. */
        pageToken?: string;
      };
      output: {
        /** The messages returned on this page. */
        items: Array<Record<string, unknown>>;
        /** The token for fetching the next page. */
        pageToken: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List every objective in an OKR cycle and fetch the key results below each objective. */
    "feishu_app_bot.get_okr_cycle_detail": {
      input: {
        /**
         * The OKR cycle ID.
         * @minLength 1
         */
        cycleId: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The OKR cycle ID. */
        cycleId: string;
        /** Objectives with an added key_results array. */
        objectives: Array<Record<string, unknown>>;
      };
    };
    /** Get one Feishu OKR progress record. */
    "feishu_app_bot.get_okr_progress": {
      input: {
        /**
         * The progress record ID.
         * @minLength 1
         */
        progressId: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu OKR object. */
        progress: Record<string, unknown>;
      };
    };
    /** Get one sub-sheet from a workbook structure. */
    "feishu_app_bot.get_sheet": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        sheet: Record<string, unknown>;
      };
    };
    /** Get the raw spreadsheet edit actions between two revisions for reviewing applied changes. */
    "feishu_app_bot.get_sheet_changeset": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The first spreadsheet revision to include.
         * @exclusiveMinimum 0
         */
        startRevision: number;
        /**
         * The last spreadsheet revision to include; omit it to use the latest revision.
         * @exclusiveMinimum 0
         */
        endRevision?: number;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Read dropdown validation metadata for a range. */
    "feishu_app_bot.get_sheet_dropdown": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        range: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Poll the status of a spreadsheet history revert. */
    "feishu_app_bot.get_sheet_history_revert_status": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The revert transaction ID.
         * @minLength 1
         */
        transactionId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Get one Feishu Slides page as SML 2.0 XML by stable ID or page number. */
    "feishu_app_bot.get_slide": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The stable Slides page ID.
         * @minLength 1
         */
        slideId?: string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         */
        slideNumber?: number;
        /**
         * The revision ID; `-1` reads the latest revision.
         * @minimum -1
         */
        revisionId?: number;
      };
      output: {
        /** The resolved presentation ID. */
        presentationId: string;
        /** The returned page XML payload. */
        slide: {
          /** The stable page ID. */
          slide_id?: string;
          /** The SML 2.0 XML content. */
          content?: string;
          [key: string]: unknown;
        };
        /** The revision that was read. */
        revisionId?: number;
      };
    };
    /** Get the complete SML 2.0 XML of a Feishu Slides presentation. */
    "feishu_app_bot.get_slides_presentation": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The revision ID; `-1` reads the latest revision.
         * @minimum -1
         */
        revisionId?: number;
        /** Remove XML id attributes for simpler read-only inspection. */
        removeAttributeIds?: boolean;
      };
      output: {
        /** The resolved presentation ID. */
        presentationId: string;
        /** The presentation XML payload. */
        presentation: {
          /** The presentation ID. */
          xml_presentation_id?: string;
          /** The SML 2.0 presentation XML. */
          content?: string;
          /** The current presentation revision ID. */
          revision_id?: number;
          /** The presentation URL. */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the status of a Slides history revert task. */
    "feishu_app_bot.get_slides_revert_status": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The revert task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The background task ID. */
        taskId?: string;
        /** The current task status. */
        status?: string;
        /** The history version involved. */
        historyVersionId?: string;
        /** The pages that failed during a partial revert. */
        failedSlideIds?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Render up to ten existing Slides pages and store the decoded screenshots in connector transit storage. */
    "feishu_app_bot.get_slides_screenshots": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** How to interpret the presentation token. */
        presentationType?: "slides" | "wiki";
        /**
         * Stable slide IDs to render.
         * @minItems 1
         * @maxItems 10
         */
        slideIds?: Array<string>;
        /**
         * One-based slide numbers to render.
         * @minItems 1
         * @maxItems 10
         */
        slideNumbers?: Array<number>;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        presentationId: string;
        /** The decoded screenshots. */
        screenshots: Array<{
          /** The stable slide ID. */
          slideId?: string;
          /**
           * The one-based slide number.
           * @exclusiveMinimum 0
           */
          slideNumber?: number;
          /** The screenshot image format. */
          format: "png" | "jpeg";
          /** The generated image name. */
          name: string;
          /** The screenshot MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the screenshot.
           * @format uri
           */
          transitUrl: string;
          /**
           * The decoded screenshot size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        }>;
      };
    };
    /** Get one Feishu task by GUID. */
    "feishu_app_bot.get_task": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Read a sub-sheet range into a DataFrame-friendly typed table with inferred dtypes. */
    "feishu_app_bot.get_typed_table": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /** The A1 range to read; omit to detect the used range. */
        range?: string;
        /** Whether the first row is data instead of column names. */
        noHeader?: boolean;
      };
      output: {
        /** A DataFrame-friendly typed table. */
        table: {
          /**
           * The sub-sheet display name.
           * @minLength 1
           */
          name: string;
          /**
           * Column names in display order.
           * @maxItems 200
           */
          columns: Array<string>;
          /** Rows whose values align with columns. */
          data: Array<Array<unknown>>;
          /** Pandas-style dtypes keyed by column name. */
          dtypes: Record<string, string>;
          /** Optional Sheets number formats keyed by column name. */
          formats?: Record<string, string>;
          /** The A1 range represented by this table. */
          range?: string;
        };
      };
    };
    /** Get a Feishu user profile. User identity may omit userId to return the authenticated user. */
    "feishu_app_bot.get_user": {
      input: {
        /**
         * The Feishu user identifier. Omit only when using user identity to get the authenticated user.
         * @minLength 1
         */
        userId?: string;
        /** The identifier type used by userId. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The user object returned by Feishu. */
        user: Record<string, unknown>;
      };
    };
    /** Resolve and get a Feishu Wiki node by token and object type. */
    "feishu_app_bot.get_wiki_node": {
      input: {
        /**
         * A Wiki node_token or document obj_token.
         * @minLength 1
         */
        token: string;
        /** The document type represented by the Wiki node. */
        objectType?: "doc" | "sheet" | "bitable" | "mindnote" | "file" | "slides" | "docx";
      };
      output: {
        /** A Feishu Wiki object. */
        item: Record<string, unknown>;
      };
    };
    /** Get one Feishu Wiki space by ID. */
    "feishu_app_bot.get_wiki_space": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** A Feishu Wiki object. */
        item: Record<string, unknown>;
      };
    };
    /** Get a normalized Wiki asynchronous task status. */
    "feishu_app_bot.get_wiki_task": {
      input: {
        /**
         * The Wiki asynchronous task ID.
         * @minLength 1
         */
        taskId: string;
        /** The Wiki asynchronous operation type. */
        taskType?: "move_wiki_to_docs" | "delete_space";
      };
      output: {
        /** The Wiki asynchronous task ID. */
        taskId: string;
        /** The Wiki asynchronous operation type. */
        taskType: string;
        /** The normalized Wiki task status. */
        status: "running" | "succeeded" | "failed";
        /** The provider status message. */
        statusMessage?: string;
        /** The moved Drive resource token. */
        resourceToken?: string;
        /** The moved Drive resource type. */
        resourceType?: string;
        /**
         * The moved Drive resource URL.
         * @format uri
         */
        url?: string;
        /** A Feishu Wiki object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get workbook structure and metadata, including all sub-sheets. */
    "feishu_app_bot.get_workbook": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        workbook: Record<string, unknown>;
      };
    };
    /** Group rows or columns in a sub-sheet. */
    "feishu_app_bot.group_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A row range such as 3:7 or column range such as C:F.
         * @minLength 1
         */
        range: string;
        /** The initial group state. */
        groupState?: "expand" | "collapse";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Hide rows or columns in a sub-sheet. */
    "feishu_app_bot.hide_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A row range such as 3:7 or column range such as C:F.
         * @minLength 1
         */
        range: string;
        /** The initial group state. */
        groupState?: "expand" | "collapse";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Append an image or file to a Feishu docx document by creating a block, uploading media, and binding the file token with rollback on failure. */
    "feishu_app_bot.insert_docs_media": {
      input: {
        /**
         * The docx document ID.
         * @minLength 1
         */
        documentId: string;
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
        /** The document media block type. */
        type: "image" | "file";
        /** The image alignment. */
        align?: "left" | "center" | "right";
        /** The image caption text. */
        caption?: string;
        /**
         * The image display width in pixels.
         * @maximum 10000
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The image display height in pixels.
         * @maximum 10000
         * @exclusiveMinimum 0
         */
        height?: number;
        /** The file block rendering style. */
        fileView?: "card" | "preview" | "inline";
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        blockId: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The document media block type. */
        type: "image" | "file";
      };
    };
    /** Insert blank rows or columns into a sub-sheet. */
    "feishu_app_bot.insert_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A row number or column letter.
         * @minLength 1
         */
        position: string;
        /**
         * The number of rows or columns to insert.
         * @exclusiveMinimum 0
         */
        count: number;
        /** The adjacent style to inherit. */
        inheritStyle?: "before" | "after";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Inspect a Feishu Drive token to resolve its canonical type, title, URL, and underlying document for Wiki nodes. */
    "feishu_app_bot.inspect_drive_item": {
      input: {
        /**
         * The Feishu Drive resource token.
         * @minLength 1
         */
        token: string;
        /** The known or inferred resource type. */
        type: "file" | "folder" | "doc" | "docx" | "sheet" | "bitable" | "wiki" | "mindnote" | "slides";
      };
      output: {
        /**
         * The Feishu Drive resource token.
         * @minLength 1
         */
        token: string;
        /** The resolved resource type. */
        type: string;
        /** The resource title. */
        title?: string;
        /** The canonical resource URL returned by Feishu. */
        url?: string;
        /** The source Wiki node metadata when the input was a Wiki node. */
        wikiNode?: Record<string, unknown>;
        /** The raw metadata returned by the Drive metadata API. */
        raw: Record<string, unknown>;
      };
    };
    /** Join a Feishu video meeting with the app's meeting bot. */
    "feishu_app_bot.join_vc_meeting": {
      input: {
        /**
         * The nine-digit Feishu meeting number.
         * @minLength 9
         * @maxLength 9
         */
        meetingNumber: string;
        /**
         * The meeting password, when required.
         * @minLength 1
         */
        password?: string;
        /**
         * The correlation ID forwarded by a meeting invite event.
         * @minLength 1
         */
        callId?: string;
      };
      output: {
        /** The raw video-conference object returned by Feishu. */
        meeting: Record<string, unknown>;
      };
    };
    /** Leave a Feishu video meeting previously joined by the app's meeting bot. */
    "feishu_app_bot.leave_vc_meeting": {
      input: {
        /**
         * The Feishu video meeting ID.
         * @minLength 1
         */
        meetingId: string;
      };
      output: {
        /**
         * The Feishu video meeting ID.
         * @minLength 1
         */
        meetingId: string;
      };
    };
    /** List active Feishu video meetings for the current user or a tenant user. */
    "feishu_app_bot.list_active_vc_meetings": {
      input: {
        /**
         * The target user ID required for tenant identity.
         * @minLength 1
         */
        userId?: string;
      };
      output: {
        /** The active meetings. */
        meetings: Array<Record<string, unknown>>;
      };
    };
    /** List every slash command registered on the currently connected Feishu app. */
    "feishu_app_bot.list_app_slash_commands": {
      input: Record<string, never>;
      output: {
        /** The slash commands registered on the app. */
        items: Array<{
          /**
           * The slash command ID returned by Feishu.
           * @minLength 1
           */
          command_id?: string;
          /**
           * The slash command name without the leading slash.
           * @minLength 1
           */
          command?: string;
          /** The command description and localized values. */
          description?: Record<string, unknown>;
          /** The command icon configuration. */
          icon?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * The number of registered slash commands.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List folders, tables, documents, dashboards, and workflows in a Base. */
    "feishu_app_bot.list_base_blocks": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The parent folder block ID.
         * @minLength 1
         */
        parentId?: string;
        /** The resource type to return. */
        type?: "folder" | "table" | "docx" | "dashboard" | "workflow";
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List blocks in a Base dashboard. */
    "feishu_app_bot.list_base_dashboard_blocks": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /**
         * The page size.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The pagination token from a previous response. */
        pageToken?: string;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List dashboards in a Base. */
    "feishu_app_bot.list_base_dashboards": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The page size.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The pagination token from a previous response. */
        pageToken?: string;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List the fields in a Feishu Base table. */
    "feishu_app_bot.list_base_fields": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The zero-based result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The zero-based offset used for this page.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The total result count reported or inferred for this page.
         * @minimum 0
         */
        total: number;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List questions configured for a Base form. */
    "feishu_app_bot.list_base_form_questions": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List forms configured for a Base table. */
    "feishu_app_bot.list_base_forms": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The page size.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The pagination token from a previous response. */
        pageToken?: string;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List the change history for one Base record. */
    "feishu_app_bot.list_base_record_history": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID.
         * @minLength 1
         */
        recordId: string;
        /**
         * The maximum version for the next page.
         * @exclusiveMinimum 0
         */
        maxVersion?: number;
        /**
         * The history page size.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List records in a Feishu Base table with optional projection, filter, and sort. */
    "feishu_app_bot.list_base_records": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID or view name accepted by the API.
         * @minLength 1
         */
        viewId?: string;
        /**
         * The field IDs or names to include.
         * @maxItems 100
         */
        fieldIds?: Array<string>;
        /** A Base record filter condition group. */
        filter?: Record<string, unknown>;
        /**
         * Sort conditions in priority order.
         * @maxItems 10
         */
        sort?: Array<{
          /** The field ID or name to sort by. */
          field: string;
          /** Whether to sort in descending order. */
          desc: boolean;
          [key: string]: unknown;
        }>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The zero-based result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The zero-based offset used for this page.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The total result count reported or inferred for this page.
         * @minimum 0
         */
        total: number;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List roles configured for Base advanced permissions. */
    "feishu_app_bot.list_base_roles": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List tables in a Feishu Base. */
    "feishu_app_bot.list_base_tables": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The zero-based result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The zero-based offset used for this page.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The total result count reported or inferred for this page.
         * @minimum 0
         */
        total: number;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List the views in a Feishu Base table. */
    "feishu_app_bot.list_base_views": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The zero-based result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The zero-based offset used for this page.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The total result count reported or inferred for this page.
         * @minimum 0
         */
        total: number;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List and optionally filter workflows in a Base. */
    "feishu_app_bot.list_base_workflows": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /** The workflow status. */
        status?: "enabled" | "disabled";
        /**
         * The page size.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The resources returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The total count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** The next pagination token. */
        pageToken: string;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List event instances in a Feishu calendar over a bounded time range. */
    "feishu_app_bot.list_calendar_agenda": {
      input: {
        /**
         * The Feishu calendar ID. Use `primary` for the caller's primary calendar.
         * @minLength 1
         */
        calendarId: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        startTime: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        endTime: string;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
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
    /** List users in a Feishu department visible to the app. */
    "feishu_app_bot.list_department_users": {
      input: {
        /**
         * The department identifier.
         * @minLength 1
         */
        departmentId: string;
        /** The identifier type used by departmentId. */
        departmentIdType?: "department_id" | "open_department_id";
        /** The identifier type used by userId. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The number of users per page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The page token returned by the previous request. */
        pageToken?: string;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /** The token for fetching the next page. */
        pageToken: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List child departments below a Feishu department visible to the app. */
    "feishu_app_bot.list_departments": {
      input: {
        /**
         * The parent department identifier. Use 0 for the root department.
         * @minLength 1
         */
        departmentId?: string;
        /** The identifier type used by departmentId. */
        departmentIdType?: "department_id" | "open_department_id";
        /** The identifier type used by userId. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** Whether to recursively include all descendant departments. */
        fetchChild?: boolean;
        /**
         * The number of departments per page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The page token returned by the previous request. */
        pageToken?: string;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /** The token for fetching the next page. */
        pageToken: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List historical versions of a Feishu docx document. */
    "feishu_app_bot.list_document_history": {
      input: {
        /**
         * The document ID from a Feishu docx URL, without the URL path or query.
         * @minLength 1
         */
        documentId: string;
        /**
         * The number of history entries to return, from 1 to 20.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The document history entries. */
        entries: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The pagination token for the next page. */
        pageToken?: string;
      };
    };
    /** List comments on a Feishu Drive document or supported file. */
    "feishu_app_bot.list_drive_comments": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The resource type used by the comments API. */
        fileType: "file" | "doc" | "docx" | "sheet" | "bitable" | "slides";
        /** Filter comments by solved state; omit to include both states. */
        solved?: boolean;
        /** Filter full-document versus local comments; omit to include both scopes. */
        whole?: boolean;
        /** Include reactions on each comment. */
        needReaction?: boolean;
        /** Include docx comment relation metadata. */
        needRelation?: boolean;
        /**
         * The number of comments to return, up to 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The items on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
    };
    /** List files, folders, and online documents inside a Feishu Drive folder. */
    "feishu_app_bot.list_drive_files": {
      input: {
        /**
         * The folder token to list; omit it to list the caller's root folder.
         * @minLength 1
         */
        folderToken?: string;
        /**
         * The number of items to return, up to 200.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
        /** The field used to order the folder contents. */
        orderBy?: "EditedTime" | "CreatedTime";
        /** The result ordering direction. */
        direction?: "ASC" | "DESC";
      };
      output: {
        /** The items on this page. */
        items: Array<{
          /** The resource token. */
          token?: string;
          /** The resource name. */
          name?: string;
          /** The resource type. */
          type?: string;
          /** The resource URL. */
          url?: string;
          /** The parent folder token. */
          parent_token?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
    };
    /** List collaborators and permission roles on a Feishu Drive resource. */
    "feishu_app_bot.list_drive_permissions": {
      input: {
        /**
         * The Feishu Drive resource token.
         * @minLength 1
         */
        token: string;
        /** The resource type used by the Drive permission API. */
        resourceType: "doc" | "docx" | "sheet" | "bitable" | "file" | "folder" | "wiki" | "mindnote" | "slides";
        /** A comma-separated projection of permission member fields. */
        fields?: string;
        /** The Wiki permission scope. */
        permType?: "container" | "single_page";
      };
      output: {
        /** The permission members. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** List available preview artifacts and generation states for a Feishu Drive file. */
    "feishu_app_bot.list_drive_previews": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version?: string;
      };
      output: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The resolved file version. */
        version?: string;
        /** The available preview candidates. */
        candidates: Array<{
          /** The normalized preview type. */
          type: string;
          /** The Feishu preview type code. */
          typeCode: string;
          /** The normalized preview generation status. */
          status: string;
          /** The Feishu preview status code. */
          statusCode: string;
          /** Whether the preview can currently be downloaded. */
          downloadable: boolean;
          /** Why the preview cannot currently be downloaded. */
          reason?: string;
          /** The raw preview candidate. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List one page of tagged version history for a Feishu Drive file. */
    "feishu_app_bot.list_drive_versions": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The maximum number of versions to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The numeric edit-time cursor returned as nextCursor by the previous page.
         * @minLength 1
         * @maxLength 19
         */
        cursor?: string;
      };
      output: {
        /** The normalized versions on this page. */
        versions: Array<{
          /**
           * The numeric Drive file version string.
           * @minLength 1
           * @maxLength 19
           */
          version: string;
          /** The file name stored for this version. */
          name?: string;
          /** The version edit timestamp. */
          editedAt?: string;
          /** The user ID that created this version. */
          editedBy?: string;
          /**
           * The version size in bytes.
           * @minimum 0
           */
          sizeBytes?: number;
          /** The normalized version action such as `upload`, `rename`, `delete_version`, or `revert`. */
          actionType?: string;
          /** Whether this version is deleted. */
          isDeleted?: boolean;
          /** The version tag returned by Feishu. */
          tag?: number;
          /** The raw version object returned by Feishu. */
          raw: Record<string, unknown>;
        }>;
        /** Whether another history page is available. */
        hasMore: boolean;
        /** The cursor for the next page. */
        nextCursor?: string;
      };
    };
    /** List message IDs in a Feishu mailbox folder or label. */
    "feishu_app_bot.list_mail_messages": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The folder ID. Defaults to `INBOX`.
         * @minLength 1
         */
        folderId?: string;
        /**
         * A label ID. It cannot be combined with folderId.
         * @minLength 1
         */
        labelId?: string;
        /** Whether to return unread messages only. */
        onlyUnread?: boolean;
        /**
         * The maximum number of results on this page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The page token returned by the previous request.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The mail objects returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
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
    /** List the objectives aligned from or to a Feishu OKR objective. */
    "feishu_app_bot.list_okr_alignments": {
      input: {
        /**
         * The objective ID whose alignments should be listed.
         * @minLength 1
         */
        objectiveId: string;
        /** The direction of the alignment relationship. */
        alignType?: "aligning" | "aligned";
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** The identifier type used for departments. */
        departmentIdType?: "department_id" | "open_department_id";
        /**
         * The maximum number of results on this page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The page token returned by the previous request.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The alignment relationships returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** List enabled and disabled Feishu OKR categories configured by the tenant. */
    "feishu_app_bot.list_okr_categories": {
      input: {
        /** The type of owner whose categories should be listed. */
        ownerType?: "user" | "department";
        /**
         * The maximum number of results on this page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The page token returned by the previous request.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The OKR categories returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** List Feishu OKR cycles visible to a user. */
    "feishu_app_bot.list_okr_cycles": {
      input: {
        /**
         * The user whose cycles should be listed.
         * @minLength 1
         */
        userId?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The maximum number of results on this page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The page token returned by the previous request.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The OKR objects returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** List progress records for an objective or key result. */
    "feishu_app_bot.list_okr_progress": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The objective or key-result ID.
         * @minLength 1
         */
        targetId: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** The identifier type used for departments. */
        departmentIdType?: "department_id" | "open_department_id";
        /**
         * The maximum number of results on this page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The page token returned by the previous request.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The OKR objects returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
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
    /** List charts on a sub-sheet. */
    "feishu_app_bot.list_sheet_charts": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An optional object ID filter.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List conditional formats on a sub-sheet. */
    "feishu_app_bot.list_sheet_conditional_formats": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An optional object ID filter.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List filter views on a sub-sheet. */
    "feishu_app_bot.list_sheet_filter_views": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An optional object ID filter.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List filters on a sub-sheet. */
    "feishu_app_bot.list_sheet_filters": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List float images on a sub-sheet. */
    "feishu_app_bot.list_sheet_float_images": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An optional object ID filter.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List spreadsheet edit history versions. */
    "feishu_app_bot.list_sheet_history": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The maximum version for the next page.
         * @exclusiveMinimum 0
         */
        endVersion?: number;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List pivot tables on a sub-sheet. */
    "feishu_app_bot.list_sheet_pivot_tables": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An optional object ID filter.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List sparklines on a sub-sheet. */
    "feishu_app_bot.list_sheet_sparklines": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An optional object ID filter.
         * @minLength 1
         */
        objectId?: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** List historical versions of a Feishu Slides presentation. */
    "feishu_app_bot.list_slides_history": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The number of entries to return, from 1 to 20.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The previous page's pagination token.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The history entries. */
        entries: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The pagination token for the next page. */
        pageToken?: string;
      };
    };
    /** List messages inside a Feishu message thread. */
    "feishu_app_bot.list_thread_messages": {
      input: {
        /**
         * The Feishu thread identifier.
         * @minLength 1
         */
        threadId: string;
        /** The inclusive start timestamp in seconds. */
        startTime?: string;
        /** The exclusive end timestamp in seconds. */
        endTime?: string;
        /**
         * The number of messages per page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The page token returned by the previous request. */
        pageToken?: string;
        /** The message sort order. */
        sortType?: "ByCreateTimeAsc" | "ByCreateTimeDesc";
      };
      output: {
        /** The messages returned on this page. */
        items: Array<Record<string, unknown>>;
        /** The token for fetching the next page. */
        pageToken: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List participant and lifecycle events from one Feishu video meeting. */
    "feishu_app_bot.list_vc_meeting_events": {
      input: {
        /**
         * The Feishu video meeting ID.
         * @minLength 1
         */
        meetingId: string;
        /**
         * The inclusive Unix timestamp in seconds.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The exclusive Unix timestamp in seconds.
         * @minLength 1
         */
        endTime?: string;
        /**
         * The maximum number of events on this page.
         * @minimum 20
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The page token returned by the previous request.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The meeting events. */
        events: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
        /** The raw video-conference object returned by Feishu. */
        meeting: Record<string, unknown>;
      };
    };
    /** List the raw nodes in a Feishu whiteboard, including Mermaid or PlantUML source metadata. */
    "feishu_app_bot.list_whiteboard_nodes": {
      input: {
        /**
         * The Feishu whiteboard token.
         * @minLength 1
         */
        whiteboardToken: string;
      };
      output: {
        /** The nodes in the whiteboard. */
        nodes: Array<Record<string, unknown>>;
      };
    };
    /** List members of a Feishu Wiki space. */
    "feishu_app_bot.list_wiki_members": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The maximum number of results on this page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** List nodes in a Feishu Wiki space or below one parent node. */
    "feishu_app_bot.list_wiki_nodes": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The parent node_token used to restrict results.
         * @minLength 1
         */
        parentNodeToken?: string;
        /**
         * The maximum number of results on this page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** List Feishu Wiki spaces accessible to the caller. */
    "feishu_app_bot.list_wiki_spaces": {
      input: {
        /**
         * The maximum number of results on this page.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** Add or remove assignees on a Feishu task. */
    "feishu_app_bot.manage_task_assignees": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** Whether to add or remove assignees. */
        operation: "add" | "remove";
        /**
         * User open_ids or application IDs to change.
         * @minItems 1
         */
        assigneeIds: Array<string>;
        /**
         * An idempotency token for an add operation.
         * @minLength 1
         */
        clientToken?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Add or remove followers on a Feishu task. */
    "feishu_app_bot.manage_task_followers": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** Whether to add or remove followers. */
        operation: "add" | "remove";
        /**
         * User open_ids or application IDs to change.
         * @minItems 1
         */
        followerIds: Array<string>;
        /**
         * An idempotency token for an add operation.
         * @minLength 1
         */
        clientToken?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** List, add, or remove reminders on a Feishu task. */
    "feishu_app_bot.manage_task_reminders": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** The reminder operation. */
        operation: "list" | "add" | "remove";
        /** Reminder offsets in minutes relative to the task due time. */
        offsetsMinutes?: Array<number>;
        /** Reminder IDs to remove. */
        reminderIds?: Array<string>;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
        /** The current task reminders. */
        reminders: Array<Record<string, unknown>>;
      };
    };
    /** Add or remove members on a Feishu tasklist. */
    "feishu_app_bot.manage_tasklist_members": {
      input: {
        /**
         * The Feishu tasklist GUID.
         * @minLength 1
         */
        tasklistGuid: string;
        /** Whether to add or remove members. */
        operation: "add" | "remove";
        /**
         * Members to add or remove.
         * @minItems 1
         */
        members: Array<{
          /**
           * A user open_id or application ID.
           * @minLength 1
           */
          id: string;
          /** The member type. */
          type: "user" | "app";
          /** The tasklist permission granted to the member. */
          role: "editor" | "viewer";
        }>;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu tasklist object. */
        tasklist: Record<string, unknown>;
      };
    };
    /** Merge cells in a range. */
    "feishu_app_bot.merge_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        range: string;
        /** How cells are merged. */
        mergeType?: "all" | "rows" | "columns";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Move and order a Base resource block. */
    "feishu_app_bot.move_base_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
        /**
         * The destination folder ID, or null for root.
         * @minLength 1
         */
        parentId?: string | null;
        /**
         * Place the block before this sibling block.
         * @minLength 1
         */
        beforeId?: string;
        /**
         * Place the block after this sibling block.
         * @minLength 1
         */
        afterId?: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Move a Feishu Drive file or folder and return a task ID when Feishu processes the move asynchronously. */
    "feishu_app_bot.move_drive_item": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The Feishu Drive resource type. */
        type: "file" | "folder" | "doc" | "docx" | "sheet" | "bitable" | "mindnote" | "slides" | "shortcut";
        /**
         * The destination folder token.
         * @minLength 1
         */
        folderToken: string;
      };
      output: {
        /** The affected Drive resource token. */
        fileToken: string;
        /** The affected Drive resource type. */
        type: string;
        /** The destination folder token for move operations. */
        folderToken?: string;
        /** The asynchronous task ID returned by Feishu. */
        taskId?: string;
        /** Whether the deletion completed synchronously. */
        deleted?: boolean;
        [key: string]: unknown;
      };
    };
    /** Move a contiguous row or column range to a new position. */
    "feishu_app_bot.move_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId: string;
        /**
         * A row range such as 3:7 or column range such as C:F.
         * @minLength 1
         */
        sourceRange: string;
        /**
         * The destination row number or column letter.
         * @minLength 1
         */
        target: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Move a cell range. */
    "feishu_app_bot.move_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        sourceRange: string;
        /**
         * The destination A1 range.
         * @minLength 1
         */
        targetRange: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        targetSheetId?: string;
        /** What to copy. */
        pasteType?: "all" | "values" | "formulas" | "formats";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Move a Feishu Wiki node to another space or parent node. */
    "feishu_app_bot.move_wiki_node": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The Wiki node_token.
         * @minLength 1
         */
        nodeToken: string;
        /**
         * The destination Wiki space ID.
         * @minLength 1
         */
        targetSpaceId: string;
        /**
         * The destination parent node_token.
         * @minLength 1
         */
        targetParentToken?: string;
      };
      output: {
        /** A Feishu Wiki object. */
        item: Record<string, unknown>;
      };
    };
    /** Overwrite an existing Feishu Drive Markdown file with a complete JSON Markdown string. */
    "feishu_app_bot.overwrite_markdown_file": {
      input: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The complete Markdown content.
         * @minLength 1
         */
        markdown: string;
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName?: string;
      };
      output: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        version?: string;
        /**
         * The UTF-8 content size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
        /**
         * The Feishu URL for the Markdown file.
         * @format uri
         */
        url?: string;
      };
    };
    /** Fetch a Markdown file, replace literal text or a JavaScript regular expression locally, and overwrite only when matches exist. */
    "feishu_app_bot.patch_markdown_file": {
      input: {
        /**
         * The Feishu Drive file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The non-empty literal text or regular expression to match.
         * @minLength 1
         */
        pattern: string;
        /** The replacement Markdown string; it may be empty. */
        replacement: string;
        /** Whether pattern is a JavaScript regular expression. */
        regex?: boolean;
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName?: string;
      };
      output: {
        /** Whether the file was overwritten. */
        updated: boolean;
        /** The replacement mode. */
        mode: "literal" | "regex";
        /**
         * The number of matches replaced.
         * @minimum 0
         */
        matchCount: number;
        /**
         * The Markdown file name including its `.md` suffix.
         * @minLength 4
         */
        fileName: string;
        /**
         * The numeric Drive file version.
         * @minLength 1
         */
        version?: string;
        /**
         * The UTF-8 size before replacement.
         * @minimum 0
         */
        sizeBytesBefore: number;
        /**
         * The UTF-8 size after replacement.
         * @minimum 0
         */
        sizeBytesAfter: number;
      };
    };
    /** Update content, notes, score, or deadline on an objective or key result. */
    "feishu_app_bot.patch_okr": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The objective or key-result ID.
         * @minLength 1
         */
        targetId: string;
        /**
         * Replacement target text.
         * @minLength 1
         */
        text?: string;
        /** User open_ids mentioned after the text. */
        mentions?: Array<string>;
        /** Replacement notes. */
        notes?: string;
        /** The new OKR score. */
        score?: number;
        /**
         * The new deadline accepted by Feishu.
         * @minLength 1
         */
        deadline?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The patched target level. */
        targetType: string;
        /** The patched target ID. */
        targetId: string;
        /** The fields sent to Feishu. */
        patchedFields: Array<string>;
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
    /** Download the source-file preview of Feishu document media into connector transit storage. */
    "feishu_app_bot.preview_docs_media": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        token: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The downloaded file name. */
        name: string;
        /** The downloaded file MIME type. */
        mimeType: string;
        /**
         * The temporary transit URL for downloading the file.
         * @format uri
         */
        transitUrl: string;
        /**
         * The downloaded file size in bytes.
         * @minimum 0
         */
        sizeBytes?: number;
      };
    };
    /** Write a DataFrame-friendly typed table while preserving numbers, booleans, and real dates. */
    "feishu_app_bot.put_typed_table": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /** The table to write into a sub-sheet with the same name. */
        table: {
          /**
           * The sub-sheet display name.
           * @minLength 1
           */
          name: string;
          /** The top-left write cell. Defaults to A1. */
          startCell?: string;
          /**
           * Column names in display order.
           * @minItems 1
           * @maxItems 200
           */
          columns: Array<string>;
          /** Rows whose values align with columns. */
          data: Array<Array<unknown>>;
          /** Pandas-style dtypes keyed by column name. */
          dtypes: Record<string, string>;
          /** Optional Sheets number formats keyed by column name. */
          formats?: Record<string, string>;
          /** Whether to write the column names as a header row. */
          header?: boolean;
          /** Whether existing cells may be overwritten. */
          allowOverwrite?: boolean;
        };
      };
      output: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName: string;
        /**
         * An A1 range without a sheet prefix, for example `A1:D20`.
         * @minLength 1
         */
        range: string;
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Run the Base data-query DSL for server-side grouping, aggregation, filtering, sorting, and Top N analysis. */
    "feishu_app_bot.query_base_data": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /** The Base data-query JSON DSL for server-side grouping, aggregation, filtering, and sorting. */
        dsl: Record<string, unknown>;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Query a Feishu user's free/busy periods and RSVP status. */
    "feishu_app_bot.query_calendar_freebusy": {
      input: {
        /**
         * The user identifier to query.
         * @minLength 1
         */
        userId: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        startTime: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        endTime: string;
        /** Whether to include RSVP status. */
        includeRsvpStatus?: boolean;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
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
    /** Request asynchronous recall of one delivered Feishu mail message within its recall window. */
    "feishu_app_bot.recall_sent_mail": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The Feishu mail message ID.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /**
         * The Feishu mail message ID.
         * @minLength 1
         */
        messageId: string;
        /** Whether the message is available for recall or unavailable. */
        recallStatus: string | null;
        /** Why the message cannot be recalled, when unavailable. */
        recallRestrictionReason: string | null;
        /** A Feishu mail object. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate a Base attachment field and remove selected file tokens from one record cell. */
    "feishu_app_bot.remove_base_attachments": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID.
         * @minLength 1
         */
        recordId: string;
        /**
         * The attachment field ID or name.
         * @minLength 1
         */
        fieldId: string;
        /**
         * The attachment file tokens to remove.
         * @minItems 1
         * @maxItems 50
         */
        fileTokens: Array<string>;
      };
      output: {
        /** The removed attachment file tokens. */
        removedFileTokens: Array<string>;
        /** The raw Base remove response. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove users or bots from a Feishu chat. */
    "feishu_app_bot.remove_chat_members": {
      input: {
        /**
         * The Feishu chat identifier.
         * @minLength 1
         */
        chatId: string;
        /** The member identifier type. */
        memberIdType: "open_id" | "union_id" | "user_id" | "app_id";
        /**
         * The user or bot identifiers to change.
         * @minItems 1
         */
        memberIds: Array<string>;
      };
      output: {
        /** The raw Feishu data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove a collaborator permission from a Feishu Drive resource. */
    "feishu_app_bot.remove_drive_permission": {
      input: {
        /**
         * The Feishu Drive resource token.
         * @minLength 1
         */
        token: string;
        /** The resource type used by the Drive permission API. */
        resourceType: "doc" | "docx" | "sheet" | "bitable" | "file" | "folder" | "wiki" | "mindnote" | "slides";
        /**
         * The collaborator identifier.
         * @minLength 1
         */
        memberId: string;
        /** How Feishu should interpret the member ID. */
        memberType: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "groupid" | "appid" | "wikispaceid";
        /** The Wiki permission scope. */
        permType?: "container" | "single_page";
      };
      output: {
        /** Whether the requested resource was deleted. */
        deleted: boolean;
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
    /** Remove a member from a Feishu Wiki space. */
    "feishu_app_bot.remove_wiki_member": {
      input: {
        /**
         * The Feishu Wiki space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The member identifier.
         * @minLength 1
         */
        memberId: string;
        /** The Wiki member identifier type. */
        memberType: "email" | "openid" | "userid" | "unionid" | "openchat" | "opendepartmentid" | "useridlist" | "groupid" | "departmentid" | "appid";
        /** The Wiki space member role. */
        memberRole: "admin" | "member";
      };
      output: {
        /** Whether the member was removed. */
        removed: boolean;
        /** The removed member identifier. */
        memberId: string;
      };
    };
    /** Rename a Base resource block. */
    "feishu_app_bot.rename_base_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
        /**
         * The new resource name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Rename a Base view. */
    "feishu_app_bot.rename_base_view": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /**
         * The new view name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Render one SML 2.0 slide XML fragment and store the decoded screenshot in connector transit storage. */
    "feishu_app_bot.render_slide_screenshot": {
      input: {
        /**
         * The complete SML 2.0 `<slide>` XML content.
         * @minLength 1
         */
        content: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** One decoded Slides screenshot stored in transit storage. */
        screenshot: {
          /** The stable slide ID. */
          slideId?: string;
          /**
           * The one-based slide number.
           * @exclusiveMinimum 0
           */
          slideNumber?: number;
          /** The screenshot image format. */
          format: "png" | "jpeg";
          /** The generated image name. */
          name: string;
          /** The screenshot MIME type. */
          mimeType: string;
          /**
           * The temporary transit URL for downloading the screenshot.
           * @format uri
           */
          transitUrl: string;
          /**
           * The decoded screenshot size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
      };
    };
    /** Reopen a completed Feishu task. */
    "feishu_app_bot.reopen_task": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Replace the objective or key-result order with an explicit ID sequence. */
    "feishu_app_bot.reorder_okrs": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The cycle ID or objective ID containing the targets.
         * @minLength 1
         */
        parentId: string;
        /**
         * All target IDs in the desired order.
         * @minItems 1
         */
        orderedIds: Array<string>;
      };
      output: {
        /** The reordered target level. */
        targetType: string;
        /** The applied target order. */
        orderedIds: Array<string>;
      };
    };
    /** Find and replace matching text in a sub-sheet. */
    "feishu_app_bot.replace_cells": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The text or regular expression to find.
         * @minLength 1
         */
        searchTerm: string;
        /** The replacement text; use an empty string to delete matches. */
        replacement: string;
        /** An optional A1 range to restrict replacement. */
        range?: string;
        /** Controls how cell text is matched. */
        options?: {
          /** Whether matching is case-sensitive. */
          matchCase?: boolean;
          /** Whether the entire cell must match. */
          matchEntireCell?: boolean;
          /** Whether the search term is a regular expression. */
          useRegex?: boolean;
          /** Whether formula text is included in matching. */
          matchFormulas?: boolean;
        };
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Replace or insert structural elements on one Slides page, with SML boilerplate added for common shape replacements. */
    "feishu_app_bot.replace_slide_elements": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The stable Slides page ID.
         * @minLength 1
         */
        slideId: string;
        /**
         * Structural replacement and insertion operations.
         * @minItems 1
         * @maxItems 200
         */
        parts: Array<{
          /** The structural edit action. */
          action: "block_replace";
          /**
           * The existing element ID.
           * @minLength 1
           */
          blockId: string;
          /**
           * The replacement SML element.
           * @minLength 1
           */
          replacement: string;
        } | {
          /** The structural edit action. */
          action: "block_insert";
          /**
           * The SML element or elements to insert.
           * @minLength 1
           */
          insertion: string;
          /**
           * Insert before this element ID; omit it to append.
           * @minLength 1
           */
          insertBeforeBlockId?: string;
        }>;
        /**
         * The base revision for optimistic locking; `-1` uses the latest revision.
         * @minimum -1
         */
        revisionId?: number;
        /**
         * An optional concurrent-edit transaction ID.
         * @minLength 1
         */
        transactionId?: string;
      };
      output: {
        /** The resolved presentation ID. */
        presentationId: string;
        /**
         * The stable Slides page ID.
         * @minLength 1
         */
        slideId: string;
        /**
         * The number of submitted edit parts.
         * @exclusiveMinimum 0
         */
        partsCount: number;
        /** The resulting presentation revision ID. */
        revisionId?: number;
        /** The index of a failed part, when reported. */
        failedPartIndex?: number;
        /** The reason a part failed, when reported. */
        failedReason?: string;
        [key: string]: unknown;
      };
    };
    /** Replace multiple Slides pages by creating each replacement before its old page and then deleting the old page. */
    "feishu_app_bot.replace_slides": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The page replacements to run sequentially.
         * @minItems 1
         */
        pages: Array<{
          /**
           * The stable Slides page ID.
           * @minLength 1
           */
          slideId: string;
          /**
           * A complete SML 2.0 `<slide>` XML element for one Slides page.
           * @minLength 1
           */
          content: string;
        }>;
        /**
         * The initial base revision; `-1` uses the latest revision.
         * @minimum -1
         */
        revisionId?: number;
      };
      output: {
        /** The resolved presentation ID. */
        presentationId: string;
        /** The old and new page IDs for every completed replacement. */
        results: Array<{
          /**
           * The stable Slides page ID.
           * @minLength 1
           */
          oldSlideId: string;
          /**
           * The stable Slides page ID.
           * @minLength 1
           */
          newSlideId: string;
        }>;
        /** The final presentation revision ID. */
        revisionId?: number;
      };
    };
    /** Accept, decline, or tentatively accept a Feishu calendar event invitation. */
    "feishu_app_bot.reply_calendar_event": {
      input: {
        /**
         * The Feishu calendar ID. Use `primary` for the caller's primary calendar.
         * @minLength 1
         */
        calendarId: string;
        /**
         * The Feishu calendar event ID.
         * @minLength 1
         */
        eventId: string;
        /** The RSVP response. */
        status: "accept" | "decline" | "tentative";
      };
      output: {
        /** The replied event ID. */
        eventId: string;
        /** The RSVP status sent to Feishu. */
        status: string;
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
    /** Resize rows or columns using pixels, standard size, or row auto-fit. */
    "feishu_app_bot.resize_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /** The dimension to resize. */
        dimension: "row" | "column";
        /**
         * A row range or column range.
         * @minLength 1
         */
        range: string;
        /** The resize mode. */
        type: "pixel" | "standard" | "auto";
        /**
         * The pixel size for pixel mode.
         * @exclusiveMinimum 0
         */
        pixels?: number;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Revert a Feishu docx document to a historical version and return the background task state. */
    "feishu_app_bot.revert_document": {
      input: {
        /**
         * The document ID from a Feishu docx URL, without the URL path or query.
         * @minLength 1
         */
        documentId: string;
        /**
         * The positive history version ID returned by `list_document_history`.
         * @minLength 1
         */
        historyVersionId: string;
        /**
         * How long Feishu should wait for the revert before returning, from 0 to 30000 milliseconds.
         * @minimum 0
         * @maximum 30000
         */
        waitTimeoutMs?: number;
      };
      output: {
        /** The task ID used to query the operation status. */
        taskId?: string;
        /** The current task status. */
        status?: string;
        /** The history version involved in the operation. */
        historyVersionId?: string;
        /** The recommended delay before checking status again. */
        pollAfterMs?: number;
        /** Block tokens that failed during a partially successful operation. */
        failedBlockTokens?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Revert a Feishu Drive file to a specific historical version. */
    "feishu_app_bot.revert_drive_version": {
      input: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version: string;
      };
      output: {
        /**
         * A Feishu Drive resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The numeric Drive file version string.
         * @minLength 1
         * @maxLength 19
         */
        version: string;
        /** Whether the historical version was restored. */
        reverted: true;
      };
    };
    /** Start an asynchronous revert to a spreadsheet history version. */
    "feishu_app_bot.revert_sheet_history": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The history version ID.
         * @minLength 1
         */
        historyVersionId: string;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Revert a Feishu Slides presentation to a historical version and return its task metadata. */
    "feishu_app_bot.revert_slides_history": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** Whether `presentationToken` is a Slides ID or a Wiki node token. */
        presentationType?: "slides" | "wiki";
        /**
         * The positive history version ID.
         * @minLength 1
         */
        historyVersionId: string;
      };
      output: {
        /** The background task ID. */
        taskId?: string;
        /** The current task status. */
        status?: string;
        /** The history version involved. */
        historyVersionId?: string;
        /** The pages that failed during a partial revert. */
        failedSlideIds?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Search the options of a single-select or multi-select field in a Feishu Base. */
    "feishu_app_bot.search_base_field_options": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base field ID or field name accepted by the API.
         * @minLength 1
         */
        fieldId: string;
        /** The optional keyword used to filter option labels. */
        keyword?: string;
        /**
         * The zero-based result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of options to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /**
         * The Base field ID or field name accepted by the API.
         * @minLength 1
         */
        fieldId: string;
        /** The normalized keyword used for this search. */
        keyword: string;
        /** The matching field options. */
        options: Array<Record<string, unknown>>;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The total matching option count reported or inferred.
         * @minimum 0
         */
        total: number;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** Search records by keyword within selected fields of a Feishu Base table. */
    "feishu_app_bot.search_base_records": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The non-empty keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * The field IDs or names to search within.
         * @minItems 1
         * @maxItems 20
         */
        searchFields: Array<string>;
        /**
         * The field IDs or names to return.
         * @maxItems 50
         */
        selectFields?: Array<string>;
        /**
         * The Base view ID or view name accepted by the API.
         * @minLength 1
         */
        viewId?: string;
        /** A Base record filter condition group. */
        filter?: Record<string, unknown>;
        /**
         * Sort conditions in priority order.
         * @maxItems 10
         */
        sort?: Array<{
          /** The field ID or name to sort by. */
          field: string;
          /** Whether to sort in descending order. */
          desc: boolean;
          [key: string]: unknown;
        }>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * The zero-based result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The resources returned on this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The zero-based offset used for this page.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The total result count reported or inferred for this page.
         * @minimum 0
         */
        total: number;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** Find cell coordinates matching text or a regular expression. */
    "feishu_app_bot.search_cells": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The text or regular expression to find.
         * @minLength 1
         */
        searchTerm: string;
        /** An optional A1 range to restrict the search. */
        range?: string;
        /** Controls how cell text is matched. */
        options?: {
          /** Whether matching is case-sensitive. */
          matchCase?: boolean;
          /** Whether the entire cell must match. */
          matchEntireCell?: boolean;
          /** Whether the search term is a regular expression. */
          useRegex?: boolean;
          /** Whether formula text is included in matching. */
          matchFormulas?: boolean;
        };
        /**
         * The zero-based match offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of matches to return.
         * @exclusiveMinimum 0
         */
        maxMatches?: number;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
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
    /** Search Feishu Drive documents, Wiki nodes, spreadsheets, Base apps, files, folders, and slides. */
    "feishu_app_bot.search_drive_items": {
      input: {
        /**
         * The search text; it may be empty when filters are provided.
         * @maxLength 30
         */
        query?: string;
        /** A Search v2 document filter. */
        docFilter?: Record<string, unknown>;
        /** A Search v2 Wiki filter. */
        wikiFilter?: Record<string, unknown>;
        /**
         * The number of results to return, from 1 to 20.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The matching resources. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching resources. */
        total?: number;
        /** Whether another page is available. */
        hasMore: boolean;
        /**
         * The pagination token returned by the previous page.
         * @minLength 1
         */
        pageToken?: string;
        /** An optional search notice returned by Feishu. */
        notice?: string;
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
    /** Send text, Markdown, image, file, audio, video, or raw Feishu content, uploading URL media before sending. */
    "feishu_app_bot.send_rich_message": {
      input: {
        /**
         * The recipient identifier.
         * @minLength 1
         */
        receiveId: string;
        /** The identifier type used by receiveId. */
        receiveIdType?: "chat_id" | "open_id" | "union_id" | "user_id" | "email";
        /** The high-level content kind to send. */
        contentKind: "text" | "markdown" | "image" | "file" | "audio" | "video" | "raw";
        /**
         * Plain text content.
         * @minLength 1
         */
        text?: string;
        /**
         * Markdown rendered in an interactive card.
         * @minLength 1
         */
        markdown?: string;
        /**
         * An existing Feishu image_key.
         * @minLength 1
         */
        imageKey?: string;
        /**
         * A public image URL to download and upload to Feishu.
         * @format uri
         */
        imageUrl?: string;
        /**
         * An existing Feishu file_key.
         * @minLength 1
         */
        fileKey?: string;
        /**
         * A public file URL to download and upload to Feishu.
         * @format uri
         */
        fileUrl?: string;
        /**
         * The file name presented in Feishu.
         * @minLength 1
         */
        fileName?: string;
        /** The Feishu upload file type. */
        fileType?: "opus" | "mp4" | "pdf" | "doc" | "xls" | "ppt" | "stream";
        /**
         * An existing image_key for the video cover.
         * @minLength 1
         */
        videoCoverKey?: string;
        /**
         * A public image URL used as the video cover.
         * @format uri
         */
        videoCoverUrl?: string;
        /**
         * The Feishu msg_type used by raw content.
         * @minLength 1
         */
        rawMsgType?: string;
        /** A raw Feishu content object or serialized JSON string. */
        rawContent?: string | Record<string, unknown>;
        /**
         * An idempotency key that prevents duplicate sends.
         * @minLength 1
         * @maxLength 50
         */
        idempotencyKey?: string;
      };
      output: {
        /** The created message identifier. */
        messageId?: string;
        /** The destination chat identifier. */
        chatId?: string;
        /** The message creation timestamp. */
        createTime?: string;
        /** The raw Feishu message data. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a text message or reaction through the app's in-meeting bot. */
    "feishu_app_bot.send_vc_meeting_message": {
      input: {
        /**
         * The Feishu video meeting ID.
         * @minLength 1
         */
        meetingId: string;
        /** The in-meeting message type. */
        messageType: "text" | "reaction";
        /**
         * The text or reaction emoji key.
         * @minLength 1
         * @maxLength 49152
         */
        content: string;
        /**
         * An optional idempotency key.
         * @minLength 1
         * @maxLength 128
         */
        uuid?: string;
      };
      output: {
        /** The raw video-conference object returned by Feishu. */
        message: Record<string, unknown>;
      };
    };
    /** Replace the card configuration of a Base view. */
    "feishu_app_bot.set_base_view_card": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /** The complete API configuration object. */
        config: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Replace the filter configuration of a Base view. */
    "feishu_app_bot.set_base_view_filter": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /** The complete API configuration object. */
        config: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Replace the grouping configuration of a Base view. */
    "feishu_app_bot.set_base_view_group": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /** The complete API configuration object. */
        config: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Replace the sorting configuration of a Base view. */
    "feishu_app_bot.set_base_view_sort": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /** The complete API configuration object. */
        config: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Replace the timeline configuration of a Base view. */
    "feishu_app_bot.set_base_view_timebar": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /** The complete API configuration object. */
        config: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Replace the visible field configuration of a Base view. */
    "feishu_app_bot.set_base_view_visible_fields": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base view ID.
         * @minLength 1
         */
        viewId: string;
        /** The complete API configuration object. */
        config: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Write values, formulas, styles, comments, or validation to an A1 range. */
    "feishu_app_bot.set_cells": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix, for example `A1:D20`.
         * @minLength 1
         */
        range: string;
        /**
         * A rectangular matrix of Sheet AI cell objects.
         * @minItems 1
         */
        cells: Array<Array<Record<string, unknown>>>;
        /** Whether non-empty target cells may be overwritten. */
        allowOverwrite?: boolean;
        /** A larger destination range that repeats the written block. */
        copyToRange?: string;
      };
      output: {
        /** The raw Sheets object returned by Feishu. */
        result: Record<string, unknown>;
      };
    };
    /** Fetch an image from a public URL, upload it to a Feishu spreadsheet, and embed it into one cell. */
    "feishu_app_bot.set_sheet_cell_image": {
      input: {
        /**
         * The Feishu spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The target sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The target sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A single-cell A1 range, such as `B3` or `B3:B3`.
         * @minLength 1
         */
        range: string;
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        imageUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
        /** Whether an existing cell value may be overwritten. */
        allowOverwrite?: boolean;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /** The target sub-sheet ID. */
        sheetId?: string;
        /** The target sub-sheet name. */
        sheetName?: string;
        /** The target single-cell range. */
        range: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName: string;
        /**
         * The source image width in pixels.
         * @exclusiveMinimum 0
         */
        width: number;
        /**
         * The source image height in pixels.
         * @exclusiveMinimum 0
         */
        height: number;
        /** The decoded set_cell_range result. */
        result: Record<string, unknown>;
      };
    };
    /** Set dropdown validation across every cell in a range. */
    "feishu_app_bot.set_sheet_dropdown": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        range: string;
        /**
         * The inline dropdown options.
         * @minItems 1
         */
        options?: Array<string>;
        /**
         * A sheet-prefixed source range for dynamic options.
         * @minLength 1
         */
        sourceRange?: string;
        /** Option highlight colors. */
        colors?: Array<string>;
        /** Whether multiple values are allowed. */
        multiple?: boolean;
        /** Whether option colors are highlighted. */
        highlight?: boolean;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Set or clear the ancestor of a Feishu task. */
    "feishu_app_bot.set_task_ancestor": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /**
         * The ancestor task GUID. Omit this field to make the task independent.
         * @minLength 1
         */
        ancestorGuid?: string;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /** The ancestor task GUID, or null when cleared. */
        ancestorGuid: string | null;
        /** The raw Feishu response data. */
        raw: Record<string, unknown>;
      };
    };
    /** Sort a cell range by one or more columns. */
    "feishu_app_bot.sort_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        range: string;
        /**
         * The ordered sort conditions.
         * @minItems 1
         */
        sortConditions: Array<Record<string, unknown>>;
        /** Whether the first row is a header. */
        hasHeader?: boolean;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Submit JSON field values to a shared Base form. */
    "feishu_app_bot.submit_base_form": {
      input: {
        /**
         * The form share token.
         * @minLength 1
         */
        shareToken: string;
        /** Form field values keyed by field title; attachment values must already contain uploaded tokens. */
        content: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Submit an asynchronous Feishu Drive document export and return a handle for status polling. */
    "feishu_app_bot.submit_drive_export": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        token: string;
        /** The Feishu source document type. */
        type: "doc" | "docx" | "sheet" | "bitable" | "slides";
        /** The requested export file format. */
        fileExtension: "docx" | "pdf" | "xlsx" | "csv" | "base" | "pptx";
        /**
         * The sheet or Base table ID required for a CSV export.
         * @minLength 1
         */
        subId?: string;
        /** Export only the Base schema when exporting a Base document as `base`. */
        onlySchema?: boolean;
      };
      output: {
        /** The Feishu export task ticket. */
        ticket: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        sourceToken: string;
        /** An opaque handle accepted by get_drive_export. */
        exportHandle: string;
      };
    };
    /** Fetch a source file, upload it as Feishu import media, and submit an asynchronous Drive import task. */
    "feishu_app_bot.submit_drive_import": {
      input: {
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName?: string;
        /** The source file extension without a leading dot. */
        fileExtension?: "docx" | "doc" | "txt" | "md" | "mark" | "markdown" | "html" | "xlsx" | "xls" | "csv" | "base" | "pptx";
        /** The target Feishu document type. */
        type: "docx" | "sheet" | "bitable" | "slides";
        /**
         * The target Drive folder token; omit it to import into Drive root.
         * @minLength 1
         */
        folderToken?: string;
        /**
         * The imported cloud document name without a required extension.
         * @minLength 1
         */
        name?: string;
        /**
         * An existing Base token to import data into; valid only when type is `bitable`.
         * @minLength 1
         */
        targetToken?: string;
      };
      output: {
        /** The Feishu import task ticket. */
        ticket: string;
        /**
         * A Feishu file token.
         * @minLength 1
         */
        uploadedFileToken: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName: string;
        /** The source file extension without a leading dot. */
        fileExtension: "docx" | "doc" | "txt" | "md" | "mark" | "markdown" | "html" | "xlsx" | "xls" | "csv" | "base" | "pptx";
        /** The target Feishu document type. */
        type: "docx" | "sheet" | "bitable" | "slides";
      };
    };
    /** Move a Wiki node out of its knowledge space into Drive and return an asynchronous task handle. */
    "feishu_app_bot.submit_wiki_move_to_drive": {
      input: {
        /**
         * The Wiki node_token.
         * @minLength 1
         */
        nodeToken: string;
        /**
         * The target Drive folder token. Omit it to move to the identity's Drive root.
         * @minLength 1
         */
        folderToken?: string;
      };
      output: {
        /** The Wiki asynchronous task ID. */
        taskId: string;
        /**
         * The Wiki node_token.
         * @minLength 1
         */
        nodeToken: string;
        /** The target Drive folder token, or null for root. */
        folderToken: string | null;
      };
    };
    /** Suggest available meeting times for Feishu users and chats. */
    "feishu_app_bot.suggest_calendar_times": {
      input: {
        /**
         * Acceptable ranges in which Feishu may suggest a meeting time.
         * @minItems 1
         */
        timeRanges: Array<{
          /**
           * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
           * @minLength 1
           */
          startTime: string;
          /**
           * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
           * @minLength 1
           */
          endTime: string;
        }>;
        /**
         * The desired meeting duration in minutes.
         * @exclusiveMinimum 0
         */
        durationMinutes: number;
        /** User open_ids attending the meeting. */
        attendeeUserIds?: Array<string>;
        /** Chat IDs whose members attend the meeting. */
        attendeeChatIds?: Array<string>;
      };
      output: {
        /** The items returned on this page. */
        items: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The token for the next page. */
        pageToken: string | null;
      };
    };
    /** Auto-paginate compact mailbox summaries through list or search APIs with a stable continuation token. */
    "feishu_app_bot.triage_mail_messages": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * Full-text terms searched across mail metadata and body.
         * @minLength 1
         * @maxLength 50
         */
        query?: string;
        /**
         * A folder ID for the list path.
         * @minLength 1
         */
        folderId?: string;
        /**
         * A label ID for the list path.
         * @minLength 1
         */
        labelId?: string;
        /**
         * A folder name for the search path.
         * @minLength 1
         */
        folder?: string;
        /**
         * A label name for the search path.
         * @minLength 1
         */
        label?: string;
        /**
         * Sender addresses to match.
         * @minItems 1
         */
        from?: Array<string>;
        /**
         * Recipient addresses to match.
         * @minItems 1
         */
        to?: Array<string>;
        /**
         * CC addresses to match.
         * @minItems 1
         */
        cc?: Array<string>;
        /**
         * BCC addresses to match.
         * @minItems 1
         */
        bcc?: Array<string>;
        /**
         * Subject text to match.
         * @minLength 1
         */
        subject?: string;
        /** Whether messages must be unread. */
        unread?: boolean;
        /** Whether messages must have attachments. */
        hasAttachment?: boolean;
        /**
         * The earliest creation time.
         * @format date-time
         */
        startTime?: string;
        /**
         * The latest creation time.
         * @format date-time
         */
        endTime?: string;
        /** Whether search results should be enriched with label IDs. */
        includeLabels?: boolean;
        /**
         * The maximum number of summaries to return.
         * @maximum 400
         * @exclusiveMinimum 0
         */
        maxResults?: number;
        /**
         * A `list:` or `search:` continuation token returned by this action.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The normalized mail summaries. */
        messages: Array<Record<string, unknown>>;
        /**
         * The mailbox email address. Use `me` for the authorized user's mailbox.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The number of returned summaries.
         * @minimum 0
         */
        count: number;
        /** The API path selected by the action. */
        source: "list" | "search";
        /** Whether more results remain. */
        hasMore: boolean;
        /** The prefixed continuation token. */
        pageToken: string | null;
        /** An optional Feishu search notice. */
        notice: string | null;
      };
    };
    /** Ungroup rows or columns in a sub-sheet. */
    "feishu_app_bot.ungroup_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A row range such as 3:7 or column range such as C:F.
         * @minLength 1
         */
        range: string;
        /** The initial group state. */
        groupState?: "expand" | "collapse";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Unhide rows or columns in a sub-sheet. */
    "feishu_app_bot.unhide_sheet_dimension": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * A row range such as 3:7 or column range such as C:F.
         * @minLength 1
         */
        range: string;
        /** The initial group state. */
        groupState?: "expand" | "collapse";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Unmerge cells in a range. */
    "feishu_app_bot.unmerge_sheet_range": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * An A1 range without a sheet prefix.
         * @minLength 1
         */
        range: string;
        /** How cells are merged. */
        mergeType?: "all" | "rows" | "columns";
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update the description, localized descriptions, or icon of a slash command selected by ID or name. */
    "feishu_app_bot.update_app_slash_command": {
      input: {
        /**
         * The command ID; mutually exclusive with command.
         * @minLength 1
         */
        commandId?: string;
        /**
         * The command name without the leading slash; mutually exclusive with commandId.
         * @minLength 1
         */
        command?: string;
        /**
         * The new default command description.
         * @minLength 1
         */
        description?: string;
        /** Localized descriptions keyed by Feishu language code, such as `zh_cn` or `en_us`. */
        descriptionI18n?: Record<string, string>;
        /**
         * The new Feishu icon key.
         * @minLength 1
         */
        iconKey?: string;
      };
      output: {
        /** Whether the command was created or updated. */
        action: "created" | "updated";
        /** A Feishu app slash command. */
        item: {
          /**
           * The slash command ID returned by Feishu.
           * @minLength 1
           */
          command_id?: string;
          /**
           * The slash command name without the leading slash.
           * @minLength 1
           */
          command?: string;
          /** The command description and localized values. */
          description?: Record<string, unknown>;
          /** The command icon configuration. */
          icon?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Base dashboard name or theme. */
    "feishu_app_bot.update_base_dashboard": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /**
         * The new dashboard name.
         * @minLength 1
         */
        name?: string;
        /** The new dashboard theme style. */
        themeStyle?: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Update a Base dashboard block name or data configuration. */
    "feishu_app_bot.update_base_dashboard_block": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base dashboard ID.
         * @minLength 1
         */
        dashboardId: string;
        /**
         * The resource or dashboard block ID.
         * @minLength 1
         */
        blockId: string;
        /**
         * The new block name.
         * @minLength 1
         */
        name?: string;
        /** The complete API configuration object. */
        dataConfig?: Record<string, unknown>;
        /** The user ID type used in the response or filters. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Update one field in a Feishu Base table. */
    "feishu_app_bot.update_base_field": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base field ID or field name accepted by the API.
         * @minLength 1
         */
        fieldId: string;
        /** A Base field definition using the official field JSON shape. */
        field: {
          /** The field name. */
          name?: string;
          /** The field type such as `text`, `number`, or `select`. */
          type?: string;
          /** The type-specific field configuration. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The raw Base object returned by Feishu. */
        field: Record<string, unknown>;
        /** Whether the resource was updated. */
        updated: true;
      };
    };
    /** Update the name or description of a Base form. */
    "feishu_app_bot.update_base_form": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The new form name.
         * @minLength 1
         */
        name?: string;
        /** The new form description. */
        description?: string;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Update up to ten Base form questions by question ID. */
    "feishu_app_bot.update_base_form_questions": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The form questions to create or update.
         * @minItems 1
         * @maxItems 10
         */
        questions: Array<Record<string, unknown>>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Update one record in a Feishu Base table. */
    "feishu_app_bot.update_base_record": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID, usually starting with `rec`.
         * @minLength 1
         */
        recordId: string;
        /** A map from Base field names or IDs to Feishu CellValue values. */
        fields: Record<string, unknown>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The raw Base object returned by Feishu. */
        record: Record<string, unknown>;
        /** Whether the resource was updated. */
        updated: true;
      };
    };
    /** Delta-merge changes into a Base role configuration. */
    "feishu_app_bot.update_base_role": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base role ID.
         * @minLength 1
         */
        roleId: string;
        /** The complete API configuration object. */
        changes: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Rename a table in a Feishu Base. */
    "feishu_app_bot.update_base_table": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The new table name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The raw Base object returned by Feishu. */
        table: Record<string, unknown>;
        /** Whether the resource was updated. */
        updated: true;
      };
    };
    /** Replace a Base workflow definition while preserving its enabled state. */
    "feishu_app_bot.update_base_workflow": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        baseToken: string;
        /**
         * The Base workflow ID.
         * @minLength 1
         */
        workflowId: string;
        /** The complete API configuration object. */
        workflow: Record<string, unknown>;
      };
      output: {
        /** The object returned by Feishu Base. */
        result: Record<string, unknown>;
        /** Whether Feishu accepted the operation. */
        success: boolean;
      };
    };
    /** Update Feishu calendar event fields and incrementally add or remove attendees. */
    "feishu_app_bot.update_calendar_event": {
      input: {
        /**
         * The Feishu calendar ID. Use `primary` for the caller's primary calendar.
         * @minLength 1
         */
        calendarId: string;
        /**
         * The Feishu calendar event ID.
         * @minLength 1
         */
        eventId: string;
        /**
         * The event title.
         * @minLength 1
         */
        summary?: string;
        /** The event description. */
        description?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        startTime?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in seconds, for example `2026-07-23T09:00:00+08:00`.
         * @minLength 1
         */
        endTime?: string;
        /** The IANA timezone used by the start and end times. */
        timezone?: string;
        /** Whether the event is an all-day event. */
        isAllDay?: boolean;
        /** The event visibility. */
        visibility?: "default" | "public" | "private";
        /** The permission granted to attendees. */
        attendeeAbility?: "none" | "can_see_others" | "can_invite_others" | "can_modify_event";
        /** How the event affects availability. */
        freeBusyStatus?: "busy" | "free";
        /** The event location object accepted by Feishu. */
        location?: Record<string, unknown>;
        /** The RFC 5545 recurrence rule, without the `RRULE:` prefix. */
        recurrence?: string;
        /** Event reminders. */
        reminders?: Array<{
          /**
           * The number of minutes before the event.
           * @minimum 0
           */
          minutes: number;
        }>;
        /** Attendees to add. */
        addAttendees?: Array<{
          /** The attendee type. */
          type: "user" | "chat" | "resource" | "third_party";
          /**
           * The attendee identifier: a user open_id, chat_id, room_id, or third-party email.
           * @minLength 1
           */
          id: string;
          /** The approval reason required by some meeting rooms. */
          approvalReason?: string;
        }>;
        /** User open_ids, chat_ids, or room IDs to remove. */
        removeAttendeeIds?: Array<string>;
        /** Whether Feishu should notify attendees. */
        notifyAttendees?: boolean;
      };
      output: {
        /** A Feishu calendar object. */
        item: Record<string, unknown>;
        /** The number of attendees added. */
        attendeesAdded: number;
        /** The number of attendees removed. */
        attendeesRemoved: number;
      };
    };
    /** Update a Feishu chat's profile and membership-related settings. */
    "feishu_app_bot.update_chat": {
      input: {
        /**
         * The chat identifier.
         * @minLength 1
         */
        chatId: string;
        /** The new chat name. */
        name?: string;
        /** The new chat description. */
        description?: string;
        /** The new owner identifier. */
        ownerId?: string;
        /** The user identifier type used by this request. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /** The new group discoverability type. */
        chatType?: "private" | "public";
        /** Whether the chat may contain external users. */
        external?: boolean;
      };
      output: {
        /** The raw Feishu data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Feishu document with a high-level text or block operation instead of manually orchestrating docx block APIs. */
    "feishu_app_bot.update_document": {
      input: {
        /**
         * The document ID from a Feishu docx URL, without the URL path or query.
         * @minLength 1
         */
        documentId: string;
        /** The document update operation. */
        command: "replace_text" | "delete_blocks" | "insert_after" | "copy_after" | "replace_block" | "move_after" | "overwrite" | "append";
        /** The document content format. */
        format?: "xml" | "markdown";
        /** The replacement, inserted, or appended document content. */
        content?: string;
        /** The text matched by `replace_text`. */
        pattern?: string;
        /**
         * The target block ID, or comma-separated block IDs for `delete_blocks`.
         * @minLength 1
         */
        blockId?: string;
        /**
         * The source block IDs used by copy or move operations.
         * @minItems 1
         */
        sourceBlockIds?: Array<string>;
        /**
         * The base document revision ID; `-1` means the latest revision.
         * @minimum -1
         */
        revisionId?: number;
        /** A reference map accompanying rich content in supported write operations. */
        referenceMap?: Record<string, unknown>;
      };
      output: {
        /** The returned document payload. */
        document: {
          /** The Feishu document ID. */
          document_id?: string;
          /** The current document revision ID. */
          revision_id?: number;
          /** The document title. */
          title?: string;
          /** The document content in the requested format. */
          content?: string;
          /** The Feishu URL for the document. */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload an image from a public URL and set it as a Feishu docx document cover. */
    "feishu_app_bot.update_document_cover": {
      input: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
        /** The horizontal cover offset ratio. */
        offsetRatioX?: number;
        /** The vertical cover offset ratio. */
        offsetRatioY?: number;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        documentId: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        fileToken: string;
        /** The cover payload applied to the document. */
        cover: Record<string, unknown>;
        /** Whether the cover was updated. */
        updated: true;
      };
    };
    /** Mark a Feishu Drive comment as solved or unresolved. */
    "feishu_app_bot.update_drive_comment": {
      input: {
        /**
         * The Feishu Drive file or document token.
         * @minLength 1
         */
        fileToken: string;
        /** The resource type used by the comments API. */
        fileType: "file" | "doc" | "docx" | "sheet" | "bitable" | "slides";
        /**
         * The Drive comment ID.
         * @minLength 1
         */
        commentId: string;
        /** Whether the comment should be marked as solved. */
        solved: boolean;
      };
      output: {
        /** The updated comment payload. */
        comment: Record<string, unknown>;
      };
    };
    /** Change a collaborator's permission role on a Feishu Drive resource. */
    "feishu_app_bot.update_drive_permission": {
      input: {
        /**
         * The Feishu Drive resource token.
         * @minLength 1
         */
        token: string;
        /** The resource type used by the Drive permission API. */
        resourceType: "doc" | "docx" | "sheet" | "bitable" | "file" | "folder" | "wiki" | "mindnote" | "slides";
        /**
         * The collaborator identifier.
         * @minLength 1
         */
        memberId: string;
        /** How Feishu should interpret the member ID. */
        memberType: "email" | "openid" | "unionid" | "openchat" | "opendepartmentid" | "groupid" | "appid" | "wikispaceid";
        /** The permission role granted to the member. */
        permission: "view" | "edit" | "full_access";
        /** Whether Feishu should notify the collaborator. */
        needNotification?: boolean;
      };
      output: {
        /** The updated permission member. */
        member: Record<string, unknown>;
      };
    };
    /** Fetch and fully replace a mail template after merging provided JSON fields; concurrent writes are last-write-wins. */
    "feishu_app_bot.update_mail_template": {
      input: {
        /**
         * The explicit user mailbox email address. App identity does not support `me`.
         * @minLength 1
         */
        mailboxId: string;
        /**
         * The decimal Feishu mail template ID.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        templateId: string;
        /**
         * The template name, limited to 100 Unicode characters.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** The default message subject. */
        subject?: string;
        /** The HTML or plain-text template body. */
        templateContent?: string;
        /** Whether Feishu should treat the template as plain text. */
        isPlainText?: boolean;
        /** Default primary recipients. */
        to?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          mailAddress: string;
          /** The optional recipient display name. */
          name?: string;
        }>;
        /** Default carbon-copy recipients. */
        cc?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          mailAddress: string;
          /** The optional recipient display name. */
          name?: string;
        }>;
        /** Default blind-carbon-copy recipients. */
        bcc?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          mailAddress: string;
          /** The optional recipient display name. */
          name?: string;
        }>;
        /** Existing Drive-backed attachments. Upload files separately before referencing their keys. */
        attachments?: Array<{
          /**
           * The Drive file key used as the attachment ID and body.
           * @minLength 1
           */
          fileKey: string;
          /**
           * The attachment file name.
           * @minLength 1
           */
          fileName: string;
          /**
           * The Content-ID referenced by inline HTML.
           * @minLength 1
           */
          cid?: string;
          /** Whether this is an inline attachment. */
          inline?: boolean;
          /** How Feishu delivers the attachment. */
          attachmentType?: "small" | "large";
        }>;
        /** Whether supplied attachments replace or append to existing attachments. */
        attachmentsMode?: "replace" | "append";
      };
      output: {
        /** A Feishu mail API object. */
        template: Record<string, unknown>;
        /** The concurrency warning for this full-replace endpoint. */
        warning: string;
      };
    };
    /** Find the first indicator for an objective or key result and update its current value. */
    "feishu_app_bot.update_okr_indicator": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The objective or key-result ID.
         * @minLength 1
         */
        targetId: string;
        /** The indicator's new current value. */
        currentValue: number;
      };
      output: {
        /** The updated indicator ID. */
        indicatorId: string;
        /** The applied indicator value. */
        currentValue: number;
      };
    };
    /** Update the content or rate of an OKR progress record. */
    "feishu_app_bot.update_okr_progress": {
      input: {
        /**
         * The progress record ID.
         * @minLength 1
         */
        progressId: string;
        /**
         * The progress update text.
         * @minLength 1
         */
        content?: string;
        /** The numeric completion percentage. */
        percent?: number;
        /** The progress status. */
        status?: "normal" | "overdue" | "done";
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu OKR object. */
        progress: Record<string, unknown>;
      };
    };
    /** Replace objective or key-result weights with explicit ID and weight pairs. */
    "feishu_app_bot.update_okr_weights": {
      input: {
        /** The OKR target level. */
        targetType: "objective" | "key_result";
        /**
         * The cycle ID or objective ID containing the targets.
         * @minLength 1
         */
        parentId: string;
        /**
         * Target weights.
         * @minItems 1
         */
        weights: Array<{
          /**
           * The objective or key-result ID.
           * @minLength 1
           */
          id: string;
          /** The target weight. */
          weight: number;
        }>;
      };
      output: {
        /** The updated target level. */
        targetType: string;
        /** The applied weights. */
        weights: Array<Record<string, unknown>>;
      };
    };
    /** Rename, move, hide, show, or recolor one sub-sheet. */
    "feishu_app_bot.update_sheet": {
      input: {
        /**
         * The spreadsheet token from a Feishu Sheets URL.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID returned by get_workbook.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet display name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The new sub-sheet title.
         * @minLength 1
         */
        title?: string;
        /**
         * The new zero-based position.
         * @minimum 0
         */
        index?: number;
        /** Whether the sub-sheet should be hidden. */
        hidden?: boolean;
        /** The tab color, or an empty string to clear it. */
        tabColor?: string;
      };
      output: {
        /** One result per applied update. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Update a chart object. */
    "feishu_app_bot.update_sheet_chart": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update a conditional format object. */
    "feishu_app_bot.update_sheet_conditional_format": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Apply one dropdown configuration to multiple sheet-prefixed ranges. */
    "feishu_app_bot.update_sheet_dropdowns": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * Sheet-prefixed destination ranges.
         * @minItems 1
         * @maxItems 100
         */
        ranges: Array<string>;
        /** The complete data_validation object. */
        validation: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update a filter object. */
    "feishu_app_bot.update_sheet_filter": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID; sheet filters use sheetId.
         * @minLength 1
         */
        objectId?: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update a filter view object. */
    "feishu_app_bot.update_sheet_filter_view": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update a float image object. */
    "feishu_app_bot.update_sheet_float_image": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update a pivot table object. */
    "feishu_app_bot.update_sheet_pivot_table": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update a sparkline object. */
    "feishu_app_bot.update_sheet_sparkline": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * The sub-sheet ID.
         * @minLength 1
         */
        sheetId?: string;
        /**
         * The sub-sheet name.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The object ID.
         * @minLength 1
         */
        objectId: string;
        /** The object properties accepted by Sheet AI. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
    /** Update the editable attributes of a Feishu task. */
    "feishu_app_bot.update_task": {
      input: {
        /**
         * The Feishu task GUID or task ID.
         * @minLength 1
         */
        taskGuid: string;
        /**
         * The new task summary.
         * @minLength 1
         */
        summary?: string;
        /** The new task description. */
        description?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in milliseconds. Date-only values create all-day times.
         * @minLength 1
         */
        start?: string;
        /**
         * An RFC 3339 date-time or Unix timestamp in milliseconds. Date-only values create all-day times.
         * @minLength 1
         */
        due?: string;
        /** Whether to clear the task start time. */
        clearStart?: boolean;
        /** Whether to clear the task due time. */
        clearDue?: boolean;
        /** The identifier type used for user fields. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** A Feishu task object. */
        task: Record<string, unknown>;
      };
    };
    /** Validate a Base attachment field, upload one or more files from public URLs, and append them to one record cell. */
    "feishu_app_bot.upload_base_attachments": {
      input: {
        /**
         * The Base app token.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID.
         * @minLength 1
         */
        recordId: string;
        /**
         * The attachment field ID or name.
         * @minLength 1
         */
        fieldId: string;
        /**
         * The files to upload and append.
         * @minItems 1
         * @maxItems 50
         */
        files: Array<{
          /**
           * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
           * @format uri
           */
          fileUrl: string;
          /**
           * The file name including its extension.
           * @minLength 1
           */
          fileName?: string;
        }>;
      };
      output: {
        /** The uploaded attachment metadata. */
        attachments: Array<{
          /**
           * A Feishu file token.
           * @minLength 1
           */
          fileToken: string;
          /**
           * The file name including its extension.
           * @minLength 1
           */
          name: string;
          /** The attachment MIME type. */
          mimeType: string;
          /**
           * The attachment size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        }>;
        /** The raw Base append response. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload an image or attachment from a public URL to a Feishu document block, using multipart upload above 20 MB. */
    "feishu_app_bot.upload_docs_media": {
      input: {
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
        /** The Feishu media upload parent type. */
        parentType: "docx_image" | "docx_file" | "whiteboard" | "mindnote_image";
        /**
         * The target block, whiteboard, or mindnote token.
         * @minLength 1
         */
        parentNode: string;
        /**
         * The document ID used as the Drive route token.
         * @minLength 1
         */
        documentId?: string;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName: string;
        /**
         * The uploaded file size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
      };
    };
    /** Upload a file from a public URL to Feishu Drive, automatically using the three-step multipart protocol above 20 MB. */
    "feishu_app_bot.upload_drive_file": {
      input: {
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The destination Drive folder token; omit both destination tokens for Drive root.
         * @minLength 1
         */
        folderToken?: string;
        /**
         * The destination Wiki node token.
         * @minLength 1
         */
        wikiToken?: string;
        /**
         * An existing Drive file token to overwrite in place.
         * @minLength 1
         */
        existingFileToken?: string;
      };
      output: {
        /**
         * A Feishu file token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName: string;
        /**
         * The uploaded file size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
        /** The uploaded file version returned by Feishu. */
        version?: string;
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
    /** Upload an image from a public URL for use in Feishu OKR progress rich text. */
    "feishu_app_bot.upload_okr_image": {
      input: {
        /**
         * The positive int64 objective or key-result ID.
         * @minLength 1
         */
        targetId: string;
        /** The OKR progress target type. */
        targetType: "objective" | "key_result";
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The uploaded image URL returned by Feishu.
         * @format uri
         */
        url?: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName: string;
        /**
         * The uploaded image size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
      };
    };
    /** Upload an image of at most 20 MB to a Slides presentation for use as an XML `<img>` file token. */
    "feishu_app_bot.upload_slides_media": {
      input: {
        /**
         * The Slides presentation ID or Wiki node token.
         * @minLength 1
         */
        presentationToken: string;
        /** How to interpret the presentation token. */
        presentationType?: "slides" | "wiki";
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        presentationId: string;
        /**
         * A Feishu resource token.
         * @minLength 1
         */
        fileToken: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName: string;
        /**
         * The uploaded image size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
      };
    };
    /** Upload a file from a public URL as an attachment to a Feishu Task resource. */
    "feishu_app_bot.upload_task_attachment": {
      input: {
        /**
         * The Task GUID.
         * @minLength 1
         */
        resourceId: string;
        /**
         * The owning resource type; defaults to `task` and may be `task_delivery`.
         * @minLength 1
         */
        resourceType?: string;
        /** The user identifier type used by the API. */
        userIdType?: "open_id" | "union_id" | "user_id";
        /**
         * A public HTTP or HTTPS URL whose file bytes connector should fetch and upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The source or output file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The attachment object returned by Feishu. */
        attachment: Record<string, unknown>;
      };
    };
    /** Create a Base record when recordId is omitted, or update that record when recordId is provided. */
    "feishu_app_bot.upsert_base_record": {
      input: {
        /**
         * The Base app token from a Feishu Base URL.
         * @minLength 1
         */
        appToken: string;
        /**
         * The Base table ID, usually starting with `tbl`.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Base record ID, usually starting with `rec`.
         * @minLength 1
         */
        recordId?: string;
        /** A map from Base field names or IDs to Feishu CellValue values. */
        fields: Record<string, unknown>;
        /** The user identifier type used in record values. */
        userIdType?: "open_id" | "union_id" | "user_id";
      };
      output: {
        /** The raw Base object returned by Feishu. */
        record: Record<string, unknown>;
        /** The operation performed. */
        operation: "created" | "updated";
      };
    };
    /** Scan formulas for errors across selected sheets or ranges. */
    "feishu_app_bot.verify_sheet_formulas": {
      input: {
        /**
         * The spreadsheet token.
         * @minLength 1
         */
        spreadsheetToken: string;
        /**
         * Sub-sheet IDs to scan.
         * @minItems 1
         */
        sheetIds?: Array<string>;
        /**
         * Sub-sheet names to scan.
         * @minItems 1
         */
        sheetNames?: Array<string>;
        /**
         * A1 ranges to scan.
         * @minItems 1
         */
        ranges?: Array<string>;
        /**
         * The maximum locations reported per error.
         * @exclusiveMinimum 0
         */
        maxLocations?: number;
      };
      output: {
        /** The decoded Sheet AI result. */
        result: Record<string, unknown>;
      };
    };
  }
}
