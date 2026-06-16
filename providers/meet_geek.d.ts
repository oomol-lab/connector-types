import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get highlights for a MeetGeek meeting, optionally filtered by type. */
    "meet_geek.get_highlights": {
      input: {
        /**
         * MeetGeek meeting identifier.
         * @minLength 1
         */
        meetingId: string;
        /**
         * Optional MeetGeek highlight type, such as next_steps.
         * @minLength 1
         */
        type?: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** MeetGeek meeting identifier returned with the highlights. */
        meetingId: string;
        /** Highlight records returned by MeetGeek. */
        highlights: Array<Record<string, unknown>>;
      };
    };
    /** Get KPI and improvement insights for a MeetGeek meeting. */
    "meet_geek.get_insights": {
      input: {
        /**
         * MeetGeek meeting identifier.
         * @minLength 1
         */
        meetingId: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** A MeetGeek object returned by the API. */
        insights: Record<string, unknown>;
      };
    };
    /** Get details for a MeetGeek meeting. */
    "meet_geek.get_meeting": {
      input: {
        /**
         * MeetGeek meeting identifier.
         * @minLength 1
         */
        meetingId: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** A MeetGeek object returned by the API. */
        meeting: Record<string, unknown>;
      };
    };
    /** Get the summary and AI insights for a MeetGeek meeting. */
    "meet_geek.get_summary": {
      input: {
        /**
         * MeetGeek meeting identifier.
         * @minLength 1
         */
        meetingId: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** MeetGeek meeting identifier returned with the summary. */
        meetingId: string;
        /** Meeting summary text returned by MeetGeek. */
        summary: string;
        /** AI insights text returned by MeetGeek. */
        aiInsights: string;
        /** A MeetGeek object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get paginated transcript sentences for a MeetGeek meeting. */
    "meet_geek.get_transcript": {
      input: {
        /**
         * MeetGeek meeting identifier.
         * @minLength 1
         */
        meetingId: string;
        /**
         * Number of records to fetch, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** Pagination cursor returned by MeetGeek. */
        cursor?: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** MeetGeek meeting identifier returned with the transcript. */
        meetingId: string;
        /** Transcript sentence records returned by MeetGeek. */
        sentences: Array<Record<string, unknown>>;
        /** MeetGeek pagination metadata. */
        pagination: {
          /** Cursor for the next page of results. */
          next?: string;
          /** Number of records requested for this page. */
          limit?: number;
          [key: string]: unknown;
        };
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** List paginated past meetings from MeetGeek. */
    "meet_geek.list_meetings": {
      input: {
        /**
         * Number of records to fetch, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** Pagination cursor returned by MeetGeek. */
        cursor?: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** Meetings returned by MeetGeek. */
        meetings: Array<Record<string, unknown>>;
        /** MeetGeek pagination metadata. */
        pagination: {
          /** Cursor for the next page of results. */
          next?: string;
          /** Number of records requested for this page. */
          limit?: number;
          [key: string]: unknown;
        };
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** List paginated past meetings for a MeetGeek team. */
    "meet_geek.list_team_meetings": {
      input: {
        /**
         * MeetGeek team identifier.
         * @minimum 1
         */
        teamId: number;
        /**
         * Number of records to fetch, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** Pagination cursor returned by MeetGeek. */
        cursor?: string;
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** Meetings returned by MeetGeek. */
        meetings: Array<Record<string, unknown>>;
        /** MeetGeek pagination metadata. */
        pagination: {
          /** Cursor for the next page of results. */
          next?: string;
          /** Number of records requested for this page. */
          limit?: number;
          [key: string]: unknown;
        };
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** List MeetGeek teams available to the API key. */
    "meet_geek.list_teams": {
      input: {
        /** MeetGeek API region used for the request. */
        region?: "default" | "eu" | "us";
      };
      output: {
        /** Teams where the API key can share meetings. */
        shareAccess: Array<Record<string, unknown>>;
        /** Teams where the API key can view meetings. */
        viewAccess: Array<Record<string, unknown>>;
      };
    };
  }
}
