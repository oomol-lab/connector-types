import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single Avoma meeting by UUID. */
    "avoma.get_meeting": {
      input: {
        /**
         * Unique ID of the Avoma meeting.
         * @format uuid
         */
        meetingUuid: string;
        /** Whether Avoma should include CRM associations. */
        includeCrmAssociations?: boolean;
      };
      output: {
        /** Raw Avoma meeting object. */
        meeting: Record<string, unknown>;
      };
    };
    /** Get AI notes, keywords, speakers, and related insights for a completed Avoma meeting. */
    "avoma.get_meeting_insights": {
      input: {
        /**
         * Unique ID of the Avoma meeting.
         * @format uuid
         */
        meetingUuid: string;
      };
      output: {
        /** Raw Avoma meeting insights object. */
        insights: Record<string, unknown>;
      };
    };
    /** Get Avoma recording download URLs by recording UUID when the recording is ready. */
    "avoma.get_recording": {
      input: {
        /**
         * Unique ID of the Avoma recording.
         * @format uuid
         */
        recordingUuid: string;
      };
      output: {
        /** HTTP status returned by Avoma for this recording lookup. */
        status: number;
        /** Raw Avoma recording response. */
        recording: Record<string, unknown>;
      };
    };
    /** Get Avoma recording download URLs for a meeting UUID when the recording is ready. */
    "avoma.get_recording_for_meeting": {
      input: {
        /**
         * Unique ID of the Avoma meeting.
         * @format uuid
         */
        meetingUuid: string;
      };
      output: {
        /** HTTP status returned by Avoma for this recording lookup. */
        status: number;
        /** Raw Avoma recording response. */
        recording: Record<string, unknown>;
      };
    };
    /** Get a single Avoma transcription by UUID. */
    "avoma.get_transcription": {
      input: {
        /**
         * Unique ID of the Avoma transcription.
         * @format uuid
         */
        transcriptionUuid: string;
      };
      output: {
        /** Raw Avoma transcription object. */
        transcription: Record<string, unknown>;
      };
    };
    /** Get a single Avoma user by UUID. */
    "avoma.get_user": {
      input: {
        /**
         * Unique ID of the Avoma user.
         * @format uuid
         */
        userUuid: string;
      };
      output: {
        /** Raw Avoma user object. */
        user: Record<string, unknown>;
      };
    };
    /** List Avoma meetings within a UTC date range, with optional attendee, CRM, and meeting filters. */
    "avoma.list_meetings": {
      input: {
        /**
         * Start date-time in UTC RFC3339 format.
         * @format date-time
         */
        fromDate: string;
        /**
         * End date-time in UTC RFC3339 format.
         * @format date-time
         */
        toDate: string;
        /**
         * Page number for paginated Avoma responses.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records returned per response.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Minimum recording duration in seconds. Meetings without recordings are excluded by Avoma when this filter is used.
         * @minimum 0
         */
        recordingDurationGte?: number;
        /** Whether to return only voice call meetings or only video meetings. */
        isCall?: boolean;
        /** Whether to return only internal meetings or only meetings with external attendees. */
        isInternal?: boolean;
        /**
         * Attendee email addresses to filter by.
         * @minItems 1
         */
        attendeeEmails?: Array<string>;
        /**
         * CRM account external IDs to filter by.
         * @minItems 1
         */
        crmAccountIds?: Array<string>;
        /**
         * CRM opportunity external IDs to filter by.
         * @minItems 1
         */
        crmOpportunityIds?: Array<string>;
        /**
         * CRM contact external IDs to filter by.
         * @minItems 1
         */
        crmContactIds?: Array<string>;
        /**
         * CRM lead external IDs to filter by.
         * @minItems 1
         */
        crmLeadIds?: Array<string>;
        /** Whether Avoma should include CRM associations. */
        includeCrmAssociations?: boolean;
        /** Meeting ordering requested from Avoma. */
        order?: "start_at" | "-start_at";
      };
      output: {
        /**
         * Total number of records returned by Avoma.
         * @minimum 0
         */
        count: number;
        /** URL to the next page if Avoma returned one. */
        next: string | null;
        /** URL to the previous page if Avoma returned one. */
        previous: string | null;
        /** Meeting objects returned by Avoma. */
        meetings: Array<Record<string, unknown>>;
      };
    };
    /** List Avoma transcriptions for meetings within a UTC date range, with optional attendee and CRM filters. */
    "avoma.list_transcriptions": {
      input: {
        /**
         * Start date-time in UTC RFC3339 format.
         * @format date-time
         */
        fromDate: string;
        /**
         * End date-time in UTC RFC3339 format.
         * @format date-time
         */
        toDate: string;
        /**
         * Page number for paginated Avoma responses.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records returned per response.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Attendee email addresses to filter by.
         * @minItems 1
         */
        attendeeEmails?: Array<string>;
        /**
         * CRM account external IDs to filter by.
         * @minItems 1
         */
        crmAccountIds?: Array<string>;
        /**
         * CRM opportunity external IDs to filter by.
         * @minItems 1
         */
        crmOpportunityIds?: Array<string>;
        /**
         * CRM contact external IDs to filter by.
         * @minItems 1
         */
        crmContactIds?: Array<string>;
        /**
         * CRM lead external IDs to filter by.
         * @minItems 1
         */
        crmLeadIds?: Array<string>;
      };
      output: {
        /**
         * Total number of records returned by Avoma.
         * @minimum 0
         */
        count: number;
        /** URL to the next page if Avoma returned one. */
        next: string | null;
        /** URL to the previous page if Avoma returned one. */
        previous: string | null;
        /** Transcription objects returned by Avoma. */
        transcriptions: Array<Record<string, unknown>>;
      };
    };
    /** List Avoma users visible to the API key. */
    "avoma.list_users": {
      input: Record<string, never>;
      output: {
        /** User objects returned by Avoma. */
        users: Array<Record<string, unknown>>;
      };
    };
  }
}
