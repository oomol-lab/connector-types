import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Screendesk recording by UUID. */
    "screendesk.get_recording": {
      input: {
        /**
         * The UUID of the Screendesk recording.
         * @minLength 1
         */
        recordingUuid: string;
      };
      output: {
        /**
         * The recording UUID.
         * @format uuid
         */
        uuid: string;
        /** The recording title. */
        title?: string | null;
        /** The recording summary. */
        summary?: string | null;
        /** The recording description. */
        description?: string | null;
        /** Recording timestamps, type, source, URL, and helpdesk metadata. */
        metadata?: Record<string, unknown>;
        /** Technical details captured with the recording. */
        technical_details?: Record<string, unknown>;
        /** Raw console log output captured during the recording. */
        console_logs?: string | null;
        /** Customer details associated with the recording. */
        customer?: Record<string, unknown>;
        /** The Screendesk user who owns the recording. */
        user?: Record<string, unknown> | null;
        /** Live call session insights when available. */
        room_insights?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Get one page of the timestamped transcript for a Screendesk recording. */
    "screendesk.get_recording_transcript": {
      input: {
        /**
         * The UUID of the Screendesk recording.
         * @minLength 1
         */
        recordingUuid: string;
        /**
         * The one-based Screendesk page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /**
         * The recording UUID.
         * @format uuid
         */
        recording_uuid: string;
        /** The current transcript availability status. */
        status: "ready" | "processing" | "unavailable";
        /** The detected BCP 47 language code when available. */
        language?: string | null;
        /** A mapping from diarization speaker indices to known display names. */
        speaker_map: Record<string, string>;
        /** Screendesk pagination metadata. */
        pagination: {
          /** The total number of records. */
          count: number;
          /** The current page number. */
          page: number;
          /** The number of records per page. */
          items: number;
          /** The total number of pages. */
          pages: number;
          /** The next page number, or null on the last page. */
          next_page?: number | null;
          /** The previous page number, or null on the first page. */
          prev_page?: number | null;
          /** The last page number. */
          last_page: number;
          /** The index of the first record on this page. */
          from: number;
          /** The index of the last record on this page. */
          to: number;
          [key: string]: unknown;
        };
        /** The timestamped transcript segments on this page. */
        segments: Array<{
          /**
           * The segment start time in seconds.
           * @minimum 0
           */
          start_seconds: number;
          /**
           * The segment end time in seconds when available.
           * @minimum 0
           */
          end_seconds?: number | null;
          /** The transcript segment text. */
          text: string;
          /** Sentence timing and diarization metadata when available. */
          sentences: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Screendesk recordings visible to the authenticated user. */
    "screendesk.list_recordings": {
      input: {
        /**
         * The one-based Screendesk page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * An exact helpdesk ticket, conversation, issue, or object ID to filter by.
         * @minLength 1
         */
        ticketId?: string;
        /** The helpdesk provider used with the ticket ID filter. */
        provider?: "zendesk" | "intercom" | "freshdesk" | "freshdesk_chat" | "freshchat" | "freshservice" | "helpscout" | "hubspot" | "jira";
      };
      output: {
        /** Screendesk pagination metadata. */
        pagination: {
          /** The total number of records. */
          count: number;
          /** The current page number. */
          page: number;
          /** The number of records per page. */
          items: number;
          /** The total number of pages. */
          pages: number;
          /** The next page number, or null on the last page. */
          next_page?: number | null;
          /** The previous page number, or null on the first page. */
          prev_page?: number | null;
          /** The last page number. */
          last_page: number;
          /** The index of the first record on this page. */
          from: number;
          /** The index of the last record on this page. */
          to: number;
          [key: string]: unknown;
        };
        /** The recordings on this page. */
        records: Array<{
          /**
           * The recording UUID.
           * @format uuid
           */
          uuid: string;
          /** The recording title. */
          title?: string | null;
          /** The recording summary. */
          summary?: string | null;
          /** The recording description. */
          description?: string | null;
          /** Recording timestamps, type, source, URL, and helpdesk metadata. */
          metadata?: Record<string, unknown>;
          /** Technical details captured with the recording. */
          technical_details?: Record<string, unknown>;
          /** Raw console log output captured during the recording. */
          console_logs?: string | null;
          /** Customer details associated with the recording. */
          customer?: Record<string, unknown>;
          /** The Screendesk user who owns the recording. */
          user?: Record<string, unknown> | null;
          /** Live call session insights when available. */
          room_insights?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Screendesk workspace users. This action requires an admin token. */
    "screendesk.list_users": {
      input: {
        /**
         * The one-based Screendesk page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Screendesk pagination metadata. */
        pagination: {
          /** The total number of records. */
          count: number;
          /** The current page number. */
          page: number;
          /** The number of records per page. */
          items: number;
          /** The total number of pages. */
          pages: number;
          /** The next page number, or null on the last page. */
          next_page?: number | null;
          /** The previous page number, or null on the first page. */
          prev_page?: number | null;
          /** The last page number. */
          last_page: number;
          /** The index of the first record on this page. */
          from: number;
          /** The index of the last record on this page. */
          to: number;
          [key: string]: unknown;
        };
        /** The users on this page. */
        users: Array<{
          /**
           * The user's email address.
           * @format email
           */
          email: string;
          /** The user's display name. */
          name?: string;
          /** Whether the user has a profile picture. */
          has_profile_picture?: boolean;
          /**
           * When the user was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the user was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** The user's workspace role. */
          role?: "admin" | "member";
          /** The user's Screendesk notification settings. */
          notifications?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Find a Screendesk workspace user by email. This action requires an admin token. */
    "screendesk.search_user": {
      input: {
        /**
         * The exact email address to search for.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The user's email address.
         * @format email
         */
        email: string;
        /** The user's display name. */
        name?: string;
        /** Whether the user has a profile picture. */
        has_profile_picture?: boolean;
        /**
         * When the user was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the user was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** The user's workspace role. */
        role?: "admin" | "member";
        /** The user's Screendesk notification settings. */
        notifications?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update the title, summary, or description of a Screendesk recording. */
    "screendesk.update_recording": {
      input: {
        /**
         * The UUID of the Screendesk recording.
         * @minLength 1
         */
        recordingUuid: string;
        /** The new recording title. */
        title?: string;
        /** The new recording summary, or null to clear it. */
        summary?: string | null;
        /** The new recording description, or null to clear it. */
        description?: string | null;
      };
      output: {
        /**
         * The recording UUID.
         * @format uuid
         */
        uuid: string;
        /** The recording title. */
        title?: string | null;
        /** The recording summary. */
        summary?: string | null;
        /** The recording description. */
        description?: string | null;
        /** Recording timestamps, type, source, URL, and helpdesk metadata. */
        metadata?: Record<string, unknown>;
        /** Technical details captured with the recording. */
        technical_details?: Record<string, unknown>;
        /** Raw console log output captured during the recording. */
        console_logs?: string | null;
        /** Customer details associated with the recording. */
        customer?: Record<string, unknown>;
        /** The Screendesk user who owns the recording. */
        user?: Record<string, unknown> | null;
        /** Live call session insights when available. */
        room_insights?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
  }
}
