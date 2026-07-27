import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a calendar to the current user's Google Calendar list. */
    "googlecalendar.add_calendar_to_list": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /**
         * Access role granted on the calendar.
         * @minLength 1
         */
        accessRole: string;
        /** Whether this is the primary calendar. */
        primary?: boolean;
        /** Whether the calendar is hidden in the list. */
        hidden?: boolean;
        /** Whether the calendar is selected in the list. */
        selected?: boolean;
        /** Calendar time zone. */
        timeZone?: string;
        /** Calendar background color. */
        backgroundColor?: string;
        /** Calendar foreground color. */
        foregroundColor?: string;
        /** Display summary override for the calendar list entry. */
        summaryOverride?: string;
        /** Default reminders for this calendar list entry. */
        defaultReminders?: Array<{
          /**
           * Reminder delivery method, such as email or popup.
           * @minLength 1
           */
          method: string;
          /** Minutes before the event when the reminder triggers. */
          minutes: number;
        }>;
      };
    };
    /** Clear all events from a Google Calendar. */
    "googlecalendar.clear_calendar": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /** Whether the Google Calendar operation completed successfully. */
        success: true;
      };
    };
    /** Create an ACL rule on a Google Calendar. */
    "googlecalendar.create_acl_rule": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** ACL rule payload to create. */
        rule: {
          /** Scope that the ACL rule applies to. */
          scope: {
            /**
             * ACL scope type, such as user or default.
             * @minLength 1
             */
            type: string;
            /** ACL scope identifier, such as an email address. */
            value?: string;
          };
          /**
           * ACL role granted to the scope.
           * @minLength 1
           */
          role: string;
        };
      };
      output: {
        /**
         * ACL role granted to the scope.
         * @minLength 1
         */
        role: string;
        /** Scope that the ACL rule applies to. */
        scope: {
          /**
           * ACL scope type, such as user or default.
           * @minLength 1
           */
          type: string;
          /** ACL scope identifier, such as an email address. */
          value?: string;
        };
        /** ACL rule ID. */
        id?: string;
        /** Google Calendar ACL resource kind. */
        kind?: string;
        /** Entity tag for the ACL rule. */
        etag?: string;
      };
    };
    /** Create a Google Calendar. */
    "googlecalendar.create_calendar": {
      input: {
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /** Calendar description. */
        description?: string;
        /** Calendar location. */
        location?: string;
        /** Calendar time zone. */
        timeZone?: string;
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /** Google Calendar resource kind. */
        kind?: string;
        /** Entity tag for the calendar resource. */
        etag?: string;
        /** Calendar description. */
        description?: string;
        /** Calendar location. */
        location?: string;
        /** Calendar time zone. */
        timeZone?: string;
        /** Conference properties returned by Google Calendar. */
        conferenceProperties?: unknown;
      };
    };
    /** Create a Google Calendar event. */
    "googlecalendar.create_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Event payload to create. */
        event: {
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Event start time. */
          start: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event attendees. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Event recurrence rules. */
          recurrence?: Array<string>;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Google Calendar color ID for the event. */
          colorId?: string;
          /** Event visibility, such as default or private. */
          visibility?: string;
          /** Whether the event blocks time on the calendar. */
          transparency?: string;
          /** Event status, such as confirmed or cancelled. */
          status?: string;
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        };
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete an ACL rule from a Google Calendar. */
    "googlecalendar.delete_acl_rule": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar ACL rule ID.
         * @minLength 1
         */
        ruleId?: string;
      };
      output: {
        /** Whether the Google Calendar operation completed successfully. */
        success: true;
      };
    };
    /** Delete a Google Calendar. */
    "googlecalendar.delete_calendar": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /** Whether the Google Calendar operation completed successfully. */
        success: true;
      };
    };
    /** Delete a Google Calendar event. */
    "googlecalendar.delete_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar event ID.
         * @minLength 1
         */
        eventId?: string;
      };
      output: {
        /** Whether the Google Calendar operation completed successfully. */
        success: true;
      };
    };
    /** Search events in a Google Calendar using a query string. */
    "googlecalendar.find_event": {
      input: {
        /**
         * Full-text search query for events.
         * @minLength 1
         */
        query?: string;
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Lower bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /**
         * Lower bound for event update time, in RFC 3339 format.
         * @format date-time
         */
        updatedMin?: string;
        /** Event types to include in the search. */
        eventTypes?: string | Array<string>;
        /** Sort order for the returned events. */
        orderBy?: string;
        /** Whether to expand recurring events into single instances. */
        singleEvents?: boolean;
        /** Whether to include deleted events. */
        showDeleted?: boolean;
        /**
         * Maximum number of events to return.
         * @minimum 1
         * @maximum 2500
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous search response. */
        pageToken?: string;
      };
      output: {
        /** Events returned by Google Calendar. */
        items: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id: string;
          /**
           * Event status.
           * @minLength 1
           */
          status: string;
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Google Calendar web URL for the event. */
          htmlLink?: string;
          /** Timestamp when the event was created. */
          created?: string;
          /** Timestamp when the event was last updated. */
          updated?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event organizer. */
          organizer?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Event creator. */
          creator?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Attendees returned for the event. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Recurrence rules for the event. */
          recurrence?: Array<string>;
          /** Recurring master event ID when this item is an instance. */
          recurringEventId?: string;
          /** Original start time for a recurring event instance. */
          originalStartTime?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event type returned by Google Calendar. */
          eventType?: string;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        }>;
        /** Opaque pagination token for the next page of events. */
        nextPageToken?: string;
        /** Opaque sync token for incremental event sync. */
        nextSyncToken?: string;
        /** Time zone used for the response. */
        timeZone?: string;
        /** Timestamp when the response was last updated. */
        updated?: string;
      };
    };
    /** Derive free slots from Google Calendar freeBusy data. */
    "googlecalendar.find_free_slots": {
      input: {
        /** Calendar or group IDs to include in the freeBusy query. */
        items: Array<string> | Array<{
          /**
           * Calendar or group ID to include in the freeBusy query.
           * @minLength 1
           */
          id: string;
        }>;
        /**
         * Lower bound for the freeBusy query, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for the freeBusy query, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /** Time zone to use for the response. */
        timeZone?: string;
        /**
         * Maximum number of calendars to expand per group.
         * @minimum 1
         * @maximum 100
         */
        groupExpansionMax?: number;
        /**
         * Maximum number of calendars to return after expansion.
         * @minimum 1
         * @maximum 50
         */
        calendarExpansionMax?: number;
      };
      output: {
        /**
         * Derived free-slots resource kind.
         * @minLength 1
         */
        kind: string;
        /**
         * Lower bound of the analyzed time range.
         * @minLength 1
         */
        timeMin: string;
        /**
         * Upper bound of the analyzed time range.
         * @minLength 1
         */
        timeMax: string;
        /** Free-slot results keyed by calendar ID. */
        calendars: Record<string, {
            /** Busy intervals for this calendar. */
            busy: Array<{
              /**
               * Start of the free or busy interval.
               * @minLength 1
               */
              start: string;
              /**
               * End of the free or busy interval.
               * @minLength 1
               */
              end: string;
            }>;
            /** Derived free intervals for this calendar. */
            free: Array<{
              /**
               * Start of the free or busy interval.
               * @minLength 1
               */
              start: string;
              /**
               * End of the free or busy interval.
               * @minLength 1
               */
              end: string;
            }>;
            /** Whether the free-slot calculation is reliable. */
            isReliable: boolean;
            /** Errors encountered while deriving free slots. */
            errors?: Array<{
              /**
               * Normalized error code.
               * @minLength 1
               */
              code: string;
              /**
               * Human-readable error message.
               * @minLength 1
               */
              message: string;
            }>;
          }>;
      };
    };
    /** Query busy intervals for calendars and groups. */
    "googlecalendar.free_busy_query": {
      input: {
        /** Calendar or group IDs to include in the freeBusy query. */
        items: Array<string> | Array<{
          /**
           * Calendar or group ID to include in the freeBusy query.
           * @minLength 1
           */
          id: string;
        }>;
        /**
         * Lower bound for the freeBusy query, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for the freeBusy query, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /** Time zone to use for the response. */
        timeZone?: string;
        /**
         * Maximum number of calendars to expand per group.
         * @minimum 1
         * @maximum 100
         */
        groupExpansionMax?: number;
        /**
         * Maximum number of calendars to return after expansion.
         * @minimum 1
         * @maximum 50
         */
        calendarExpansionMax?: number;
      };
      output: {
        /**
         * Google Calendar freeBusy resource kind.
         * @minLength 1
         */
        kind: string;
        /**
         * Lower bound of the queried time range.
         * @minLength 1
         */
        timeMin: string;
        /**
         * Upper bound of the queried time range.
         * @minLength 1
         */
        timeMax: string;
        /** Busy results keyed by calendar or group ID. */
        calendars: Record<string, {
            /** Busy time windows for the calendar. */
            busy: Array<{
              /**
               * Start of the busy interval.
               * @minLength 1
               */
              start: string;
              /**
               * End of the busy interval.
               * @minLength 1
               */
              end: string;
            }>;
            /** The errors value. */
            errors?: Array<{
              /**
               * Error domain returned by Google Calendar.
               * @minLength 1
               */
              domain: string;
              /**
               * Error reason returned by Google Calendar.
               * @minLength 1
               */
              reason: string;
            }>;
          }>;
        /** Expanded group results keyed by group ID. */
        groups?: Record<string, {
            /** Calendar IDs expanded from the group. */
            calendars?: Array<string>;
            /** Errors returned while expanding the group. */
            errors?: Array<{
              /**
               * Error domain returned by Google Calendar.
               * @minLength 1
               */
              domain: string;
              /**
               * Error reason returned by Google Calendar.
               * @minLength 1
               */
              reason: string;
            }>;
          }>;
      };
    };
    /** Fetch one ACL rule from a Google Calendar. */
    "googlecalendar.get_acl_rule": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar ACL rule ID.
         * @minLength 1
         */
        ruleId?: string;
      };
      output: {
        /**
         * ACL role granted to the scope.
         * @minLength 1
         */
        role: string;
        /** Scope that the ACL rule applies to. */
        scope: {
          /**
           * ACL scope type, such as user or default.
           * @minLength 1
           */
          type: string;
          /** ACL scope identifier, such as an email address. */
          value?: string;
        };
        /** ACL rule ID. */
        id?: string;
        /** Google Calendar ACL resource kind. */
        kind?: string;
        /** Entity tag for the ACL rule. */
        etag?: string;
      };
    };
    /** Fetch one Google Calendar resource by ID. */
    "googlecalendar.get_calendar": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /** Google Calendar resource kind. */
        kind?: string;
        /** Entity tag for the calendar resource. */
        etag?: string;
        /** Calendar description. */
        description?: string;
        /** Calendar location. */
        location?: string;
        /** Calendar time zone. */
        timeZone?: string;
        /** Conference properties returned by Google Calendar. */
        conferenceProperties?: unknown;
      };
    };
    /** Fetch one Google Calendar list entry by calendar ID. */
    "googlecalendar.get_calendar_list_entry": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /**
         * Access role granted on the calendar.
         * @minLength 1
         */
        accessRole: string;
        /** Whether this is the primary calendar. */
        primary?: boolean;
        /** Whether the calendar is hidden in the list. */
        hidden?: boolean;
        /** Whether the calendar is selected in the list. */
        selected?: boolean;
        /** Calendar time zone. */
        timeZone?: string;
        /** Calendar background color. */
        backgroundColor?: string;
        /** Calendar foreground color. */
        foregroundColor?: string;
        /** Display summary override for the calendar list entry. */
        summaryOverride?: string;
        /** Default reminders for this calendar list entry. */
        defaultReminders?: Array<{
          /**
           * Reminder delivery method, such as email or popup.
           * @minLength 1
           */
          method: string;
          /** Minutes before the event when the reminder triggers. */
          minutes: number;
        }>;
      };
    };
    /** Fetch the Google Calendar colors resource. */
    "googlecalendar.get_colors": {
      input: Record<string, never>;
      output: {
        /**
         * Google Calendar colors resource kind.
         * @minLength 1
         */
        kind: string;
        /**
         * Last updated timestamp for the colors resource.
         * @minLength 1
         */
        updated: string;
        /** Calendar color definitions keyed by color ID. */
        calendar: Record<string, {
            /**
             * Schema for nonEmptyString.
             * @minLength 1
             */
            background: string;
            /**
             * Schema for nonEmptyString.
             * @minLength 1
             */
            foreground: string;
          }>;
        /** Event color definitions keyed by color ID. */
        event: Record<string, {
            /**
             * Schema for nonEmptyString.
             * @minLength 1
             */
            background: string;
            /**
             * Schema for nonEmptyString.
             * @minLength 1
             */
            foreground: string;
          }>;
      };
    };
    /** Fetch one Google Calendar event. */
    "googlecalendar.get_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar event ID.
         * @minLength 1
         */
        eventId?: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Google Calendar setting. */
    "googlecalendar.get_setting": {
      input: {
        /**
         * Google Calendar setting ID.
         * @minLength 1
         */
        settingId?: string;
      };
      output: {
        /**
         * Setting ID.
         * @minLength 1
         */
        id: string;
        /** Setting value. */
        value: string;
        /**
         * Google Calendar setting resource kind.
         * @minLength 1
         */
        kind: string;
        /**
         * Entity tag for the setting.
         * @minLength 1
         */
        etag: string;
      };
    };
    /** Import an event into Google Calendar without conferenceData or attachments. */
    "googlecalendar.import_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Event payload to import. */
        event: {
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Event start time. */
          start: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event attendees. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Event recurrence rules. */
          recurrence?: Array<string>;
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Google Calendar color ID for the event. */
          colorId?: string;
          /** Event visibility, such as default or private. */
          visibility?: string;
          /** Whether the event blocks time on the calendar. */
          transparency?: string;
          /** Event status, such as confirmed or cancelled. */
          status?: string;
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
          /**
           * iCalendar UID required when importing an event.
           * @minLength 1
           */
          iCalUID: string;
        };
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List ACL rules for a Google Calendar. */
    "googlecalendar.list_acl": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Maximum number of ACL rules to return.
         * @minimum 1
         * @maximum 100
         * @default 100
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous ACL response. */
        pageToken?: string;
        /** Opaque sync token returned by a previous ACL response. */
        syncToken?: string;
        /** Whether to include deleted ACL rules. */
        showDeleted?: boolean;
      };
      output: {
        /** ACL rules returned by Google Calendar. */
        items: Array<{
          /**
           * ACL role granted to the scope.
           * @minLength 1
           */
          role: string;
          /** Scope that the ACL rule applies to. */
          scope: {
            /**
             * ACL scope type, such as user or default.
             * @minLength 1
             */
            type: string;
            /** ACL scope identifier, such as an email address. */
            value?: string;
          };
          /** ACL rule ID. */
          id?: string;
          /** Google Calendar ACL resource kind. */
          kind?: string;
          /** Entity tag for the ACL rule. */
          etag?: string;
        }>;
        /** Opaque pagination token for the next page of ACL rules. */
        nextPageToken?: string;
        /** Opaque sync token for incremental ACL sync. */
        nextSyncToken?: string;
      };
    };
    /** List the current user's Google Calendar list entries. */
    "googlecalendar.list_calendars": {
      input: {
        /**
         * Maximum number of calendar list entries to return.
         * @minimum 1
         * @maximum 250
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous calendar list response. */
        pageToken?: string;
        /** Opaque sync token returned by a previous calendar list response. */
        syncToken?: string;
        /** Whether to include hidden calendars. */
        showHidden?: boolean;
        /** Whether to include deleted calendars. */
        showDeleted?: boolean;
        /** Minimum access role required for returned calendars. */
        minAccessRole?: string;
      };
      output: {
        /** Calendar list entries returned by Google. */
        items: Array<{
          /**
           * Calendar ID.
           * @minLength 1
           */
          id: string;
          /**
           * Calendar summary.
           * @minLength 1
           */
          summary: string;
          /**
           * Access role granted on the calendar.
           * @minLength 1
           */
          accessRole: string;
          /** Whether this is the primary calendar. */
          primary?: boolean;
          /** Whether the calendar is hidden in the list. */
          hidden?: boolean;
          /** Whether the calendar is selected in the list. */
          selected?: boolean;
          /** Calendar time zone. */
          timeZone?: string;
          /** Calendar background color. */
          backgroundColor?: string;
          /** Calendar foreground color. */
          foregroundColor?: string;
          /** Display summary override for the calendar list entry. */
          summaryOverride?: string;
          /** Default reminders for this calendar list entry. */
          defaultReminders?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        }>;
        /** Opaque pagination token for the next page of calendars. */
        nextPageToken?: string;
        /** Opaque sync token for incremental calendar-list sync. */
        nextSyncToken?: string;
      };
    };
    /** List instances of a recurring Google Calendar event. */
    "googlecalendar.list_event_instances": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Recurring master event ID.
         * @minLength 1
         */
        eventId?: string;
        /**
         * Lower bound for instance start time, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for instance start time, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /** Time zone to use for the response. */
        timeZone?: string;
        /** Opaque pagination token returned by a previous instances response. */
        pageToken?: string;
        /**
         * Maximum number of instances to return.
         * @minimum 1
         * @maximum 2500
         */
        maxResults?: number;
        /** Whether to include deleted instances. */
        showDeleted?: boolean;
        /**
         * Maximum number of attendees to include per event instance.
         * @minimum 1
         */
        maxAttendees?: number;
      };
      output: {
        /** Recurring event instances returned by Google. */
        items: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id: string;
          /**
           * Event status.
           * @minLength 1
           */
          status: string;
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Google Calendar web URL for the event. */
          htmlLink?: string;
          /** Timestamp when the event was created. */
          created?: string;
          /** Timestamp when the event was last updated. */
          updated?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event organizer. */
          organizer?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Event creator. */
          creator?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Attendees returned for the event. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Recurrence rules for the event. */
          recurrence?: Array<string>;
          /** Recurring master event ID when this item is an instance. */
          recurringEventId?: string;
          /** Original start time for a recurring event instance. */
          originalStartTime?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event type returned by Google Calendar. */
          eventType?: string;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        }>;
        /** Opaque pagination token for the next page of instances. */
        nextPageToken?: string;
        /** Time zone used for the response. */
        timeZone?: string;
        /** Timestamp when the response was last updated. */
        updated?: string;
      };
    };
    /** List events from a Google Calendar. */
    "googlecalendar.list_events": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Full-text search query for event fields. */
        q?: string;
        /** iCalendar UID used to filter events. */
        iCalUID?: string;
        /** Sort order for the returned events. */
        orderBy?: string;
        /**
         * Lower bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /** Time zone to use for the response. */
        timeZone?: string;
        /** Opaque pagination token returned by a previous events response. */
        pageToken?: string;
        /** Opaque sync token returned by a previous events response. */
        syncToken?: string;
        /** Event types to include in the response. */
        eventTypes?: string | Array<string>;
        /**
         * Maximum number of events to return.
         * @minimum 1
         * @maximum 2500
         */
        maxResults?: number;
        /**
         * Lower bound for event update time, in RFC 3339 format.
         * @format date-time
         */
        updatedMin?: string;
        /** Whether to include deleted events. */
        showDeleted?: boolean;
        /**
         * Maximum number of attendees to include per event.
         * @minimum 1
         */
        maxAttendees?: number;
        /** Whether to expand recurring events into single instances. */
        singleEvents?: boolean;
        /** Whether to include hidden invitations. */
        showHiddenInvitations?: boolean;
        /** Shared extended property filters in key=value form. */
        sharedExtendedProperty?: string | Array<string>;
        /** Private extended property filters in key=value form. */
        privateExtendedProperty?: string | Array<string>;
      };
      output: {
        /** Events returned by Google Calendar. */
        items: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id: string;
          /**
           * Event status.
           * @minLength 1
           */
          status: string;
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Google Calendar web URL for the event. */
          htmlLink?: string;
          /** Timestamp when the event was created. */
          created?: string;
          /** Timestamp when the event was last updated. */
          updated?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event organizer. */
          organizer?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Event creator. */
          creator?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Attendees returned for the event. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Recurrence rules for the event. */
          recurrence?: Array<string>;
          /** Recurring master event ID when this item is an instance. */
          recurringEventId?: string;
          /** Original start time for a recurring event instance. */
          originalStartTime?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event type returned by Google Calendar. */
          eventType?: string;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        }>;
        /** Opaque pagination token for the next page of events. */
        nextPageToken?: string;
        /** Opaque sync token for incremental event sync. */
        nextSyncToken?: string;
        /** Time zone used for the response. */
        timeZone?: string;
        /** Timestamp when the response was last updated. */
        updated?: string;
      };
    };
    /** List events across multiple Google Calendars and aggregate the result. */
    "googlecalendar.list_events_all_calendars": {
      input: {
        /** Calendar IDs to query. Omit to query the connected calendar list. */
        calendarIds?: Array<string>;
        /** Full-text search query for event fields. */
        q?: string;
        /**
         * Lower bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /** Time zone to use for the response. */
        timeZone?: string;
        /** Event types to include in the response. */
        eventTypes?: string | Array<string>;
        /** Whether to include deleted events. */
        showDeleted?: boolean;
        /** Whether to expand recurring events into single instances. */
        singleEvents?: boolean;
        /**
         * Maximum number of events to fetch per calendar.
         * @minimum 1
         * @maximum 2500
         * @default 250
         */
        maxResultsPerCalendar: number;
      };
      output: {
        /** Events aggregated across calendars. */
        events: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id: string;
          /**
           * Event status.
           * @minLength 1
           */
          status: string;
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Google Calendar web URL for the event. */
          htmlLink?: string;
          /** Timestamp when the event was created. */
          created?: string;
          /** Timestamp when the event was last updated. */
          updated?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event organizer. */
          organizer?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Event creator. */
          creator?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Attendees returned for the event. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Recurrence rules for the event. */
          recurrence?: Array<string>;
          /** Recurring master event ID when this item is an instance. */
          recurringEventId?: string;
          /** Original start time for a recurring event instance. */
          originalStartTime?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event type returned by Google Calendar. */
          eventType?: string;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
          /** Source calendar metadata for the event. */
          sourceCalendar: {
            /**
             * Calendar ID.
             * @minLength 1
             */
            calendarId: string;
            /**
             * Calendar summary.
             * @minLength 1
             */
            summary: string;
            /** Whether this is the primary calendar. */
            primary?: boolean;
            /** Access role granted on the calendar. */
            accessRole?: string;
          };
        }>;
        /** Flattened summary view of the aggregated events. */
        summaryView: Array<{
          /**
           * Calendar ID.
           * @minLength 1
           */
          calendarId: string;
          /**
           * Calendar summary.
           * @minLength 1
           */
          calendarSummary: string;
          /**
           * Event ID.
           * @minLength 1
           */
          eventId: string;
          /**
           * Event title.
           * @minLength 1
           */
          summary: string;
          /** Event start time. */
          start: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Whether the event is all day. */
          allDay: boolean;
          /**
           * Event status.
           * @minLength 1
           */
          status: string;
          /** Google Calendar web URL for the event. */
          htmlLink?: string;
        }>;
        /** Calendars that were queried for the aggregation. */
        calendarsQueried: Array<{
          /**
           * Calendar ID.
           * @minLength 1
           */
          calendarId: string;
          /**
           * Calendar summary.
           * @minLength 1
           */
          summary: string;
          /** Whether this is the primary calendar. */
          primary?: boolean;
          /** Access role granted on the calendar. */
          accessRole?: string;
        }>;
        /** Errors keyed by calendar ID. */
        errorsByCalendar: Record<string, {
            /** Normalized error code for this calendar. */
            code: "forbidden" | "not_found" | "rate_limited" | "provider_error";
            /**
             * Human-readable error message.
             * @minLength 1
             */
            message: string;
          }>;
      };
    };
    /** List Google Calendar settings. */
    "googlecalendar.list_settings": {
      input: {
        /**
         * Maximum number of settings to return.
         * @minimum 1
         * @maximum 250
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous settings response. */
        pageToken?: string;
        /** Opaque sync token returned by a previous settings response. */
        syncToken?: string;
      };
      output: {
        /**
         * Google Calendar settings list resource kind.
         * @minLength 1
         */
        kind: string;
        /**
         * Entity tag for the settings list.
         * @minLength 1
         */
        etag: string;
        /** Settings returned by Google Calendar. */
        items: Array<{
          /**
           * Setting ID.
           * @minLength 1
           */
          id: string;
          /** Setting value. */
          value: string;
          /**
           * Google Calendar setting resource kind.
           * @minLength 1
           */
          kind: string;
          /**
           * Entity tag for the setting.
           * @minLength 1
           */
          etag: string;
        }>;
        /** Opaque pagination token for the next page of settings. */
        nextPageToken?: string;
        /** Opaque sync token for incremental settings sync. */
        nextSyncToken?: string;
      };
    };
    /** Move a Google Calendar event to another calendar. */
    "googlecalendar.move_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar event ID.
         * @minLength 1
         */
        eventId?: string;
        /**
         * Destination calendar ID.
         * @minLength 1
         */
        destinationCalendarId: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Patch writable fields on a Google Calendar ACL rule. */
    "googlecalendar.patch_acl_rule": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar ACL rule ID.
         * @minLength 1
         */
        ruleId?: string;
        /** Schema for aclRuleWritableSchema. */
        rule: {
          /** Scope that the ACL rule applies to. */
          scope?: {
            /**
             * ACL scope type, such as user or default.
             * @minLength 1
             */
            type: string;
            /** ACL scope identifier, such as an email address. */
            value?: string;
          };
          /**
           * ACL role granted to the scope.
           * @minLength 1
           */
          role?: string;
        };
      };
      output: {
        /**
         * ACL role granted to the scope.
         * @minLength 1
         */
        role: string;
        /** Scope that the ACL rule applies to. */
        scope: {
          /**
           * ACL scope type, such as user or default.
           * @minLength 1
           */
          type: string;
          /** ACL scope identifier, such as an email address. */
          value?: string;
        };
        /** ACL rule ID. */
        id?: string;
        /** Google Calendar ACL resource kind. */
        kind?: string;
        /** Entity tag for the ACL rule. */
        etag?: string;
      };
    };
    /** Patch writable fields on a Google Calendar resource. */
    "googlecalendar.patch_calendar": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Schema for calendarWritableSchema. */
        calendar: {
          /**
           * Calendar summary.
           * @minLength 1
           */
          summary?: string;
          /** Calendar description. */
          description?: string;
          /** Calendar location. */
          location?: string;
          /** Calendar time zone. */
          timeZone?: string;
        };
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /** Google Calendar resource kind. */
        kind?: string;
        /** Entity tag for the calendar resource. */
        etag?: string;
        /** Calendar description. */
        description?: string;
        /** Calendar location. */
        location?: string;
        /** Calendar time zone. */
        timeZone?: string;
        /** Conference properties returned by Google Calendar. */
        conferenceProperties?: unknown;
      };
    };
    /** Patch writable fields on a Google Calendar list entry. */
    "googlecalendar.patch_calendar_list_entry": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Writable fields for the calendar list entry. */
        entry: {
          /** Display summary override for the calendar list entry. */
          summaryOverride?: string;
          /** Background color for the calendar list entry. */
          backgroundColor?: string;
          /** Foreground color for the calendar list entry. */
          foregroundColor?: string;
          /** Whether the calendar is selected in the list. */
          selected?: boolean;
          /** Whether the calendar is hidden in the list. */
          hidden?: boolean;
          /** Default reminders for this calendar list entry. */
          defaultReminders?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
          /** Calendar list notification settings. */
          notificationSettings?: {
            /** Notification settings returned by Google Calendar. */
            notifications: Array<{
              /**
               * Notification type to deliver.
               * @minLength 1
               */
              type: string;
              /**
               * Notification delivery method.
               * @minLength 1
               */
              method: string;
            }>;
          };
        };
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /**
         * Access role granted on the calendar.
         * @minLength 1
         */
        accessRole: string;
        /** Whether this is the primary calendar. */
        primary?: boolean;
        /** Whether the calendar is hidden in the list. */
        hidden?: boolean;
        /** Whether the calendar is selected in the list. */
        selected?: boolean;
        /** Calendar time zone. */
        timeZone?: string;
        /** Calendar background color. */
        backgroundColor?: string;
        /** Calendar foreground color. */
        foregroundColor?: string;
        /** Display summary override for the calendar list entry. */
        summaryOverride?: string;
        /** Default reminders for this calendar list entry. */
        defaultReminders?: Array<{
          /**
           * Reminder delivery method, such as email or popup.
           * @minLength 1
           */
          method: string;
          /** Minutes before the event when the reminder triggers. */
          minutes: number;
        }>;
      };
    };
    /** Patch writable fields on a Google Calendar event. */
    "googlecalendar.patch_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar event ID.
         * @minLength 1
         */
        eventId?: string;
        /** Event payload to patch. */
        event: {
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event attendees. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Event recurrence rules. */
          recurrence?: Array<string>;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Google Calendar color ID for the event. */
          colorId?: string;
          /** Event visibility, such as default or private. */
          visibility?: string;
          /** Whether the event blocks time on the calendar. */
          transparency?: string;
          /** Event status, such as confirmed or cancelled. */
          status?: string;
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        };
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Google Calendar event with natural language text. */
    "googlecalendar.quick_add_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Natural-language event text to quick-add.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Remove one attendee email from a Google Calendar event. */
    "googlecalendar.remove_attendee": {
      input: {
        /**
         * Google Calendar event ID.
         * @minLength 1
         */
        eventId?: string;
        /**
         * Attendee email address to remove.
         * @minLength 1
         */
        attendeeEmail?: string;
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Remove a calendar from the current user's Calendar list. */
    "googlecalendar.remove_calendar_from_list": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
      };
      output: {
        /** Whether the Google Calendar operation completed successfully. */
        success: true;
      };
    };
    /** Incrementally sync events from a Google Calendar. */
    "googlecalendar.sync_events": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Full-text search query for event fields. */
        q?: string;
        /** iCalendar UID used to filter events. */
        iCalUID?: string;
        /** Sort order for the returned events. */
        orderBy?: string;
        /**
         * Lower bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMin?: string;
        /**
         * Upper bound for event start time, in RFC 3339 format.
         * @format date-time
         */
        timeMax?: string;
        /** Time zone to use for the response. */
        timeZone?: string;
        /** Opaque pagination token returned by a previous events response. */
        pageToken?: string;
        /** Opaque sync token returned by a previous events response. */
        syncToken?: string;
        /** Event types to include in the response. */
        eventTypes?: string | Array<string>;
        /**
         * Maximum number of events to return.
         * @minimum 1
         * @maximum 2500
         */
        maxResults?: number;
        /**
         * Lower bound for event update time, in RFC 3339 format.
         * @format date-time
         */
        updatedMin?: string;
        /** Whether to include deleted events. */
        showDeleted?: boolean;
        /**
         * Maximum number of attendees to include per event.
         * @minimum 1
         */
        maxAttendees?: number;
        /** Whether to expand recurring events into single instances. */
        singleEvents?: boolean;
        /** Whether to include hidden invitations. */
        showHiddenInvitations?: boolean;
        /** Shared extended property filters in key=value form. */
        sharedExtendedProperty?: string | Array<string>;
        /** Private extended property filters in key=value form. */
        privateExtendedProperty?: string | Array<string>;
      };
      output: {
        /** Events returned by Google Calendar. */
        items: Array<{
          /**
           * Event ID.
           * @minLength 1
           */
          id: string;
          /**
           * Event status.
           * @minLength 1
           */
          status: string;
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Google Calendar web URL for the event. */
          htmlLink?: string;
          /** Timestamp when the event was created. */
          created?: string;
          /** Timestamp when the event was last updated. */
          updated?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event organizer. */
          organizer?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Event creator. */
          creator?: {
            /** Organizer or creator email address. */
            email?: string;
            /** Organizer or creator display name. */
            displayName?: string;
            /** Whether this person is the authenticated user. */
            self?: boolean;
            [key: string]: unknown;
          };
          /** Attendees returned for the event. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Recurrence rules for the event. */
          recurrence?: Array<string>;
          /** Recurring master event ID when this item is an instance. */
          recurringEventId?: string;
          /** Original start time for a recurring event instance. */
          originalStartTime?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event type returned by Google Calendar. */
          eventType?: string;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        }>;
        /** Opaque pagination token for the next page of events. */
        nextPageToken?: string;
        /** Opaque sync token for incremental event sync. */
        nextSyncToken?: string;
        /** Time zone used for the response. */
        timeZone?: string;
        /** Timestamp when the response was last updated. */
        updated?: string;
      };
    };
    /** Replace writable fields on a Google Calendar ACL rule. */
    "googlecalendar.update_acl_rule": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar ACL rule ID.
         * @minLength 1
         */
        ruleId?: string;
        /** ACL rule payload to replace. */
        rule: {
          /** Scope that the ACL rule applies to. */
          scope: {
            /**
             * ACL scope type, such as user or default.
             * @minLength 1
             */
            type: string;
            /** ACL scope identifier, such as an email address. */
            value?: string;
          };
          /**
           * ACL role granted to the scope.
           * @minLength 1
           */
          role: string;
        };
      };
      output: {
        /**
         * ACL role granted to the scope.
         * @minLength 1
         */
        role: string;
        /** Scope that the ACL rule applies to. */
        scope: {
          /**
           * ACL scope type, such as user or default.
           * @minLength 1
           */
          type: string;
          /** ACL scope identifier, such as an email address. */
          value?: string;
        };
        /** ACL rule ID. */
        id?: string;
        /** Google Calendar ACL resource kind. */
        kind?: string;
        /** Entity tag for the ACL rule. */
        etag?: string;
      };
    };
    /** Replace writable fields on a Google Calendar resource. */
    "googlecalendar.update_calendar": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Writable fields for the calendar. */
        calendar: {
          /**
           * Calendar summary.
           * @minLength 1
           */
          summary: string;
          /** Calendar description. */
          description?: string;
          /** Calendar location. */
          location?: string;
          /** Calendar time zone. */
          timeZone?: string;
        };
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /** Google Calendar resource kind. */
        kind?: string;
        /** Entity tag for the calendar resource. */
        etag?: string;
        /** Calendar description. */
        description?: string;
        /** Calendar location. */
        location?: string;
        /** Calendar time zone. */
        timeZone?: string;
        /** Conference properties returned by Google Calendar. */
        conferenceProperties?: unknown;
      };
    };
    /** Replace writable fields on a Google Calendar list entry. */
    "googlecalendar.update_calendar_list_entry": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /** Writable fields for the calendar list entry. */
        entry: {
          /** Display summary override for the calendar list entry. */
          summaryOverride?: string;
          /** Background color for the calendar list entry. */
          backgroundColor?: string;
          /** Foreground color for the calendar list entry. */
          foregroundColor?: string;
          /** Whether the calendar is selected in the list. */
          selected?: boolean;
          /** Whether the calendar is hidden in the list. */
          hidden?: boolean;
          /** Default reminders for this calendar list entry. */
          defaultReminders?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
          /** Calendar list notification settings. */
          notificationSettings?: {
            /** Notification settings returned by Google Calendar. */
            notifications: Array<{
              /**
               * Notification type to deliver.
               * @minLength 1
               */
              type: string;
              /**
               * Notification delivery method.
               * @minLength 1
               */
              method: string;
            }>;
          };
        };
      };
      output: {
        /**
         * Calendar ID.
         * @minLength 1
         */
        id: string;
        /**
         * Calendar summary.
         * @minLength 1
         */
        summary: string;
        /**
         * Access role granted on the calendar.
         * @minLength 1
         */
        accessRole: string;
        /** Whether this is the primary calendar. */
        primary?: boolean;
        /** Whether the calendar is hidden in the list. */
        hidden?: boolean;
        /** Whether the calendar is selected in the list. */
        selected?: boolean;
        /** Calendar time zone. */
        timeZone?: string;
        /** Calendar background color. */
        backgroundColor?: string;
        /** Calendar foreground color. */
        foregroundColor?: string;
        /** Display summary override for the calendar list entry. */
        summaryOverride?: string;
        /** Default reminders for this calendar list entry. */
        defaultReminders?: Array<{
          /**
           * Reminder delivery method, such as email or popup.
           * @minLength 1
           */
          method: string;
          /** Minutes before the event when the reminder triggers. */
          minutes: number;
        }>;
      };
    };
    /** Replace writable fields on a Google Calendar event. */
    "googlecalendar.update_event": {
      input: {
        /**
         * Google Calendar ID. Omit to use the primary calendar when supported.
         * @minLength 1
         */
        calendarId?: string;
        /**
         * Google Calendar event ID.
         * @minLength 1
         */
        eventId?: string;
        /** Event payload to replace. */
        event: {
          /** Event title. */
          summary?: string;
          /** Event description. */
          description?: string;
          /** Event location. */
          location?: string;
          /** Event start time. */
          start?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event end time. */
          end?: {
            /**
             * All-day event date in YYYY-MM-DD format.
             * @minLength 1
             */
            date?: string;
            /**
             * Event timestamp in RFC 3339 format.
             * @format date-time
             */
            dateTime?: string;
            /**
             * IANA time zone used to interpret the event time.
             * @minLength 1
             */
            timeZone?: string;
          };
          /** Event attendees. */
          attendees?: Array<{
            /**
             * Attendee email address.
             * @minLength 1
             */
            email: string;
            /** Attendee display name. */
            displayName?: string;
            /** Whether attendance is optional. */
            optional?: boolean;
            /** Whether the attendee represents a resource. */
            resource?: boolean;
            /** Attendee response status, such as accepted or declined. */
            responseStatus?: string;
            /** Additional attendee comment. */
            comment?: string;
            /** Number of additional guests invited by this attendee. */
            additionalGuests?: number;
          }>;
          /** Event recurrence rules. */
          recurrence?: Array<string>;
          /** Conference data for the event. */
          conferenceData?: {
            /** Conference identifier for the event. */
            conferenceId?: string;
            /** Additional conference notes. */
            notes?: string;
            /** Conference entry points returned by Google Calendar. */
            entryPoints?: Array<unknown>;
            /** Conference solution metadata. */
            conferenceSolution?: unknown;
            /** Conference creation request details. */
            createRequest?: {
              /**
               * Client-generated request ID used to create conference details.
               * @minLength 1
               */
              requestId: string;
              /** Conference solution payload accepted by Google Calendar. */
              conferenceSolutionKey?: unknown;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Reminder settings for the event. */
          reminders?: {
            /** Whether to use the calendar's default reminders. */
            useDefault?: boolean;
            /** Reminder overrides for the event. */
            overrides?: Array<{
              /**
               * Reminder delivery method, such as email or popup.
               * @minLength 1
               */
              method: string;
              /** Minutes before the event when the reminder triggers. */
              minutes: number;
            }>;
          };
          /** Google Calendar color ID for the event. */
          colorId?: string;
          /** Event visibility, such as default or private. */
          visibility?: string;
          /** Whether the event blocks time on the calendar. */
          transparency?: string;
          /** Event status, such as confirmed or cancelled. */
          status?: string;
          /** Extended event properties. */
          extendedProperties?: {
            /** Private extended properties keyed by name. */
            private?: Record<string, string>;
            /** Shared extended properties keyed by name. */
            shared?: Record<string, string>;
          };
          /** Attachments on the event. */
          attachments?: Array<{
            /**
             * Attachment URL.
             * @format uri
             */
            fileUrl: string;
            /** Attachment title. */
            title?: string;
            /** Attachment MIME type. */
            mimeType?: string;
            /** Icon URL for the attachment. */
            iconLink?: string;
          }>;
          /** Source metadata for the event. */
          source?: {
            /**
             * Source URL associated with the event.
             * @format uri
             */
            url: string;
            /** Human-readable title for the source. */
            title?: string;
            [key: string]: unknown;
          };
        };
      };
      output: {
        /**
         * Event ID.
         * @minLength 1
         */
        id: string;
        /**
         * Event status.
         * @minLength 1
         */
        status: string;
        /** Event title. */
        summary?: string;
        /** Event description. */
        description?: string;
        /** Event location. */
        location?: string;
        /** Google Calendar web URL for the event. */
        htmlLink?: string;
        /** Timestamp when the event was created. */
        created?: string;
        /** Timestamp when the event was last updated. */
        updated?: string;
        /** Event start time. */
        start?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event end time. */
        end?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event organizer. */
        organizer?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Event creator. */
        creator?: {
          /** Organizer or creator email address. */
          email?: string;
          /** Organizer or creator display name. */
          displayName?: string;
          /** Whether this person is the authenticated user. */
          self?: boolean;
          [key: string]: unknown;
        };
        /** Attendees returned for the event. */
        attendees?: Array<{
          /**
           * Attendee email address.
           * @minLength 1
           */
          email: string;
          /** Attendee display name. */
          displayName?: string;
          /** Whether attendance is optional. */
          optional?: boolean;
          /** Whether the attendee represents a resource. */
          resource?: boolean;
          /** Attendee response status, such as accepted or declined. */
          responseStatus?: string;
          /** Additional attendee comment. */
          comment?: string;
          /** Number of additional guests invited by this attendee. */
          additionalGuests?: number;
        }>;
        /** Recurrence rules for the event. */
        recurrence?: Array<string>;
        /** Recurring master event ID when this item is an instance. */
        recurringEventId?: string;
        /** Original start time for a recurring event instance. */
        originalStartTime?: {
          /**
           * All-day event date in YYYY-MM-DD format.
           * @minLength 1
           */
          date?: string;
          /**
           * Event timestamp in RFC 3339 format.
           * @format date-time
           */
          dateTime?: string;
          /**
           * IANA time zone used to interpret the event time.
           * @minLength 1
           */
          timeZone?: string;
        };
        /** Event type returned by Google Calendar. */
        eventType?: string;
        /** Conference data for the event. */
        conferenceData?: {
          /** Conference identifier for the event. */
          conferenceId?: string;
          /** Additional conference notes. */
          notes?: string;
          /** Conference entry points returned by Google Calendar. */
          entryPoints?: Array<unknown>;
          /** Conference solution metadata. */
          conferenceSolution?: unknown;
          /** Conference creation request details. */
          createRequest?: {
            /**
             * Client-generated request ID used to create conference details.
             * @minLength 1
             */
            requestId: string;
            /** Conference solution payload accepted by Google Calendar. */
            conferenceSolutionKey?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Extended event properties. */
        extendedProperties?: {
          /** Private extended properties keyed by name. */
          private?: Record<string, string>;
          /** Shared extended properties keyed by name. */
          shared?: Record<string, string>;
        };
        /** Attachments on the event. */
        attachments?: Array<{
          /**
           * Attachment URL.
           * @format uri
           */
          fileUrl: string;
          /** Attachment title. */
          title?: string;
          /** Attachment MIME type. */
          mimeType?: string;
          /** Icon URL for the attachment. */
          iconLink?: string;
        }>;
        /** Reminder settings for the event. */
        reminders?: {
          /** Whether to use the calendar's default reminders. */
          useDefault?: boolean;
          /** Reminder overrides for the event. */
          overrides?: Array<{
            /**
             * Reminder delivery method, such as email or popup.
             * @minLength 1
             */
            method: string;
            /** Minutes before the event when the reminder triggers. */
            minutes: number;
          }>;
        };
        /** Source metadata for the event. */
        source?: {
          /**
           * Source URL associated with the event.
           * @format uri
           */
          url: string;
          /** Human-readable title for the source. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
