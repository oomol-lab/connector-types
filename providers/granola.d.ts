import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Granola meeting note by ID, optionally including the transcript. */
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
    /** List accessible Granola folders with cursor pagination. */
    "granola.list_folders": {
      input: {
        /**
         * Cursor token returned by a previous Granola page.
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
    /** List accessible Granola meeting notes with optional date, folder, and cursor filters. */
    "granola.list_notes": {
      input: {
        /**
         * Date or date-time filter accepted by Granola, such as 2026-01-27 or 2026-01-27T15:30:00Z.
         * @minLength 1
         */
        created_before?: string;
        /**
         * Date or date-time filter accepted by Granola, such as 2026-01-27 or 2026-01-27T15:30:00Z.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Date or date-time filter accepted by Granola, such as 2026-01-27 or 2026-01-27T15:30:00Z.
         * @minLength 1
         */
        updated_after?: string;
        /**
         * Granola folder ID used to filter notes.
         * @minLength 1
         */
        folder_id?: string;
        /**
         * Cursor token returned by a previous Granola page.
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
