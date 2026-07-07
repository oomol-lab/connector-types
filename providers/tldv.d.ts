import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a tl;dv meeting by its identifier. */
    "tldv.get_meeting": {
      input: {
        /**
         * The tl;dv meeting identifier.
         * @minLength 1
         */
        meetingId: string;
      };
      output: {
        /** The tl;dv meeting identifier. */
        id?: string;
        /** The meeting name. */
        name?: string;
        /** The date or datetime when the meeting happened. */
        happenedAt?: string;
        /** The tl;dv web URL for opening the meeting. */
        url?: string;
        /** The meeting duration in seconds. */
        duration?: number;
        /** A tl;dv user object. */
        organizer?: {
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        };
        /** Users invited to or participating in the meeting. */
        invitees?: Array<{
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        }>;
        /** The tl;dv template attached to the meeting. */
        template?: unknown;
        /** Additional tl;dv meeting properties. */
        extraProperties?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get markdown and structured AI notes for a tl;dv meeting. */
    "tldv.get_notes": {
      input: {
        /**
         * The tl;dv meeting identifier.
         * @minLength 1
         */
        meetingId: string;
      };
      output: {
        /** The structured notes returned by tl;dv. */
        structuredNotes: Array<{
          /** The tl;dv segment identifier attached to the note. */
          segmentId: string;
          /** The note timestamp in seconds. */
          timestamp: number;
          /** The note text. */
          text: string;
          /** The topic identifier for the note. */
          topicId: string;
        }>;
        /** The meeting notes as Markdown. */
        markdownContent: string;
        /** The AI topics returned by tl;dv. */
        topics: Array<{
          /** The topic identifier. */
          id: string;
          /** The topic sort order. */
          order: number;
          /** The topic title. */
          title: string;
          /** The topic summary. */
          summary: string;
        }>;
      };
    };
    /** Get the structured transcript for a tl;dv meeting. */
    "tldv.get_transcript": {
      input: {
        /**
         * The tl;dv meeting identifier.
         * @minLength 1
         */
        meetingId: string;
      };
      output: {
        /** The transcript identifier. */
        id: string;
        /** The tl;dv meeting identifier. */
        meetingId: string;
        /** The transcript sentences returned by tl;dv. */
        data: Array<{
          /** The speaker for this transcript sentence. */
          speaker: string;
          /** The sentence text. */
          text: string;
          /** The sentence start time in seconds. */
          startTime: number;
          /** The sentence end time in seconds. */
          endTime: number;
        }>;
      };
    };
    /** Submit a publicly accessible recording URL to tl;dv for meeting import and receive the created job payload. */
    "tldv.import_meeting": {
      input: {
        /**
         * The name of the meeting or recording to import.
         * @minLength 1
         */
        name: string;
        /**
         * The publicly accessible recording URL that tl;dv should import. Supported media formats include mp3, mp4, wav, m4a, mkv, mov, avi, wma, and flac.
         * @format uri
         */
        url: string;
        /**
         * The meeting or recording datetime. If omitted, tl;dv uses the current date.
         * @format date-time
         */
        happenedAt?: string;
        /** Whether tl;dv should validate the import without persisting or processing it. */
        dryRun?: boolean;
        /** Email addresses of participants invited to the meeting or recording. */
        participants?: Array<string>;
      };
      output: {
        /** Whether tl;dv accepted the import request. */
        success: boolean;
        /** The tl;dv job identifier created for the import. */
        jobId: string;
        /** The message returned by tl;dv for the import request. */
        message: string;
      };
    };
    /** List tl;dv meetings available to the API key with optional search, date, participation, and meeting-type filters. */
    "tldv.list_meetings": {
      input: {
        /**
         * The text query to search for.
         * @minLength 1
         */
        query?: string;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of meetings to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The date or datetime boundary accepted by tl;dv. */
        from?: string;
        /** The date or datetime boundary accepted by tl;dv. */
        to?: string;
        /** Whether to only return meetings the API key owner participated in. */
        onlyParticipated?: boolean;
        /** The meeting type filter. */
        meetingType?: "internal" | "external";
      };
      output: {
        /** The current page number. */
        page: number;
        /** The total number of available pages. */
        pages: number;
        /** The total number of matching meetings. */
        total: number;
        /** The number of meetings returned per page. */
        pageSize: number;
        /** The meetings returned by tl;dv. */
        results: Array<{
          /** The tl;dv meeting identifier. */
          id?: string;
          /** The meeting name. */
          name?: string;
          /** The date or datetime when the meeting happened. */
          happenedAt?: string;
          /** The tl;dv web URL for opening the meeting. */
          url?: string;
          /** The meeting duration in seconds. */
          duration?: number;
          /** A tl;dv user object. */
          organizer?: {
            /** The user's display name. */
            name?: string;
            /** The user's email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** Users invited to or participating in the meeting. */
          invitees?: Array<{
            /** The user's display name. */
            name?: string;
            /** The user's email address. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The tl;dv template attached to the meeting. */
          template?: unknown;
          /** Additional tl;dv meeting properties. */
          extraProperties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
