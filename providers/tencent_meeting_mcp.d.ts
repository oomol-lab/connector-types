import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a recording-access request only after prepare has displayed the preview and the user has explicitly confirmed. Use the same meeting_record_id; refresh an expired preview first. */
    "tencent_meeting_mcp.apply_record_permission_commit": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id?: string;
        /** Meeting recording ID returned by get_records_list. Preserve the ID as a string. */
        meeting_record_id: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Preview a recording-access request. Show the meeting, owner, applicant, and requested permission to the user before submitting. */
    "tencent_meeting_mcp.apply_record_permission_prepare": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id?: string;
        /** Meeting recording ID returned by get_records_list. Preserve the ID as a string. */
        meeting_record_id: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Call a tool discovered by list_tools using its current argument schema. This can modify or delete business data. Confirm meeting changes and cancellations with the user. Preview recording-access requests with apply_record_permission_prepare and obtain user confirmation before commit. Submit feedback only with explicit consent. Async tools may require get_job_result. */
    "tencent_meeting_mcp.call_tool": {
      input: {
        /**
         * Exact tool name from list_tools.
         * @minLength 1
         */
        toolName: string;
        /** Arguments matching the live tool schema; explicit _client_info is preserved. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Cancel a meeting, one recurring occurrence, or the whole series after showing the meeting and obtaining user confirmation. */
    "tencent_meeting_mcp.cancel_meeting": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id: string;
        /** Meeting type: 0 for a normal meeting or 1 for a recurring meeting. */
        meeting_type?: number;
        /** Recurring meeting occurrence ID, obtained from current_sub_meeting_id in meeting details. */
        sub_meeting_id?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get meeting details by meeting_id. Resolve a meeting code with get_meeting_by_code first. */
    "tencent_meeting_mcp.get_meeting": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Resolve a meeting code to meeting_id and meeting details. Accept the meeting-code formats supported by Tencent Meeting. */
    "tencent_meeting_mcp.get_meeting_by_code": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting code in an upstream-supported format, including hyphenated or spaced codes. */
        meeting_code: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** List invited meeting members, preserving pagination cursors. */
    "tencent_meeting_mcp.get_meeting_invitees": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id: string;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** List meeting participants. Pass next_page_token as page_token while has_more is true. Recurring meetings require sub_meeting_id; time filters apply to non-recurring meetings and cover at most 90 days. */
    "tencent_meeting_mcp.get_meeting_participants": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** End time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        end_time?: string;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id: string;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** Start time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        start_time?: string;
        /** Recurring meeting occurrence ID, obtained from current_sub_meeting_id in meeting details. */
        sub_meeting_id?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get recording download URLs. Return the URLs without downloading the media. A permission failure does not automatically submit an access request. */
    "tencent_meeting_mcp.get_record_addresses": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting recording ID returned by get_records_list. Preserve the ID as a string. */
        meeting_record_id: string;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** List recordings by meeting ID, meeting code, or time range. Without a meeting ID or code, supply both times; the range must not exceed 31 days or start more than one year ago. */
    "tencent_meeting_mcp.get_records_list": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** End time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        end_time?: string;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting code in an upstream-supported format, including hyphenated or spaced codes. */
        meeting_code?: string;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id?: string;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** Start time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        start_time?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get AI meeting minutes, optionally translated into a supported language. Supply the recording file ID, not the meeting recording ID. */
    "tencent_meeting_mcp.get_smart_minutes": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Minutes language: default for the original language, zh for Simplified Chinese, en for English, or ja for Japanese. */
        lang?: "default" | "zh" | "en" | "ja";
        /** Recording access password. */
        pwd?: string;
        /** Recording file ID returned by get_records_list. This is distinct from meeting_record_id; preserve the ID as a string. */
        record_file_id: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get transcript text starting at a paragraph ID returned by get_transcripts_paragraphs. Omit limit to request all remaining paragraphs. */
    "tencent_meeting_mcp.get_transcripts_details": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Number of transcript paragraphs to return. Omit to request all remaining paragraphs. */
        limit?: number;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id?: string;
        /** Starting paragraph ID, inclusive. Obtain it using get_transcripts_paragraphs. */
        pid: string;
        /** Recording file ID returned by get_records_list. This is distinct from meeting_record_id; preserve the ID as a string. */
        record_file_id: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get transcript paragraph identifiers for a recording file. Use get_transcripts_details to retrieve the text. */
    "tencent_meeting_mcp.get_transcripts_paragraphs": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id?: string;
        /** Recording file ID returned by get_records_list. This is distinct from meeting_record_id; preserve the ID as a string. */
        record_file_id: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** List ended meetings, optionally filtered by time. Use get_user_meetings separately for upcoming and ongoing meetings. */
    "tencent_meeting_mcp.get_user_ended_meetings": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** End time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        end_time?: string;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** Start time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        start_time?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** List upcoming and ongoing meetings. Use get_user_ended_meetings separately for ended meetings. */
    "tencent_meeting_mcp.get_user_meetings": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Whether to include all recurring meeting occurrences. */
        is_show_all_sub_meetings?: number;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** List members in the meeting waiting room, preserving pagination cursors. */
    "tencent_meeting_mcp.get_waiting_room": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id: string;
        /** Number of records per page. Omit to use the upstream default. */
        page_size?: number;
        /** Pagination cursor from next_page_token. Omit for the first page; continue while has_more is true. */
        page_token?: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Discover current Tencent Meeting MCP tools and their live schemas, including capabilities not exposed as dedicated actions. */
    "tencent_meeting_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Available tool definitions. */
        tools: Array<Record<string, unknown>>;
      };
    };
    /** Schedule a normal or recurring meeting. Supply the subject and intended start/end times; omitted options use Tencent Meeting defaults. */
    "tencent_meeting_mcp.schedule_meeting": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Enable audio watermarking. Omit to use account or enterprise settings. */
        audio_watermark?: boolean;
        /** Enable automatic transcription. Omit to use account or enterprise settings. */
        auto_asr?: boolean;
        /** Enable the waiting room. Preserve omission when updating a meeting. */
        auto_in_waiting_room?: boolean;
        /** Automatic recording after the host joins: none, local, or cloud. Omit to use account or enterprise settings. */
        auto_record_type?: string;
        /** End time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        end_time?: string;
        /** Invited enterprise member open_id values, up to 100. Discover contact lookup tools with list_tools if needed. */
        invitees?: Array<string>;
        /** Meeting type: 0 for a normal meeting or 1 for a recurring meeting. */
        meeting_type?: number;
        /** Join restriction: 1 for all members, 2 for invited members, or 3 for enterprise members. */
        only_user_join_type?: number;
        /** Optional meeting password of 4 to 6 digits. */
        password?: string;
        /** Provider recurring-meeting configuration: recurring_type, until_type, until_count, until_date. For updates, sub_meeting_id selects one occurrence and cannot be combined with recurrence-rule changes. */
        recurring_rule?: Record<string, unknown>;
        /** Start time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        start_time?: string;
        /** Meeting subject. */
        subject: string;
        /** The meeting timezone, such as Asia/Shanghai. This sets the meeting timezone rather than response formatting. */
        time_zone?: string;
        /** Text watermark: 0 for single row, 1 for double row, or 2 for disabled. Omit to use account or enterprise settings. */
        water_mark_type?: number;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Search a recording transcript using the upstream text parameter. Preserve the keyword encoding required by the current tool schema. */
    "tencent_meeting_mcp.search_transcripts": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Request a compact response. Omit or pass false for the full upstream response. */
        is_compact?: boolean;
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id?: string;
        /** Recording file ID returned by get_records_list. This is distinct from meeting_record_id; preserve the ID as a string. */
        record_file_id: string;
        /** Transcript search keyword. The official skill requests URL encoding for Chinese keywords. */
        text: string;
        /** IANA timezone for displaying response timestamps, default Asia/Shanghai. This does not change the meeting timezone; use time_zone for that. */
        timezone?: string;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
    /** Update a meeting after showing the existing meeting and obtaining user confirmation. Omitted fields are left to the provider; do not supply unrelated changes. */
    "tencent_meeting_mcp.update_meeting": {
      input: {
        /** Optional client environment metadata. Connector supplies its OS and agent identity when omitted; provide model only when known. */
        _client_info?: Record<string, unknown>;
        /** Enable audio watermarking. Omit to use account or enterprise settings. */
        audio_watermark?: boolean;
        /** Enable automatic transcription. Omit to use account or enterprise settings. */
        auto_asr?: boolean;
        /** Enable the waiting room. Preserve omission when updating a meeting. */
        auto_in_waiting_room?: boolean;
        /** Automatic recording after the host joins: none, local, or cloud. Omit to use account or enterprise settings. */
        auto_record_type?: string;
        /** End time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        end_time?: string;
        /** Invited enterprise member open_id values, up to 100. Discover contact lookup tools with list_tools if needed. */
        invitees?: Array<string>;
        /** How to update nonempty invitees: add, remove, or replace. */
        invitees_operate_type?: "add" | "remove" | "replace";
        /** Meeting ID as a string. Resolve a meeting code with get_meeting_by_code; do not convert uint64 IDs to JavaScript numbers. */
        meeting_id: string;
        /** Meeting type: 0 for a normal meeting or 1 for a recurring meeting. */
        meeting_type?: number;
        /** Join restriction: 1 for all members, 2 for invited members, or 3 for enterprise members. */
        only_user_join_type?: number;
        /** Optional meeting password of 4 to 6 digits. */
        password?: string;
        /** Provider recurring-meeting configuration: recurring_type, until_type, until_count, until_date. For updates, sub_meeting_id selects one occurrence and cannot be combined with recurrence-rule changes. */
        recurring_rule?: Record<string, unknown>;
        /** Start time in ISO 8601 or the provider-supported date-time format. Times without an offset use Asia/Shanghai. */
        start_time?: string;
        /** Meeting subject. */
        subject?: string;
        /** The meeting timezone, such as Asia/Shanghai. This sets the meeting timezone rather than response formatting. */
        time_zone?: string;
        /** Text watermark: 0 for single row, 1 for double row, or 2 for disabled. Omit to use account or enterprise settings. */
        water_mark_type?: number;
      };
      output: {
        /** Complete MCP result, including content, structuredContent, and upstream metadata when present. JSON text can contain _meta and data with status_code, headers, and body. Preserve trace IDs and unknown fields. */
        result: Record<string, unknown>;
      };
    };
  }
}
