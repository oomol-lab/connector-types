import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read a Granola meeting transcript with OAuth or an API key. Requires an eligible paid Granola plan. */
    "granola.get_meeting_transcript": {
      input: {
        /**
         * Meeting ID returned for this connection.
         * @minLength 1
         */
        meeting_id: string;
      };
      output: {
        /**
         * Native Granola meeting ID.
         * @minLength 1
         */
        meeting_id: string;
        /**
         * Transcript text with speaker labels and timestamps when available.
         * @minLength 1
         */
        transcript: string;
      };
    };
    /** Read Granola meeting details and summaries by ID with OAuth or an API key. Use IDs returned for the same connection. Free-plan OAuth access covers personal notes from the last 30 days. */
    "granola.get_meetings": {
      input: {
        /**
         * Meeting IDs to retrieve.
         * @minItems 1
         * @maxItems 10
         */
        meeting_ids: Array<string>;
      };
      output: {
        /** The requested meetings. */
        meetings: Array<{
          /**
           * Meeting ID for this connection. OAuth and API-key IDs are not interchangeable.
           * @minLength 1
           */
          id: string;
          /** Meeting title, when available. */
          title: string | null;
          /** Meeting date when available, not a creation or update timestamp. */
          date?: string;
          /** Participant names and email addresses when available. */
          attendees?: string;
          /** Meeting summary, preserving its original Markdown when present. */
          summary?: string;
        }>;
      };
    };
    /** Get a Granola note and summary by ID with OAuth or an API key, optionally including the transcript on eligible paid plans. Use an ID returned for the same connection. */
    "granola.get_note": {
      input: {
        /**
         * Granola note ID to retrieve.
         * @minLength 1
         */
        note_id: string;
        /** Optional related Granola note data to include. */
        include?: "transcript";
      };
      output: {
        /** A Granola note object. */
        note: {
          /** The ID of the note. */
          id?: string;
          /** The object type returned by Granola. */
          object?: string;
          /** The title of the note. */
          title?: string | null;
          /** A Granola user object. */
          owner?: {
            /** The name of the user. */
            name?: string | null;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The creation time of the note. */
          created_at?: string;
          /** The last update time of the note. */
          updated_at?: string;
          /**
           * The URL to view the note in Granola.
           * @format uri
           */
          web_url?: string;
          /** A Granola calendar event object. */
          calendar_event?: {
            /** The title of the calendar event. */
            event_title?: string | null;
            /** Calendar invitees returned by Granola. */
            invitees?: Array<{
              /**
               * The email address of the calendar invitee.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            }>;
            /** The email address of the organiser. */
            organiser?: string | null;
            /** The ID of the calendar event. */
            calendar_event_id?: string | null;
            /** The scheduled start time of the calendar event. */
            scheduled_start_time?: string | null;
            /** The scheduled end time of the calendar event. */
            scheduled_end_time?: string | null;
            [key: string]: unknown;
          } | null;
          /** Meeting attendees returned by Granola. */
          attendees?: Array<{
            /** The name of the user. */
            name?: string | null;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Folders that contain the note. */
          folder_membership?: Array<{
            /** The ID of the folder. */
            id?: string;
            /** The object type returned by Granola. */
            object?: string;
            /** The name of the folder. */
            name?: string;
            /** The ID of the parent folder, or null for top-level folders. */
            parent_folder_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The plain text summary of the note. */
          summary_text?: string;
          /** The markdown summary of the note, when available. */
          summary_markdown?: string | null;
          /** Transcript items returned by Granola. */
          transcript?: Array<{
            /** A Granola transcript speaker object. */
            speaker?: {
              /** The source of the speaker, such as microphone or speaker. */
              source?: string;
              /** The diarized anonymous speaker label when Granola returns one. */
              diarization_label?: string;
              [key: string]: unknown;
            };
            /** The transcript text. */
            text?: string;
            /** The start time of the transcript item. */
            start_time?: string;
            /** The end time of the transcript item. */
            end_time?: string;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
    };
    /** List accessible Granola folders with OAuth or an API key and cursor pagination. MCP folder access requires a paid plan and uses local pagination of the returned list. */
    "granola.list_folders": {
      input: {
        /**
         * Cursor returned by this action for the same connection and filters.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return. Granola allows 1 to 30.
         * @minimum 1
         * @maximum 30
         */
        page_size?: number;
      };
      output: {
        /** Folders returned by Granola. */
        folders: Array<{
          /** The ID of the folder. */
          id?: string;
          /** The object type returned by Granola. */
          object?: string;
          /** The name of the folder. */
          name?: string;
          /** The ID of the parent folder, or null for top-level folders. */
          parent_folder_id?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether Granola has more folders to fetch. */
        hasMore: boolean;
        /** The cursor to continue from, when one is available. */
        cursor: string | null;
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** List recent Granola meetings with OAuth or an API key. OAuth uses MCP's last-30-days window; API keys list notes created in the last 30 days. Use get_meetings to read summaries. */
    "granola.list_meetings": {
      input: Record<string, never>;
      output: {
        /** The recent meetings. */
        meetings: Array<{
          /**
           * Meeting ID for this connection. OAuth and API-key IDs are not interchangeable.
           * @minLength 1
           */
          id: string;
          /** Meeting title, when available. */
          title: string | null;
          /** Meeting date when available, not a creation or update timestamp. */
          date?: string;
          /** Participant names and email addresses when available. */
          attendees?: string;
          /** Meeting summary, preserving its original Markdown when present. */
          summary?: string;
        }>;
      };
    };
    /** List Granola notes with OAuth or an API key. MCP lists meetings from the last 30 days and supports folder filtering and local cursor pagination. Creation and update filters require an API key. */
    "granola.list_notes": {
      input: {
        /**
         * API-key-only date or date-time filter, such as 2026-01-27 or 2026-01-27T15:30:00Z. MCP does not expose note creation or update timestamps.
         * @minLength 1
         */
        created_before?: string;
        /**
         * API-key-only date or date-time filter, such as 2026-01-27 or 2026-01-27T15:30:00Z. MCP does not expose note creation or update timestamps.
         * @minLength 1
         */
        created_after?: string;
        /**
         * API-key-only date or date-time filter, such as 2026-01-27 or 2026-01-27T15:30:00Z. MCP does not expose note creation or update timestamps.
         * @minLength 1
         */
        updated_after?: string;
        /**
         * Folder ID returned for this connection. Folder filtering through MCP requires a paid plan.
         * @minLength 1
         */
        folder_id?: string;
        /**
         * Cursor returned by this action for the same connection and filters.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return. Granola allows 1 to 30.
         * @minimum 1
         * @maximum 30
         */
        page_size?: number;
      };
      output: {
        /** Notes returned by Granola. */
        notes: Array<{
          /** The ID of the note. */
          id?: string;
          /** The object type returned by Granola. */
          object?: string;
          /** The title of the note. */
          title?: string | null;
          /** A Granola user object. */
          owner?: {
            /** The name of the user. */
            name?: string | null;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The creation time of the note. */
          created_at?: string;
          /** The last update time of the note. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Whether Granola has more notes to fetch. */
        hasMore: boolean;
        /** The cursor to continue from, when one is available. */
        cursor: string | null;
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
  }
}
