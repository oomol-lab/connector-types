import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a CoderPad interview pad with optional initial content and notes. */
    "coderpad.create_pad": {
      input: {
        /** The title displayed for the new pad. */
        title?: string;
        /** The CoderPad language identifier for the new pad. */
        language?: string;
        /** The initial source code placed in the pad editor. */
        contents?: string;
        /** Private interviewer notes stored with the pad. */
        notes?: string;
      };
      output: {
        /** The unique pad identifier. */
        id: string;
        /** The user-assigned pad title. */
        title: string;
        /** The current pad state. */
        state?: string;
        /** The email address of the pad owner. */
        owner_email?: string;
        /** The active programming language, or null before selection. */
        language?: string | null;
        /** Whether guests need authorization to view the pad. */
        private?: boolean;
        /** Whether code execution is enabled. */
        execution_enabled?: boolean;
        /** The pad creation timestamp. */
        created_at?: string;
        /** The most recent pad update timestamp. */
        updated_at?: string;
        /** The timestamp when the interview ended, or null while active. */
        ended_at?: string | null;
        /** The URL of the pad editing interface. */
        url?: string;
        /** The URL of the pad playback interface. */
        playback?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve profile, users, teams, and sign-on settings for the CoderPad organization. */
    "coderpad.get_organization": {
      input: Record<string, never>;
      output: {
        /** The status string returned by CoderPad. */
        status: string;
        /** The organization display name. */
        organization_name: string;
        /** The number of users in the organization. */
        user_count?: number;
        /** The default language for organization users. */
        organization_default_language?: string;
        /** Whether the organization supports single sign-on. */
        single_sign_on_supported?: boolean;
        /** The organization single sign-on URL. */
        single_sign_in_url?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve CoderPad pad usage statistics for an optional time range. */
    "coderpad.get_organization_stats": {
      input: {
        /** The ISO 8601 start timestamp; endTime is required with it. */
        startTime?: string;
        /** The ISO 8601 end timestamp; startTime is required with it. */
        endTime?: string;
      };
      output: {
        /** The status string returned by CoderPad. */
        status: string;
        /** The start timestamp used for the statistics window. */
        start_time: string;
        /** The end timestamp used for the statistics window. */
        end_time: string;
        /** The number of pads created in the statistics window. */
        pads_created: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve current details for one CoderPad interview pad. */
    "coderpad.get_pad": {
      input: {
        /**
         * The unique CoderPad pad identifier.
         * @minLength 1
         */
        padId: string;
      };
      output: {
        /** The unique pad identifier. */
        id: string;
        /** The user-assigned pad title. */
        title: string;
        /** The current pad state. */
        state?: string;
        /** The email address of the pad owner. */
        owner_email?: string;
        /** The active programming language, or null before selection. */
        language?: string | null;
        /** Whether guests need authorization to view the pad. */
        private?: boolean;
        /** Whether code execution is enabled. */
        execution_enabled?: boolean;
        /** The pad creation timestamp. */
        created_at?: string;
        /** The most recent pad update timestamp. */
        updated_at?: string;
        /** The timestamp when the interview ended, or null while active. */
        ended_at?: string | null;
        /** The URL of the pad editing interface. */
        url?: string;
        /** The URL of the pad playback interface. */
        playback?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one CoderPad interview question by its numeric identifier. */
    "coderpad.get_question": {
      input: {
        /**
         * The unique CoderPad question identifier.
         * @minimum 1
         */
        questionId: number;
      };
      output: {
        /** The unique question identifier. */
        id: number;
        /** The question title. */
        title: string;
        /** The email address of the question owner. */
        owner_email?: string;
        /** The programming language used by the question. */
        language?: string | null;
        /** The question description. */
        description?: string | null;
        /** Whether the question is shared with the organization. */
        shared?: boolean;
        /** The number of times the question has been used. */
        used?: number;
        /** The question creation timestamp. */
        created_at?: string;
        /** The most recent question update timestamp. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** List recorded participant and execution events for a CoderPad interview pad. */
    "coderpad.list_pad_events": {
      input: {
        /**
         * The unique CoderPad pad identifier.
         * @minLength 1
         */
        padId: string;
        /** The pad or question field and direction to sort by, such as created_at,desc or updated_at,asc. */
        sort?: string;
        /**
         * The one-based result page to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The status string returned by CoderPad. */
        status: string;
        /** The events on this result page. */
        events: Array<{
          /** The human-readable event message. */
          message: string;
          /** The event kind. */
          kind: string;
          /** Additional information associated with the event. */
          metadata?: string | null;
          /** The name of the user associated with the event. */
          user_name?: string | null;
          /** The email address of the user associated with the event. */
          user_email?: string | null;
          /** The event timestamp. */
          created_at: string;
          [key: string]: unknown;
        }>;
        /** The total number of recorded events. */
        total: number;
        /** The URL of the next result page. */
        next_page?: string;
        /** The URL of the previous result page. */
        prev_page?: string;
        [key: string]: unknown;
      };
    };
    /** List interview pads owned by the authenticated CoderPad user. */
    "coderpad.list_pads": {
      input: {
        /** The pad or question field and direction to sort by, such as created_at,desc or updated_at,asc. */
        sort?: string;
        /**
         * The one-based result page to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The status string returned by CoderPad. */
        status: string;
        /** The pads on this result page. */
        pads: Array<{
          /** The unique pad identifier. */
          id: string;
          /** The user-assigned pad title. */
          title: string;
          /** The current pad state. */
          state?: string;
          /** The email address of the pad owner. */
          owner_email?: string;
          /** The active programming language, or null before selection. */
          language?: string | null;
          /** Whether guests need authorization to view the pad. */
          private?: boolean;
          /** Whether code execution is enabled. */
          execution_enabled?: boolean;
          /** The pad creation timestamp. */
          created_at?: string;
          /** The most recent pad update timestamp. */
          updated_at?: string;
          /** The timestamp when the interview ended, or null while active. */
          ended_at?: string | null;
          /** The URL of the pad editing interface. */
          url?: string;
          /** The URL of the pad playback interface. */
          playback?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching pads. */
        total: number;
        /** The URL of the next result page. */
        next_page?: string;
        /** The URL of the previous result page. */
        prev_page?: string;
        [key: string]: unknown;
      };
    };
    /** List interview questions owned by the authenticated CoderPad user. */
    "coderpad.list_questions": {
      input: {
        /** The pad or question field and direction to sort by, such as created_at,desc or updated_at,asc. */
        sort?: string;
        /**
         * The one-based result page to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The status string returned by CoderPad. */
        status: string;
        /** The questions on this result page. */
        questions: Array<{
          /** The unique question identifier. */
          id: number;
          /** The question title. */
          title: string;
          /** The email address of the question owner. */
          owner_email?: string;
          /** The programming language used by the question. */
          language?: string | null;
          /** The question description. */
          description?: string | null;
          /** Whether the question is shared with the organization. */
          shared?: boolean;
          /** The number of times the question has been used. */
          used?: number;
          /** The question creation timestamp. */
          created_at?: string;
          /** The most recent question update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching questions. */
        total: number;
        /** The URL of the next result page. */
        next_page?: string;
        /** The URL of the previous result page. */
        prev_page?: string;
        [key: string]: unknown;
      };
    };
  }
}
