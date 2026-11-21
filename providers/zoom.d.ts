import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Zoom meeting for a user with the core official scheduling fields and first-pass settings. */
    "zoom.create_meeting": {
      input: {
        /**
         * The Zoom user ID or email address. Use me when the credential can act on the current app user.
         * @minLength 1
         * @pattern \S
         */
        userId?: string;
        /**
         * The meeting topic.
         * @minLength 1
         * @maxLength 200
         */
        topic?: string;
        /** The Zoom meeting type: 1 instant, 2 scheduled, 3 recurring with no fixed time, 4 PMI, 8 recurring with fixed time, or 10 screen share only. */
        type?: 1 | 2 | 3 | 4 | 8 | 10;
        /**
         * A Zoom date-time value. Use UTC format such as 2026-05-18T09:00:00Z, or a local date-time with timezone.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The scheduled meeting duration in minutes.
         * @minimum 1
         * @maximum 1440
         */
        duration?: number;
        /**
         * The meeting timezone, such as America/Los_Angeles, Asia/Tokyo, or UTC.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The meeting agenda. Zoom allows up to 2,000 characters.
         * @maxLength 2000
         */
        agenda?: string;
        /**
         * The passcode required to join the meeting.
         * @minLength 1
         */
        password?: string;
        /**
         * The email address or user ID of the user to schedule for.
         * @minLength 1
         */
        scheduleFor?: string;
        /** Meeting settings supported by the first Zoom provider pass. */
        settings?: {
          /** Whether to start the meeting with host video enabled. */
          hostVideo?: boolean;
          /** Whether to start the meeting with participant video enabled. */
          participantVideo?: boolean;
          /** Whether participants can join before the host. */
          joinBeforeHost?: boolean;
          /** Whether Zoom Waiting Room is enabled. */
          waitingRoom?: boolean;
          /** Whether participants are muted when they enter. */
          muteUponEntry?: boolean;
          /** The automatic recording mode for the meeting. */
          autoRecording?: "local" | "cloud" | "none";
          /** How participants join audio. */
          audio?: "both" | "telephony" | "voip" | "thirdParty";
          /** The meeting registration approval type documented by Zoom. */
          approvalType?: number;
          /** The registration type documented by Zoom. */
          registrationType?: number;
          /** Whether participants must authenticate before joining. */
          enforceLogin?: boolean;
        };
        /** Recurrence settings for Zoom recurring meetings. */
        recurrence?: {
          /**
           * The recurrence type: 1 daily, 2 weekly, or 3 monthly.
           * @minimum 1
           * @maximum 3
           */
          type: number;
          /**
           * The interval at which the meeting recurs.
           * @minimum 1
           */
          repeatInterval?: number;
          /**
           * The weekly days string documented by Zoom, such as 1 for Sunday or comma-separated values.
           * @minLength 1
           */
          weeklyDays?: string;
          /**
           * The day of the month for monthly recurrence.
           * @minimum 1
           * @maximum 31
           */
          monthlyDay?: number;
          /**
           * The number of recurrences before the meeting stops.
           * @minimum 1
           */
          endTimes?: number;
          /**
           * A Zoom date-time value. Use UTC format such as 2026-05-18T09:00:00Z, or a local date-time with timezone.
           * @minLength 1
           */
          endDateTime?: string;
        };
      };
      output: {
        /** A normalized Zoom meeting record. */
        meeting: {
          /** The unique meeting UUID returned by Zoom. */
          uuid: string | null;
          /** The Zoom meeting ID. Zoom may return large numeric IDs as numbers or strings. */
          id: number | string | null;
          /** The Zoom user ID of the host. */
          hostId: string | null;
          /** The host email address. */
          hostEmail: string | null;
          /** The meeting topic. */
          topic: string | null;
          /** The Zoom meeting type numeric code. */
          type: number | null;
          /** The meeting status returned by Zoom. */
          status: string | null;
          /** The meeting start time returned by Zoom. */
          startTime: string | null;
          /** The scheduled meeting duration in minutes. */
          duration: number | null;
          /** The meeting timezone. */
          timezone: string | null;
          /** The meeting agenda. */
          agenda: string | null;
          /** The participant join URL. */
          joinUrl: string | null;
          /** The host start URL, when Zoom returns it. */
          startUrl: string | null;
          /** The meeting passcode, when Zoom returns it. */
          password: string | null;
          /** The timestamp when the meeting was created. */
          createdAt: string | null;
          /** The raw Zoom meeting object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch the AI Companion summary of one meeting instance by its UUID. When Zoom answers 403 code 2305 (summary access restricted to IP ranges, summaries shared by email only, or the summary in Trash), the result is available false with a reason instead of an error. */
    "zoom.get_meeting_summary": {
      input: {
        /**
         * The meeting instance UUID returned by list_user_meeting_summaries.
         * @minLength 1
         */
        meetingUuid: string;
      };
      output: {
        /** Whether Zoom returned the summary through the API. */
        available: boolean;
        /** Zoom answered 403 code 2305: the account restricts summary access to IP ranges or shares summaries by email only, or the summary is in Trash; unavailableMessage carries Zoom's own wording. */
        unavailableReason: "not_accessible" | null;
        /** Zoom's own message when the summary is not available. */
        unavailableMessage: string | null;
        /** The content and metadata of one Zoom AI Companion meeting summary. */
        summary: {
          /** The original Zoom summary record, including additional upstream fields. */
          raw: Record<string, unknown>;
          /** The meeting instance UUID. Pass it to get_meeting_summary; it differs for every occurrence. */
          meetingUuid: string | null;
          /** The numeric Zoom meeting ID, shared by every occurrence of a recurring meeting. */
          meetingId: number | string | null;
          /** The Zoom user ID of the meeting host. */
          meetingHostId: string | null;
          /** The email address of the meeting host. */
          meetingHostEmail: string | null;
          /** The meeting topic. */
          meetingTopic: string | null;
          /** The time the meeting started. */
          meetingStartTime: string | null;
          /** The time the meeting ended. */
          meetingEndTime: string | null;
          /** The start of the meeting span the summary covers. */
          summaryStartTime: string | null;
          /** The end of the meeting span the summary covers. */
          summaryEndTime: string | null;
          /** The time Zoom created the summary. */
          summaryCreatedTime: string | null;
          /** The time the summary was last edited. */
          summaryLastModifiedTime: string | null;
          /** The Zoom user ID of the last editor of the summary. */
          summaryLastModifiedUserId: string | null;
          /** The email address of the last editor of the summary. */
          summaryLastModifiedUserEmail: string | null;
          /** The summary title. */
          summaryTitle: string | null;
          /** The full summary in Markdown, Zoom's unified summary field. */
          summaryContent: string | null;
          /** The URL of the summary document in Zoom Docs, when Zoom returns one. */
          summaryDocUrl: string | null;
          /** The legacy overview paragraph. Zoom marks it deprecated. */
          summaryOverview: string | null;
          /** Labelled sections of the legacy summary. */
          summaryDetails: Array<{
            /** The section label. */
            label: string | null;
            /** The section text. */
            summary: string | null;
          }>;
          /** Legacy next-step strings Zoom extracted from the meeting. */
          nextSteps: Array<string>;
          /** The user-edited version of the legacy fields, when someone edited the summary. */
          editedSummary: {
            /** The edited overview paragraph. */
            summaryOverview: string | null;
            /** The edited details, as text or as labelled sections. */
            summaryDetails: string | Array<{
              /** The section label. */
              label: string | null;
              /** The section text. */
              summary: string | null;
            }>;
            /** Legacy next-step strings Zoom extracted from the meeting. */
            nextSteps: Array<string>;
          } | null;
        } | null;
      };
    };
    /** Fetch one Zoom user by ID or email, or the connected user when userId is omitted. */
    "zoom.get_user": {
      input: {
        /**
         * The Zoom user ID or email address. Use me when the credential can act on the current app user.
         * @minLength 1
         * @pattern \S
         * @default "me"
         */
        userId?: string;
      };
      output: {
        /** A normalized Zoom user record. */
        user: {
          /** The Zoom user identifier. */
          id: string | null;
          /** The user's email address. */
          email: string | null;
          /** The user's first name. */
          firstName: string | null;
          /** The user's last name. */
          lastName: string | null;
          /** The user's display name when returned by Zoom. */
          displayName: string | null;
          /** The Zoom user type numeric code. */
          type: number | null;
          /** The user's Zoom account status. */
          status: string | null;
          /** The user's timezone. */
          timezone: string | null;
          /** The timestamp when the user was created. */
          createdAt: string | null;
          /** The timestamp when the user last logged in. */
          lastLoginTime: string | null;
          /** The user's personal meeting ID. */
          pmi: string | null;
          /** The raw Zoom user object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List scheduled, live, upcoming, or previous meetings for a Zoom user using official pagination. */
    "zoom.list_meetings": {
      input: {
        /**
         * The Zoom user ID or email address. Use me when the credential can act on the current app user.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
        /** The meeting list type to request from Zoom. */
        type?: "scheduled" | "live" | "upcoming" | "upcoming_meetings" | "previous_meetings";
        /**
         * A Zoom date filter in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * A Zoom date filter in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
        /**
         * The timezone used to interpret the from and to filters.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The number of records returned within a single API call.
         * @minimum 1
         * @maximum 300
         */
        pageSize?: number;
        /**
         * The next_page_token value returned by Zoom for the next page of results.
         * @minLength 1
         */
        nextPageToken?: string;
      };
      output: {
        /** Pagination metadata returned by Zoom list endpoints. */
        pagination: {
          /** The number of records requested or returned for this page. */
          pageSize: number | null;
          /** The total number of records Zoom reported. */
          totalRecords: number | null;
          /** The token to request the next page, when Zoom returned one. */
          nextPageToken: string | null;
        };
        /** The normalized Zoom meetings returned for this page. */
        meetings: Array<{
          /** The unique meeting UUID returned by Zoom. */
          uuid: string | null;
          /** The Zoom meeting ID. Zoom may return large numeric IDs as numbers or strings. */
          id: number | string | null;
          /** The Zoom user ID of the host. */
          hostId: string | null;
          /** The host email address. */
          hostEmail: string | null;
          /** The meeting topic. */
          topic: string | null;
          /** The Zoom meeting type numeric code. */
          type: number | null;
          /** The meeting status returned by Zoom. */
          status: string | null;
          /** The meeting start time returned by Zoom. */
          startTime: string | null;
          /** The scheduled meeting duration in minutes. */
          duration: number | null;
          /** The meeting timezone. */
          timezone: string | null;
          /** The meeting agenda. */
          agenda: string | null;
          /** The participant join URL. */
          joinUrl: string | null;
          /** The host start URL, when Zoom returns it. */
          startUrl: string | null;
          /** The meeting passcode, when Zoom returns it. */
          password: string | null;
          /** The timestamp when the meeting was created. */
          createdAt: string | null;
          /** The raw Zoom meeting object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List a user's AI Companion meeting summaries in a time window, newest first, without their content. Zoom's page token expires 15 minutes after it is issued; an expired token is refused as invalid input. */
    "zoom.list_user_meeting_summaries": {
      input: {
        /**
         * The Zoom user ID or email address. Use me when the credential can act on the current app user.
         * @minLength 1
         * @pattern \S
         * @default "me"
         */
        userId?: string;
        /**
         * A UTC date-time in Zoom's yyyy-MM-ddTHH:mm:ssZ form, such as 2026-11-01T00:00:00Z.
         * @format date-time
         */
        from?: string;
        /**
         * A UTC date-time in Zoom's yyyy-MM-ddTHH:mm:ssZ form, such as 2026-11-01T00:00:00Z.
         * @format date-time
         */
        to?: string;
        /** Which summary time from and to filter on. Zoom defaults to summary_start_time. */
        timeFilterField?: "summary_start_time" | "summary_created_time";
        /**
         * The number of summaries per page. Zoom defaults to 30.
         * @minimum 1
         * @maximum 300
         */
        pageSize?: number;
        /**
         * The next_page_token value returned by Zoom for the next page of results.
         * @minLength 1
         */
        nextPageToken?: string;
      };
      output: {
        /** The summaries on this page; empty when the window has none. */
        summaries: Array<{
          /** The original Zoom summary record, including additional upstream fields. */
          raw: Record<string, unknown>;
          /** The meeting instance UUID. Pass it to get_meeting_summary; it differs for every occurrence. */
          meetingUuid: string | null;
          /** The numeric Zoom meeting ID, shared by every occurrence of a recurring meeting. */
          meetingId: number | string | null;
          /** The Zoom user ID of the meeting host. */
          meetingHostId: string | null;
          /** The email address of the meeting host. */
          meetingHostEmail: string | null;
          /** The meeting topic. */
          meetingTopic: string | null;
          /** The time the meeting started. */
          meetingStartTime: string | null;
          /** The time the meeting ended. */
          meetingEndTime: string | null;
          /** The start of the meeting span the summary covers. */
          summaryStartTime: string | null;
          /** The end of the meeting span the summary covers. */
          summaryEndTime: string | null;
          /** The time Zoom created the summary. */
          summaryCreatedTime: string | null;
          /** The time the summary was last edited. */
          summaryLastModifiedTime: string | null;
        }>;
        /** The token for the next page, or null on the last page. */
        nextPageToken: string | null;
        /** The page size Zoom applied. */
        pageSize: number | null;
        /** The window start Zoom applied. */
        from: string | null;
        /** The window end Zoom applied. */
        to: string | null;
      };
    };
    /** Update a Zoom meeting by meeting ID with the core official scheduling fields and first-pass settings. */
    "zoom.update_meeting": {
      input: {
        /** The Zoom meeting ID returned by create_meeting, list_meetings, or another upstream workflow. */
        meetingId: number | string;
        /**
         * The meeting topic.
         * @minLength 1
         * @maxLength 200
         */
        topic?: string;
        /** The Zoom meeting type: 1 instant, 2 scheduled, 3 recurring with no fixed time, 4 PMI, 8 recurring with fixed time, or 10 screen share only. */
        type?: 1 | 2 | 3 | 4 | 8 | 10;
        /**
         * A Zoom date-time value. Use UTC format such as 2026-05-18T09:00:00Z, or a local date-time with timezone.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The scheduled meeting duration in minutes.
         * @minimum 1
         * @maximum 1440
         */
        duration?: number;
        /**
         * The meeting timezone, such as America/Los_Angeles, Asia/Tokyo, or UTC.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The meeting agenda. Zoom allows up to 2,000 characters.
         * @maxLength 2000
         */
        agenda?: string;
        /**
         * The passcode required to join the meeting.
         * @minLength 1
         */
        password?: string;
        /**
         * The email address or user ID of the user to schedule for.
         * @minLength 1
         */
        scheduleFor?: string;
        /** Meeting settings supported by the first Zoom provider pass. */
        settings?: {
          /** Whether to start the meeting with host video enabled. */
          hostVideo?: boolean;
          /** Whether to start the meeting with participant video enabled. */
          participantVideo?: boolean;
          /** Whether participants can join before the host. */
          joinBeforeHost?: boolean;
          /** Whether Zoom Waiting Room is enabled. */
          waitingRoom?: boolean;
          /** Whether participants are muted when they enter. */
          muteUponEntry?: boolean;
          /** The automatic recording mode for the meeting. */
          autoRecording?: "local" | "cloud" | "none";
          /** How participants join audio. */
          audio?: "both" | "telephony" | "voip" | "thirdParty";
          /** The meeting registration approval type documented by Zoom. */
          approvalType?: number;
          /** The registration type documented by Zoom. */
          registrationType?: number;
          /** Whether participants must authenticate before joining. */
          enforceLogin?: boolean;
        };
        /** Recurrence settings for Zoom recurring meetings. */
        recurrence?: {
          /**
           * The recurrence type: 1 daily, 2 weekly, or 3 monthly.
           * @minimum 1
           * @maximum 3
           */
          type: number;
          /**
           * The interval at which the meeting recurs.
           * @minimum 1
           */
          repeatInterval?: number;
          /**
           * The weekly days string documented by Zoom, such as 1 for Sunday or comma-separated values.
           * @minLength 1
           */
          weeklyDays?: string;
          /**
           * The day of the month for monthly recurrence.
           * @minimum 1
           * @maximum 31
           */
          monthlyDay?: number;
          /**
           * The number of recurrences before the meeting stops.
           * @minimum 1
           */
          endTimes?: number;
          /**
           * A Zoom date-time value. Use UTC format such as 2026-05-18T09:00:00Z, or a local date-time with timezone.
           * @minLength 1
           */
          endDateTime?: string;
        };
      };
      output: {
        /** Whether Zoom accepted the meeting update request. */
        success: boolean;
        /** The Zoom meeting ID returned by create_meeting, list_meetings, or another upstream workflow. */
        meetingId: number | string;
      };
    };
  }
}
