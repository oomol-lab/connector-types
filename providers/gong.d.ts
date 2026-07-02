import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Gong call by Gong call ID. */
    "gong.get_call": {
      input: {
        /**
         * Gong's unique numeric identifier for the call.
         * @minLength 1
         */
        callId: string;
      };
      output: {
        /** The Gong request reference ID. */
        requestId: string;
        /** A Gong call object. */
        call: {
          /**
           * Gong's unique numeric identifier for the call.
           * @minLength 1
           */
          id?: string;
          /** The URL to the call page in Gong. */
          url?: string;
          /** The title of the call. */
          title?: string;
          /** The scheduled date and time of the call. */
          scheduled?: string;
          /** The recorded start date and time of the call. */
          started?: string;
          /** The duration of the call in seconds. */
          duration?: number;
          /** The primary user ID of the team member who hosted the call. */
          primaryUserId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get Gong call transcript JSON for calls within a specified date-time range. */
    "gong.get_call_transcripts": {
      input: {
        /**
         * Start date-time for the call range, inclusive, in ISO 8601 format.
         * @format date-time
         */
        fromDateTime: string;
        /**
         * End date-time for the call range, exclusive, in ISO 8601 format.
         * @format date-time
         */
        toDateTime: string;
        /**
         * Optional Gong call IDs to retrieve transcripts for within the date range.
         * @minItems 1
         */
        callIds?: Array<string>;
        /**
         * The Gong cursor value returned by the previous page response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Gong request reference ID. */
        requestId: string;
        /** Gong transcript pagination metadata. */
        records: {
          /** The total number of records matching the request. */
          totalRecords?: number;
          /** The number of records returned in the current page. */
          currentPageSize?: number;
          /** The current page number. */
          currentPageNumber?: number;
          /** The cursor to retrieve the next page, when Gong returned one. */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Gong call transcript entries returned by the request. */
        callTranscripts: Array<{
          /**
           * Gong's unique numeric identifier for the call.
           * @minLength 1
           */
          callId?: string;
          /** Transcript monologues for this call. */
          transcript?: Array<{
            /** The Gong speaker identifier. */
            speakerId?: string;
            /** The topic assigned by Gong when available. */
            topic?: string;
            /** Sentences in this transcript monologue. */
            sentences?: Array<{
              /** The transcript sentence text. */
              text?: string;
              /** The sentence start offset returned by Gong. */
              start?: number;
              /** The sentence end offset returned by Gong. */
              end?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one Gong user by Gong user ID. */
    "gong.get_user": {
      input: {
        /**
         * Gong's unique numeric identifier for the user.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The Gong request reference ID. */
        requestId: string;
        /** A Gong user object. */
        user: {
          /**
           * Gong's unique numeric identifier for the user.
           * @minLength 1
           */
          id?: string;
          /** The email address of the Gong user. */
          emailAddress?: string;
          /** Whether the Gong user is active. */
          active?: boolean;
          /** The first name of the Gong user. */
          firstName?: string;
          /** The last name of the Gong user. */
          lastName?: string;
          /** The job title of the Gong user. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Gong call outcomes configured for the company. */
    "gong.list_call_outcomes": {
      input: Record<string, never>;
      output: {
        /** The Gong request reference ID. */
        requestId: string;
        /** Gong call outcomes returned by the request. */
        outcomes: Array<{
          /** The call outcome name. */
          callOutcome?: string;
          /** The display order for this call outcome. */
          displayOrder?: number;
          /** Whether the outcome is connected or not connected. */
          connectStatus?: string;
          /** The sentiment associated with this outcome. */
          sentiment?: string;
          /** The outcome category. */
          category?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Gong calls that started within a specified date-time range. */
    "gong.list_calls": {
      input: {
        /**
         * Start date-time for the call range, inclusive, in ISO 8601 format.
         * @format date-time
         */
        fromDateTime: string;
        /**
         * End date-time for the call range, exclusive, in ISO 8601 format.
         * @format date-time
         */
        toDateTime: string;
        /**
         * The Gong cursor value returned by the previous page response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Gong workspace identifier used to filter calls.
         * @minLength 1
         */
        workspaceId?: string;
      };
      output: {
        /** The Gong request reference ID. */
        requestId: string;
        /** Gong calls pagination metadata. */
        records: {
          /** The total number of records matching the request. */
          totalRecords?: number;
          /** The number of records returned in the current page. */
          currentPageSize?: number;
          /** The current page number. */
          currentPageNumber?: number;
          /** The cursor to retrieve the next page, when Gong returned one. */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Gong calls returned by the request. */
        calls: Array<{
          /**
           * Gong's unique numeric identifier for the call.
           * @minLength 1
           */
          id?: string;
          /** The URL to the call page in Gong. */
          url?: string;
          /** The title of the call. */
          title?: string;
          /** The scheduled date and time of the call. */
          scheduled?: string;
          /** The recorded start date and time of the call. */
          started?: string;
          /** The duration of the call in seconds. */
          duration?: number;
          /** The primary user ID of the team member who hosted the call. */
          primaryUserId?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Gong users with optional cursor pagination and avatar inclusion. */
    "gong.list_users": {
      input: {
        /**
         * The Gong cursor value returned by the previous page response.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to include Gong employee avatar users in the response. */
        includeAvatars?: boolean;
      };
      output: {
        /** The Gong request reference ID. */
        requestId: string;
        /** Gong users pagination metadata. */
        records: {
          /** The total number of records matching the request. */
          totalRecords?: number;
          /** The number of records returned in the current page. */
          currentPageSize?: number;
          /** The current page number. */
          currentPageNumber?: number;
          /** The cursor to retrieve the next page, when Gong returned one. */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Gong users returned by the request. */
        users: Array<{
          /**
           * Gong's unique numeric identifier for the user.
           * @minLength 1
           */
          id?: string;
          /** The email address of the Gong user. */
          emailAddress?: string;
          /** Whether the Gong user is active. */
          active?: boolean;
          /** The first name of the Gong user. */
          firstName?: string;
          /** The last name of the Gong user. */
          lastName?: string;
          /** The job title of the Gong user. */
          title?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
