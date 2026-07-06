import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Glyphic call by ID, including transcript, summary, media, and insights. */
    "glyphic.get_call": {
      input: {
        /**
         * The Glyphic call identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        callId: string;
      };
      output: {
        /** A Glyphic call detail. */
        call: {
          /** The Glyphic call identifier. */
          id?: string;
          /** The call title. */
          title?: string;
          /** Companies associated with the call. */
          companies?: Array<{
            /** The company name when Glyphic returns it. */
            name?: string | null;
            /** The company domain. */
            domain?: string;
            [key: string]: unknown;
          }>;
          /** Participants associated with the call. */
          participants?: Array<{
            /** The Glyphic participant identifier. */
            id?: number;
            /** The participant name when Glyphic returns it. */
            name?: string | null;
            /** The participant email when Glyphic returns it. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /**
           * The call start time.
           * @format date-time
           */
          start_time?: string;
          /** The call duration in seconds when available. */
          duration?: number | null;
          /** A Glyphic call processing status. */
          status?: {
            /** The Glyphic call processing status code, or null when unavailable. */
            code?: "queued" | "in_progress" | "completed" | "failed" | "cancelled" | null;
            [key: string]: unknown;
          };
          /** Tags attached to the call. */
          tags?: Array<{
            /** The Glyphic call tag identifier. */
            id?: string;
            /** The Glyphic call tag name. */
            name?: string;
            /** The Glyphic call tag description when available. */
            description?: string | null;
            /** The Glyphic call tag group when available. */
            group?: string | null;
            [key: string]: unknown;
          }>;
          /** Transcript turns returned for the call. */
          transcript_turns?: Array<{
            /** The participant party identifier for the transcript turn. */
            party_id?: number;
            /** The transcript text for this turn. */
            turn_text?: string;
            /** The timestamp for this transcript turn. */
            timestamp?: string;
            [key: string]: unknown;
          }> | null;
          /** The Glyphic call summary when available. */
          summary?: string | null;
          /** Glyphic media metadata for a call or snippet. */
          media?: {
            /** The Glyphic media type. */
            media_type?: "audio" | "video" | null;
            /** The presigned media URL returned by Glyphic when available. */
            media_url?: string | null;
            [key: string]: unknown;
          } | null;
          /** The Glyphic call URL when available. */
          url_link?: string | null;
          /** Insights extracted from the call. */
          insights?: Array<{
            /** The insight name. */
            name?: string;
            /** The insight value when available. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          /** The related CRM deal identifier when available. */
          crm_deal_id?: string | null;
          [key: string]: unknown;
        };
        /** The raw Glyphic response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve presigned media URL metadata for a Glyphic call. */
    "glyphic.get_call_media": {
      input: {
        /**
         * The Glyphic call identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        callId: string;
      };
      output: {
        /** Glyphic media metadata for a call or snippet. */
        media: {
          /** The Glyphic media type. */
          media_type?: "audio" | "video" | null;
          /** The presigned media URL returned by Glyphic when available. */
          media_url?: string | null;
          [key: string]: unknown;
        };
        /** The raw Glyphic response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve snippets for a Glyphic call, including time ranges and transcript turns. */
    "glyphic.get_call_snippets": {
      input: {
        /**
         * The Glyphic call identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        callId: string;
      };
      output: {
        /** The Glyphic snippets returned for the call. */
        snippets: Array<{
          /** Glyphic media metadata for a call or snippet. */
          media?: {
            /** The Glyphic media type. */
            media_type?: "audio" | "video" | null;
            /** The presigned media URL returned by Glyphic when available. */
            media_url?: string | null;
            [key: string]: unknown;
          } | null;
          /** The snippet start time in seconds. */
          start_seconds?: number;
          /** The snippet end time in seconds. */
          end_seconds?: number;
          /** Transcript turns in the snippet time range. */
          transcript_turns?: Array<{
            /** The participant party identifier for the transcript turn. */
            party_id?: number;
            /** The transcript text for this turn. */
            turn_text?: string;
            /** The timestamp for this transcript turn. */
            timestamp?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw Glyphic snippet response array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve a Glyphic playbook by ID, including the latest version content. */
    "glyphic.get_playbook": {
      input: {
        /**
         * The Glyphic playbook identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        playbookId: string;
      };
      output: {
        /** A Glyphic playbook detail. */
        playbook: {
          /** The Glyphic playbook identifier. */
          id?: string;
          /** The playbook title when available. */
          title?: string | null;
          /** The Glyphic playbook type. */
          playbook_type?: "sales" | "customer_success" | "autogen_us" | "autogen_emea" | "autogen_apac";
          /** The team label associated with the playbook. */
          team_label?: string | null;
          /**
           * The playbook update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The playbook version content. */
          content?: string;
          /** The Glyphic playbook version identifier. */
          version_id?: string;
          [key: string]: unknown;
        };
        /** The raw Glyphic response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a specific Glyphic playbook version by playbook ID and version ID. */
    "glyphic.get_playbook_version": {
      input: {
        /**
         * The Glyphic playbook identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        playbookId: string;
        /**
         * The Glyphic playbook version identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        versionId: string;
      };
      output: {
        /** A Glyphic playbook detail. */
        playbook: {
          /** The Glyphic playbook identifier. */
          id?: string;
          /** The playbook title when available. */
          title?: string | null;
          /** The Glyphic playbook type. */
          playbook_type?: "sales" | "customer_success" | "autogen_us" | "autogen_emea" | "autogen_apac";
          /** The team label associated with the playbook. */
          team_label?: string | null;
          /**
           * The playbook update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The playbook version content. */
          content?: string;
          /** The Glyphic playbook version identifier. */
          version_id?: string;
          [key: string]: unknown;
        };
        /** The raw Glyphic response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List all Glyphic call tags for the organization. */
    "glyphic.list_call_tags": {
      input: Record<string, never>;
      output: {
        /** The Glyphic call tags returned by the API. */
        tags: Array<{
          /** The Glyphic call tag identifier. */
          id?: string;
          /** The Glyphic call tag name. */
          name?: string;
          /** The Glyphic call tag description when available. */
          description?: string | null;
          /** The Glyphic call tag group when available. */
          group?: string | null;
          [key: string]: unknown;
        }>;
        /** The raw Glyphic call tag response array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List public Glyphic calls with optional participant, time, title, tag, and cursor filters. */
    "glyphic.list_calls": {
      input: {
        /**
         * Filter calls by a participant email address.
         * @format email
         */
        participantEmail?: string;
        /**
         * Only return calls starting at or after this UTC ISO 8601 time.
         * @format date-time
         */
        startTimeFrom?: string;
        /**
         * Only return calls starting at or before this UTC ISO 8601 time.
         * @format date-time
         */
        startTimeTo?: string;
        /**
         * Query text used to filter calls by title.
         * @minLength 1
         */
        titleFilter?: string;
        /**
         * Glyphic call tag identifiers to filter by.
         * @minItems 1
         */
        tagIds?: Array<string>;
        /**
         * The cursor returned by a previous Glyphic list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The cursor pagination direction. */
        direction?: "next" | "prev";
      };
      output: {
        /** The Glyphic calls returned by the API. */
        calls: Array<{
          /** The Glyphic call identifier. */
          id?: string;
          /** The call title. */
          title?: string;
          /** Companies associated with the call. */
          companies?: Array<{
            /** The company name when Glyphic returns it. */
            name?: string | null;
            /** The company domain. */
            domain?: string;
            [key: string]: unknown;
          }>;
          /** Participants associated with the call. */
          participants?: Array<{
            /** The Glyphic participant identifier. */
            id?: number;
            /** The participant name when Glyphic returns it. */
            name?: string | null;
            /** The participant email when Glyphic returns it. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /**
           * The call start time.
           * @format date-time
           */
          start_time?: string;
          /** The call duration in seconds when available. */
          duration?: number | null;
          /** A Glyphic call processing status. */
          status?: {
            /** The Glyphic call processing status code, or null when unavailable. */
            code?: "queued" | "in_progress" | "completed" | "failed" | "cancelled" | null;
            [key: string]: unknown;
          };
          /** Tags attached to the call. */
          tags?: Array<{
            /** The Glyphic call tag identifier. */
            id?: string;
            /** The Glyphic call tag name. */
            name?: string;
            /** The Glyphic call tag description when available. */
            description?: string | null;
            /** The Glyphic call tag group when available. */
            group?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The cursor to pass on the next request, or null when no next page exists. */
        nextCursor: string | null;
        /** The cursor to pass for the previous page, or null when no previous page exists. */
        previousCursor: string | null;
        /** Glyphic cursor pagination metadata. */
        pagination: {
          /** The cursor for the next page, or null when no next page is available. */
          next_cursor?: string | null;
          /** The cursor for the previous page, or null when no previous page is available. */
          previous_cursor?: string | null;
          [key: string]: unknown;
        };
        /** The raw Glyphic response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List versions for a Glyphic playbook. */
    "glyphic.list_playbook_versions": {
      input: {
        /**
         * The Glyphic playbook identifier.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-f]{24}$
         */
        playbookId: string;
      };
      output: {
        /** The Glyphic playbook versions returned by the API. */
        versions: Array<{
          /** The Glyphic playbook version identifier. */
          id?: string;
          /**
           * The playbook version creation timestamp.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** The raw Glyphic playbook version response array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Glyphic playbooks with cursor pagination. */
    "glyphic.list_playbooks": {
      input: {
        /**
         * The cursor returned by a previous Glyphic list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The cursor pagination direction. */
        direction?: "next" | "prev";
      };
      output: {
        /** The Glyphic playbooks returned by the API. */
        playbooks: Array<{
          /** The Glyphic playbook identifier. */
          id?: string;
          /** The playbook title when available. */
          title?: string | null;
          /** The Glyphic playbook type. */
          playbook_type?: "sales" | "customer_success" | "autogen_us" | "autogen_emea" | "autogen_apac";
          /** The team label associated with the playbook. */
          team_label?: string | null;
          /**
           * The playbook update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The cursor to pass on the next request, or null when no next page exists. */
        nextCursor: string | null;
        /** The cursor to pass for the previous page, or null when no previous page exists. */
        previousCursor: string | null;
        /** Glyphic cursor pagination metadata. */
        pagination: {
          /** The cursor for the next page, or null when no next page is available. */
          next_cursor?: string | null;
          /** The cursor for the previous page, or null when no previous page is available. */
          previous_cursor?: string | null;
          [key: string]: unknown;
        };
        /** The raw Glyphic response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
