import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get full Jamie meeting details, including summary, transcript, tasks, and tags. */
    "jamie.get_meeting": {
      input: {
        /**
         * The Jamie meeting ID.
         * @minLength 1
         */
        meetingId: string;
      };
      output: {
        /** Full Jamie meeting details. */
        meeting: {
          /**
           * Unique Jamie meeting ID.
           * @minLength 1
           */
          id: string;
          /**
           * Meeting title.
           * @minLength 1
           */
          title: string;
          /** AI-generated meeting title when available. */
          generatedTitle: string | null;
          /**
           * ISO 8601 meeting start time.
           * @format date-time
           */
          startTime: string;
          /**
           * ISO 8601 meeting end time when available.
           * @format date-time
           */
          endTime: string | null;
          /** Jamie user who recorded the meeting. */
          user: {
            /**
             * Jamie user ID.
             * @minLength 1
             */
            id: string;
            /**
             * Jamie user email address.
             * @format email
             */
            email: string;
            [key: string]: unknown;
          };
          /** Jamie meeting summary content. */
          summary: {
            /** Meeting summary formatted as Markdown. */
            markdown: string;
            /** Meeting summary formatted as HTML. */
            html: string;
            /** Short one-line meeting summary. */
            short: string;
            [key: string]: unknown;
          };
          /** Full markdown-formatted meeting transcript. */
          transcript: string;
          /** People detected from the transcript. */
          participants: Array<{
            /**
             * Participant ID.
             * @minLength 1
             */
            id: string;
            /**
             * Participant display name.
             * @minLength 1
             */
            name: string;
            /** Participant email address when available. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Action items extracted from the meeting. */
          tasks: Array<{
            /**
             * Task description.
             * @minLength 1
             */
            content: string;
            /** Whether the task is marked as done. */
            completed: boolean;
            /** A Jamie person object when the value is available. */
            assignee?: {
              /**
               * The person's display name.
               * @minLength 1
               */
              name: string;
              /** The person's email address when Jamie returned one. */
              email?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          /** Tags applied to the meeting. */
          tags: Array<{
            /**
             * Jamie tag name.
             * @minLength 1
             */
            name: string;
            /**
             * Jamie tag color.
             * @minLength 1
             */
            color: string;
            [key: string]: unknown;
          }>;
          /** Calendar event information linked to a Jamie meeting. */
          event: {
            /** Internal Jamie calendar event ID when available. */
            id?: string | null;
            /** Calendar provider event ID when available. */
            externalId?: string | null;
            /**
             * Calendar event title.
             * @minLength 1
             */
            title: string;
            /**
             * ISO 8601 scheduled start time.
             * @format date-time
             */
            scheduledTime: string;
            /**
             * ISO 8601 event end time when available.
             * @format date-time
             */
            endTime?: string | null;
            /** People invited to the calendar event. */
            attendees: Array<{
              /**
               * Attendee display name.
               * @minLength 1
               */
              name: string;
              /**
               * Attendee email address.
               * @minLength 1
               */
              email: string;
              /** Attendee RSVP status when available. */
              responseStatus?: string | null;
              /** Whether this attendee organized the calendar event. */
              organizer: boolean;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Jamie meetings for a personal or workspace API key with optional pagination and filters. */
    "jamie.list_meetings": {
      input: {
        /**
         * The number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by Jamie.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Only return records starting or created on or after this ISO 8601 date.
         * @minLength 1
         */
        startDate?: string;
        /**
         * Only return records starting or created on or before this ISO 8601 date.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Workspace-key-only filter for a specific user's email address.
         * @format email
         */
        userEmail?: string;
        /**
         * Personal-key-only filter by Jamie tag name.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Meetings returned for the requested page. */
        meetings: Array<{
          /**
           * Unique Jamie meeting ID.
           * @minLength 1
           */
          id: string;
          /**
           * Meeting title.
           * @minLength 1
           */
          title: string;
          /** AI-generated meeting title when available. */
          generatedTitle?: string | null;
          /**
           * ISO 8601 meeting start time.
           * @format date-time
           */
          startTime: string;
          /**
           * ISO 8601 meeting end time when available.
           * @format date-time
           */
          endTime?: string | null;
          /** Linked calendar event ID when available. */
          calendarEventId?: string | null;
          /**
           * ID of the Jamie user who recorded the meeting.
           * @minLength 1
           */
          userId: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page, or null if there are no more pages. */
        nextCursor: string | null;
      };
    };
    /** List Jamie tags available to a personal API key. */
    "jamie.list_tags": {
      input: Record<string, never>;
      output: {
        /** Tags returned by Jamie. */
        tags: Array<{
          /**
           * Unique Jamie tag ID.
           * @minLength 1
           */
          id: string;
          /**
           * Jamie tag name.
           * @minLength 1
           */
          name: string;
          /** Whether the tag was shared with the current user. */
          shared: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Jamie action items for a personal or workspace API key. */
    "jamie.list_tasks": {
      input: {
        /**
         * The number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by Jamie.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Only return records starting or created on or after this ISO 8601 date.
         * @minLength 1
         */
        startDate?: string;
        /**
         * Only return records starting or created on or before this ISO 8601 date.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Workspace-key-only filter for a specific user's email address.
         * @format email
         */
        userEmail?: string;
        /** Filter tasks by completion status. */
        completed?: boolean;
        /**
         * Filter tasks from a specific Jamie meeting.
         * @minLength 1
         */
        meetingId?: string;
      };
      output: {
        /** Tasks returned for the requested page. */
        tasks: Array<{
          /**
           * Unique Jamie task ID.
           * @minLength 1
           */
          id: string;
          /**
           * Task description.
           * @minLength 1
           */
          text: string;
          /** Whether the task is marked as done. */
          completed: boolean;
          /** Assigned person when Jamie returned one. */
          assignee?: {
            /** Assignee person ID when available. */
            id?: string | null;
            /**
             * Assignee display name.
             * @minLength 1
             */
            name: string;
            /** Assignee email address when available. */
            email?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * ID of the meeting this task was extracted from.
           * @minLength 1
           */
          meetingId: string;
          /** Title of the source meeting when available. */
          meetingTitle?: string | null;
          /**
           * ISO 8601 timestamp when the task was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ID of the Jamie user who recorded the meeting.
           * @minLength 1
           */
          userId: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page, or null if there are no more pages. */
        nextCursor: string | null;
      };
    };
    /** Search Jamie meeting content with a personal API key. */
    "jamie.search_meetings": {
      input: {
        /**
         * The semantic search query.
         * @minLength 1
         */
        query: string;
        /**
         * Only return records starting or created on or after this ISO 8601 date.
         * @minLength 1
         */
        startDate?: string;
        /**
         * Only return records starting or created on or before this ISO 8601 date.
         * @minLength 1
         */
        endDate?: string;
      };
      output: {
        /** Matching meeting text chunks. */
        results: Array<{
          /**
           * Unique search chunk ID.
           * @minLength 1
           */
          id: string;
          /**
           * The matching text excerpt.
           * @minLength 1
           */
          text: string;
          /**
           * ID of the source meeting.
           * @minLength 1
           */
          meetingId: string;
          /** Title of the source meeting when available. */
          meetingTitle: string | null;
          /**
           * Date of the source meeting.
           * @format date
           */
          meetingDate: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
