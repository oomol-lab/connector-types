import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Accept an event invitation for the connected account. */
    "outlook_calendar.accept_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
        /** Optional response message sent to the organizer. */
        comment?: string;
        /** Whether to send the response to the organizer. */
        sendResponse?: boolean;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Cancel an organized event and notify its attendees. */
    "outlook_calendar.cancel_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
        /** Cancellation message sent to attendees. */
        comment?: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Create an event in the default calendar or a selected calendar. */
    "outlook_calendar.create_event": {
      input: {
        /**
         * Outlook calendar ID.
         * @minLength 1
         */
        calendarId?: string;
        /** Event creation payload. */
        event: {
          /** Event subject. */
          subject: string;
          /** Event body. */
          body?: {
            /** Body content type. */
            contentType: "text" | "html";
            /** Body content. */
            content: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          start: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          end: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Event location. */
          location?: {
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          };
          /** Event locations. */
          locations?: Array<{
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          }>;
          /** Event attendees. */
          attendees?: Array<{
            /** Email address and optional display name. */
            emailAddress: {
              /**
               * Email address.
               * @format email
               */
              address: string;
              /** Display name. */
              name?: string;
            };
            /** Attendee type. */
            type: "required" | "optional" | "resource";
          }>;
          /**
           * Outlook categories assigned to the event.
           * @minItems 1
           */
          categories?: Array<string>;
          /** Event importance. */
          importance?: "low" | "normal" | "high";
          /** Event sensitivity. */
          sensitivity?: "normal" | "personal" | "private" | "confidential";
          /** Free/busy status shown for the event. */
          showAs?: "free" | "tentative" | "busy" | "oof" | "workingElsewhere" | "unknown";
          /** Whether the event lasts all day. */
          isAllDay?: boolean;
          /** Whether to create an online meeting. */
          isOnlineMeeting?: boolean;
          /** Online meeting provider. */
          onlineMeetingProvider?: "unknown" | "skypeForBusiness" | "skypeForConsumer" | "teamsForBusiness";
          /** A Microsoft Graph object. */
          recurrence?: Record<string, unknown>;
          /** Whether attendee responses are requested. */
          responseRequested?: boolean;
          /** Whether attendees may propose a new time. */
          allowNewTimeProposals?: boolean;
          /** Client-generated identifier used to avoid duplicate creates. */
          transactionId?: string;
        };
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id?: string;
        /** iCalendar UID. */
        iCalUId?: string;
        /** Recurring series master ID. */
        seriesMasterId?: string | null;
        /** Event type. */
        type?: string;
        /** Event subject. */
        subject?: string;
        /** A Microsoft Graph object. */
        body?: Record<string, unknown>;
        /** Plain-text body preview. */
        bodyPreview?: string;
        /** Microsoft Graph dateTimeTimeZone value. */
        start?: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Microsoft Graph dateTimeTimeZone value. */
        end?: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Event location. */
        location?: {
          /** Location display name. */
          displayName?: string;
          /** Location email address. */
          locationEmailAddress?: string;
          /** Microsoft Graph location type. */
          locationType?: string;
          /** Provider location identifier. */
          uniqueId?: string;
          /** Provider location identifier type. */
          uniqueIdType?: string;
          [key: string]: unknown;
        };
        /** Event locations. */
        locations?: Array<{
          /** Location display name. */
          displayName?: string;
          /** Location email address. */
          locationEmailAddress?: string;
          /** Microsoft Graph location type. */
          locationType?: string;
          /** Provider location identifier. */
          uniqueId?: string;
          /** Provider location identifier type. */
          uniqueIdType?: string;
          [key: string]: unknown;
        }>;
        /** Attendees and their response status. */
        attendees?: Array<Record<string, unknown>>;
        /** A Microsoft Graph object. */
        organizer?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        recurrence?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        responseStatus?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        onlineMeeting?: Record<string, unknown>;
        /** Legacy online meeting URL. */
        onlineMeetingUrl?: string | null;
        /** Outlook web URL for the event. */
        webLink?: string;
        /** Whether the event is cancelled. */
        isCancelled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Decline an event invitation for the connected account. */
    "outlook_calendar.decline_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
        /** Optional response message sent to the organizer. */
        comment?: string;
        /** Whether to send the response to the organizer. */
        sendResponse?: boolean;
        /** Alternative meeting time; sendResponse must be true when this is provided. */
        proposedNewTime?: {
          /** Microsoft Graph dateTimeTimeZone value. */
          start: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          end: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
        };
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Delete an Outlook event; deleting an organized meeting sends a cancellation to attendees. */
    "outlook_calendar.delete_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Suggest meeting times that satisfy attendee, location, and time constraints. */
    "outlook_calendar.find_meeting_times": {
      input: {
        /** People or resources invited to the meeting; an empty array checks only the organizer. */
        attendees?: Array<{
          /** Email address and optional display name. */
          emailAddress: {
            /**
             * Email address.
             * @format email
             */
            address: string;
            /** Display name. */
            name?: string;
          };
          /** Attendee type. */
          type: "required" | "optional" | "resource";
        }>;
        /** A Microsoft Graph object. */
        locationConstraint?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        timeConstraint?: Record<string, unknown>;
        /**
         * ISO 8601 duration, such as PT1H.
         * @minLength 1
         */
        meetingDuration?: string;
        /**
         * Maximum suggestions to return.
         * @minimum 1
         */
        maxCandidates?: number;
        /** Whether the organizer may be unavailable. */
        isOrganizerOptional?: boolean;
        /** Whether each suggestion includes an explanation. */
        returnSuggestionReasons?: boolean;
        /**
         * Minimum attendee availability percentage.
         * @minimum 0
         * @maximum 100
         */
        minimumAttendeePercentage?: number;
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /** Reason no meeting time could be suggested. */
        emptySuggestionsReason?: string | null;
        /** Meeting time suggestions returned by Microsoft Graph. */
        meetingTimeSuggestions?: Array<{
          /** Suggested meeting interval. */
          meetingTimeSlot?: {
            /** Microsoft Graph dateTimeTimeZone value. */
            start: {
              /**
               * Local date and time, such as 2026-09-16T10:00:00.
               * @minLength 1
               */
              dateTime: string;
              /**
               * Windows time zone name, such as UTC or Pacific Standard Time.
               * @minLength 1
               */
              timeZone: string;
            };
            /** Microsoft Graph dateTimeTimeZone value. */
            end: {
              /**
               * Local date and time, such as 2026-09-16T10:00:00.
               * @minLength 1
               */
              dateTime: string;
              /**
               * Windows time zone name, such as UTC or Pacific Standard Time.
               * @minLength 1
               */
              timeZone: string;
            };
          };
          /**
           * Suggestion confidence percentage.
           * @minimum 0
           * @maximum 100
           */
          confidence?: number;
          /** Organizer availability for the suggestion. */
          organizerAvailability?: string;
          /** Availability of each attendee. */
          attendeeAvailability?: Array<Record<string, unknown>>;
          /** Suggested meeting locations. */
          locations?: Array<Record<string, unknown>>;
          /** Explanation for the suggestion. */
          suggestionReason?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get one Outlook calendar by ID. */
    "outlook_calendar.get_calendar": {
      input: {
        /**
         * Outlook calendar ID.
         * @minLength 1
         */
        calendarId: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Calendar name.
         * @minLength 1
         */
        name?: string;
        /** Calendar color. */
        color?: string;
        /** Calendar hexadecimal color. */
        hexColor?: string;
        /** Whether the current user may edit this calendar. */
        canEdit?: boolean;
        /** Whether the current user may share this calendar. */
        canShare?: boolean;
        /** Whether private event details are visible. */
        canViewPrivateItems?: boolean;
        /** Whether this is the default calendar. */
        isDefaultCalendar?: boolean;
        /** A Microsoft Graph object. */
        owner?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the profile for the connected Microsoft account. */
    "outlook_calendar.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * Microsoft account ID.
         * @minLength 1
         */
        id?: string;
        /** Account display name. */
        displayName?: string;
        /** Primary email address. */
        mail?: string | null;
        /** User principal name. */
        userPrincipalName?: string;
        [key: string]: unknown;
      };
    };
    /** Get one Outlook event by ID. */
    "outlook_calendar.get_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id?: string;
        /** iCalendar UID. */
        iCalUId?: string;
        /** Recurring series master ID. */
        seriesMasterId?: string | null;
        /** Event type. */
        type?: string;
        /** Event subject. */
        subject?: string;
        /** A Microsoft Graph object. */
        body?: Record<string, unknown>;
        /** Plain-text body preview. */
        bodyPreview?: string;
        /** Microsoft Graph dateTimeTimeZone value. */
        start?: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Microsoft Graph dateTimeTimeZone value. */
        end?: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Event location. */
        location?: {
          /** Location display name. */
          displayName?: string;
          /** Location email address. */
          locationEmailAddress?: string;
          /** Microsoft Graph location type. */
          locationType?: string;
          /** Provider location identifier. */
          uniqueId?: string;
          /** Provider location identifier type. */
          uniqueIdType?: string;
          [key: string]: unknown;
        };
        /** Event locations. */
        locations?: Array<{
          /** Location display name. */
          displayName?: string;
          /** Location email address. */
          locationEmailAddress?: string;
          /** Microsoft Graph location type. */
          locationType?: string;
          /** Provider location identifier. */
          uniqueId?: string;
          /** Provider location identifier type. */
          uniqueIdType?: string;
          [key: string]: unknown;
        }>;
        /** Attendees and their response status. */
        attendees?: Array<Record<string, unknown>>;
        /** A Microsoft Graph object. */
        organizer?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        recurrence?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        responseStatus?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        onlineMeeting?: Record<string, unknown>;
        /** Legacy online meeting URL. */
        onlineMeetingUrl?: string | null;
        /** Outlook web URL for the event. */
        webLink?: string;
        /** Whether the event is cancelled. */
        isCancelled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get free and busy availability for users, rooms, or resources. */
    "outlook_calendar.get_schedule": {
      input: {
        /**
         * SMTP addresses whose availability should be returned.
         * @minItems 1
         */
        schedules: Array<string>;
        /** Microsoft Graph dateTimeTimeZone value. */
        startTime: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Microsoft Graph dateTimeTimeZone value. */
        endTime: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /**
         * Availability interval in minutes.
         * @minimum 5
         * @maximum 1440
         */
        availabilityViewInterval?: number;
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /** Availability results by schedule. */
        schedules: Array<{
          /**
           * SMTP address represented by this availability result.
           * @minLength 1
           */
          scheduleId?: string;
          /** Merged availability view for the requested interval. */
          availabilityView?: string;
          /** Busy intervals returned for the schedule. */
          scheduleItems?: Array<{
            /** Free/busy status. */
            status?: string;
            /** Schedule item subject when visible. */
            subject?: string;
            /** Schedule item location when visible. */
            location?: string;
            /** Microsoft Graph dateTimeTimeZone value. */
            start?: {
              /**
               * Local date and time, such as 2026-09-16T10:00:00.
               * @minLength 1
               */
              dateTime: string;
              /**
               * Windows time zone name, such as UTC or Pacific Standard Time.
               * @minLength 1
               */
              timeZone: string;
            };
            /** Microsoft Graph dateTimeTimeZone value. */
            end?: {
              /**
               * Local date and time, such as 2026-09-16T10:00:00.
               * @minLength 1
               */
              dateTime: string;
              /**
               * Windows time zone name, such as UTC or Pacific Standard Time.
               * @minLength 1
               */
              timeZone: string;
            };
            [key: string]: unknown;
          }>;
          /** A Microsoft Graph object. */
          workingHours?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          error?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List event occurrences and exceptions within a date-time range. */
    "outlook_calendar.list_calendar_view": {
      input: {
        /**
         * Outlook calendar ID.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Inclusive range start as an ISO 8601 timestamp.
         * @format date-time
         */
        startDateTime: string;
        /**
         * Exclusive range end as an ISO 8601 timestamp.
         * @format date-time
         */
        endDateTime: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /** OData filter expression. */
        filter?: string;
        /** OData orderby expression. */
        orderby?: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /** OData expand expression. */
        expand?: string;
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /** Events returned by Microsoft Graph. */
        events: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id?: string;
          /** iCalendar UID. */
          iCalUId?: string;
          /** Recurring series master ID. */
          seriesMasterId?: string | null;
          /** Event type. */
          type?: string;
          /** Event subject. */
          subject?: string;
          /** A Microsoft Graph object. */
          body?: Record<string, unknown>;
          /** Plain-text body preview. */
          bodyPreview?: string;
          /** Microsoft Graph dateTimeTimeZone value. */
          start?: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          end?: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Event location. */
          location?: {
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          };
          /** Event locations. */
          locations?: Array<{
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          }>;
          /** Attendees and their response status. */
          attendees?: Array<Record<string, unknown>>;
          /** A Microsoft Graph object. */
          organizer?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          recurrence?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          responseStatus?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          onlineMeeting?: Record<string, unknown>;
          /** Legacy online meeting URL. */
          onlineMeetingUrl?: string | null;
          /** Outlook web URL for the event. */
          webLink?: string;
          /** Whether the event is cancelled. */
          isCancelled?: boolean;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** List calendars belonging to the connected Microsoft account. */
    "outlook_calendar.list_calendars": {
      input: {
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /** OData filter expression. */
        filter?: string;
        /** OData orderby expression. */
        orderby?: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /** OData expand expression. */
        expand?: string;
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /** Calendars returned by Microsoft Graph. */
        calendars: Array<{
          /**
           * Calendar ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Calendar name.
           * @minLength 1
           */
          name?: string;
          /** Calendar color. */
          color?: string;
          /** Calendar hexadecimal color. */
          hexColor?: string;
          /** Whether the current user may edit this calendar. */
          canEdit?: boolean;
          /** Whether the current user may share this calendar. */
          canShare?: boolean;
          /** Whether private event details are visible. */
          canViewPrivateItems?: boolean;
          /** Whether this is the default calendar. */
          isDefaultCalendar?: boolean;
          /** A Microsoft Graph object. */
          owner?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** List events from the default calendar or a selected calendar. */
    "outlook_calendar.list_events": {
      input: {
        /**
         * Outlook calendar ID.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /** OData filter expression. */
        filter?: string;
        /** OData orderby expression. */
        orderby?: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /** OData expand expression. */
        expand?: string;
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /** Events returned by Microsoft Graph. */
        events: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id?: string;
          /** iCalendar UID. */
          iCalUId?: string;
          /** Recurring series master ID. */
          seriesMasterId?: string | null;
          /** Event type. */
          type?: string;
          /** Event subject. */
          subject?: string;
          /** A Microsoft Graph object. */
          body?: Record<string, unknown>;
          /** Plain-text body preview. */
          bodyPreview?: string;
          /** Microsoft Graph dateTimeTimeZone value. */
          start?: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          end?: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Event location. */
          location?: {
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          };
          /** Event locations. */
          locations?: Array<{
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          }>;
          /** Attendees and their response status. */
          attendees?: Array<Record<string, unknown>>;
          /** A Microsoft Graph object. */
          organizer?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          recurrence?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          responseStatus?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          onlineMeeting?: Record<string, unknown>;
          /** Legacy online meeting URL. */
          onlineMeetingUrl?: string | null;
          /** Outlook web URL for the event. */
          webLink?: string;
          /** Whether the event is cancelled. */
          isCancelled?: boolean;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** Tentatively accept an event invitation for the connected account. */
    "outlook_calendar.tentatively_accept_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
        /** Optional response message sent to the organizer. */
        comment?: string;
        /** Whether to send the response to the organizer. */
        sendResponse?: boolean;
        /** Alternative meeting time; sendResponse must be true when this is provided. */
        proposedNewTime?: {
          /** Microsoft Graph dateTimeTimeZone value. */
          start: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          end: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
        };
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Update writable fields on an Outlook event. */
    "outlook_calendar.update_event": {
      input: {
        /**
         * Outlook event ID.
         * @minLength 1
         */
        eventId: string;
        /** Writable event fields. */
        event: {
          /** Event subject. */
          subject?: string;
          /** Event body. */
          body?: {
            /** Body content type. */
            contentType: "text" | "html";
            /** Body content. */
            content: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          start?: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Microsoft Graph dateTimeTimeZone value. */
          end?: {
            /**
             * Local date and time, such as 2026-09-16T10:00:00.
             * @minLength 1
             */
            dateTime: string;
            /**
             * Windows time zone name, such as UTC or Pacific Standard Time.
             * @minLength 1
             */
            timeZone: string;
          };
          /** Event location. */
          location?: {
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          };
          /** Event locations. */
          locations?: Array<{
            /** Location display name. */
            displayName?: string;
            /** Location email address. */
            locationEmailAddress?: string;
            /** Microsoft Graph location type. */
            locationType?: string;
            /** Provider location identifier. */
            uniqueId?: string;
            /** Provider location identifier type. */
            uniqueIdType?: string;
            [key: string]: unknown;
          }>;
          /** Event attendees. */
          attendees?: Array<{
            /** Email address and optional display name. */
            emailAddress: {
              /**
               * Email address.
               * @format email
               */
              address: string;
              /** Display name. */
              name?: string;
            };
            /** Attendee type. */
            type: "required" | "optional" | "resource";
          }>;
          /**
           * Outlook categories assigned to the event.
           * @minItems 1
           */
          categories?: Array<string>;
          /** Event importance. */
          importance?: "low" | "normal" | "high";
          /** Event sensitivity. */
          sensitivity?: "normal" | "personal" | "private" | "confidential";
          /** Free/busy status shown for the event. */
          showAs?: "free" | "tentative" | "busy" | "oof" | "workingElsewhere" | "unknown";
          /** Whether the event lasts all day. */
          isAllDay?: boolean;
          /** Whether to create an online meeting. */
          isOnlineMeeting?: boolean;
          /** Online meeting provider. */
          onlineMeetingProvider?: "unknown" | "skypeForBusiness" | "skypeForConsumer" | "teamsForBusiness";
          /** A Microsoft Graph object. */
          recurrence?: Record<string, unknown>;
          /** Whether attendee responses are requested. */
          responseRequested?: boolean;
          /** Whether attendees may propose a new time. */
          allowNewTimeProposals?: boolean;
          /** Client-generated identifier used to avoid duplicate creates. */
          transactionId?: string;
        };
        /**
         * Windows time zone name used for returned date-time values.
         * @minLength 1
         */
        preferTimeZone?: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id?: string;
        /** iCalendar UID. */
        iCalUId?: string;
        /** Recurring series master ID. */
        seriesMasterId?: string | null;
        /** Event type. */
        type?: string;
        /** Event subject. */
        subject?: string;
        /** A Microsoft Graph object. */
        body?: Record<string, unknown>;
        /** Plain-text body preview. */
        bodyPreview?: string;
        /** Microsoft Graph dateTimeTimeZone value. */
        start?: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Microsoft Graph dateTimeTimeZone value. */
        end?: {
          /**
           * Local date and time, such as 2026-09-16T10:00:00.
           * @minLength 1
           */
          dateTime: string;
          /**
           * Windows time zone name, such as UTC or Pacific Standard Time.
           * @minLength 1
           */
          timeZone: string;
        };
        /** Event location. */
        location?: {
          /** Location display name. */
          displayName?: string;
          /** Location email address. */
          locationEmailAddress?: string;
          /** Microsoft Graph location type. */
          locationType?: string;
          /** Provider location identifier. */
          uniqueId?: string;
          /** Provider location identifier type. */
          uniqueIdType?: string;
          [key: string]: unknown;
        };
        /** Event locations. */
        locations?: Array<{
          /** Location display name. */
          displayName?: string;
          /** Location email address. */
          locationEmailAddress?: string;
          /** Microsoft Graph location type. */
          locationType?: string;
          /** Provider location identifier. */
          uniqueId?: string;
          /** Provider location identifier type. */
          uniqueIdType?: string;
          [key: string]: unknown;
        }>;
        /** Attendees and their response status. */
        attendees?: Array<Record<string, unknown>>;
        /** A Microsoft Graph object. */
        organizer?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        recurrence?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        responseStatus?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        onlineMeeting?: Record<string, unknown>;
        /** Legacy online meeting URL. */
        onlineMeetingUrl?: string | null;
        /** Outlook web URL for the event. */
        webLink?: string;
        /** Whether the event is cancelled. */
        isCancelled?: boolean;
        [key: string]: unknown;
      };
    };
  }
}
