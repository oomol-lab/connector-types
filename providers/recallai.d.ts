import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Recall.ai bot with the core scheduling, recording, automatic-leave, and metadata fields needed for a first-pass meeting bot workflow. */
    "recallai.create_bot": {
      input: {
        /**
         * The meeting URL that Recall.ai should join, such as a Google Meet or Zoom link.
         * @minLength 1
         */
        meeting_url: string;
        /**
         * The bot display name shown in the meeting when the platform allows custom names.
         * @minLength 1
         */
        bot_name?: string;
        /**
         * Optional ISO 8601 timestamp for scheduling the bot at least 10 minutes in the future.
         * @format date-time
         */
        join_at?: string;
        /** Optional Recall.ai recording_config object for transcript, media, and recording behavior. */
        recording_config?: Record<string, unknown>;
        /** Optional Recall.ai automatic_leave object that controls when the bot should leave the meeting. */
        automatic_leave?: Record<string, unknown>;
        /** String metadata entries passed to or returned by Recall.ai. */
        metadata?: Record<string, string>;
      };
      output: {
        /** Raw Recall.ai bot payload returned by Recall.ai. */
        bot: Record<string, unknown>;
      };
    };
    /** Delete the Recall.ai media artifacts stored for a completed bot after downstream processing is finished. */
    "recallai.delete_bot_media": {
      input: {
        /**
         * The Recall.ai bot identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Recall.ai bot payload returned by Recall.ai. */
        bot: Record<string, unknown> | null;
      };
    };
    /** Retrieve one Recall.ai bot by bot ID, including its current status changes, recordings, and metadata. */
    "recallai.get_bot": {
      input: {
        /**
         * The Recall.ai bot identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Recall.ai bot payload returned by Recall.ai. */
        bot: Record<string, unknown>;
      };
    };
    /** List Recall.ai bots with optional filters for scheduled date window, meeting URL, platform, status, metadata, and pagination. */
    "recallai.list_bots": {
      input: {
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Only include bots scheduled on or after this YYYY-MM-DD date.
         * @format date
         */
        join_at_after?: string;
        /**
         * Only include bots scheduled on or before this YYYY-MM-DD date.
         * @format date
         */
        join_at_before?: string;
        /**
         * Only include bots for the given meeting URL.
         * @minLength 1
         */
        meeting_url?: string;
        /** Optional list of Recall.ai platform filters. */
        platform?: Array<"chime_sdk" | "google_meet" | "google_meet_media_api" | "goto_meeting" | "microsoft_teams" | "microsoft_teams_live" | "slack_authenticator" | "slack_huddle_observer" | "webex" | "zoom" | "zoom_rtms">;
        /** Optional list of Recall.ai bot status filters. */
        status?: Array<"analysis_done" | "analysis_failed" | "call_ended" | "done" | "fatal" | "in_call_not_recording" | "in_call_recording" | "in_waiting_room" | "joining_call" | "media_expired" | "ready" | "recording_done" | "recording_permission_allowed" | "recording_permission_denied">;
        /**
         * When present, ask Recall.ai to use cursor-based pagination semantics.
         * @minLength 1
         */
        use_cursor?: string;
        /** String metadata entries passed to or returned by Recall.ai. */
        metadata?: Record<string, string>;
      };
      output: {
        /** The total bot count returned by Recall.ai. */
        count?: number | null;
        /** The next page URL returned by Recall.ai. */
        next?: string | null;
        /** The previous page URL returned by Recall.ai. */
        previous?: string | null;
        /** The bot results returned by Recall.ai. */
        bots: Array<Record<string, unknown>>;
      };
    };
    /** Remove a Recall.ai bot from the meeting immediately when it is already active in the call. */
    "recallai.remove_bot_from_call": {
      input: {
        /**
         * The Recall.ai bot identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Recall.ai bot payload returned by Recall.ai. */
        bot: Record<string, unknown> | null;
      };
    };
  }
}
