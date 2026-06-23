import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Nylas grant by ID. */
    "nylas.get_grant": {
      input: {
        /**
         * The Nylas grant ID to access. Nylas also accepts the grant email address for grant-scoped endpoints.
         * @minLength 1
         * @pattern \S
         */
        grantId: string;
        /** Whether Nylas should include Google or Microsoft email aliases. */
        exposeAliases?: boolean;
      };
      output: {
        /** The Nylas request ID when returned. */
        requestId: string | null;
        /** A Nylas grant object. */
        grant: {
          /** The Nylas grant ID. */
          id: string;
          /** The provider connected to this grant. */
          provider: string;
          /** The email address associated with the grant when returned. */
          email: string | null;
          /** The user display name associated with the grant when returned. */
          name: string | null;
          /** The Nylas grant status when returned. */
          grantStatus: string | null;
          /** When the grant was created, in Unix seconds. */
          createdAt: number | null;
          /** When the grant was last updated, in Unix seconds. */
          updatedAt: number | null;
          /** The raw Nylas object returned by the API. */
          raw: Record<string, unknown>;
        };
        /** The raw Nylas response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List calendars for a Nylas grant. */
    "nylas.list_calendars": {
      input: {
        /**
         * The Nylas grant ID to access. Nylas also accepts the grant email address for grant-scoped endpoints.
         * @minLength 1
         * @pattern \S
         */
        grantId: string;
        /**
         * The maximum number of calendars to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The cursor token for the page to return.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /**
         * A comma-separated list of calendar fields for Nylas to return.
         * @minLength 1
         * @pattern \S
         */
        select?: string;
      };
      output: {
        /** The Nylas request ID when returned. */
        requestId: string | null;
        /** The calendars returned by Nylas. */
        calendars: Array<{
          /** The calendar ID. */
          id: string;
          /** The calendar display name when returned. */
          name: string | null;
          /** The calendar description when returned. */
          description: string | null;
          /** The calendar timezone when returned. */
          timezone: string | null;
          /** Whether this is the user's primary calendar when returned. */
          isPrimary: boolean | null;
          /** Whether the calendar is read-only when returned. */
          readOnly: boolean | null;
          /** The raw Nylas object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor token for the next page when Nylas returns one. */
        nextCursor: string | null;
        /** The raw Nylas response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List calendar events for a Nylas grant and calendar. */
    "nylas.list_events": {
      input: {
        /**
         * The Nylas grant ID to access. Nylas also accepts the grant email address for grant-scoped endpoints.
         * @minLength 1
         * @pattern \S
         */
        grantId: string;
        /**
         * The Nylas calendar ID to filter events by. Use primary to query the user's primary calendar.
         * @minLength 1
         * @pattern \S
         */
        calendarId: string;
        /**
         * The maximum number of events to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The cursor token for the page to return.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /**
         * Filter events that start at or after this Unix timestamp.
         * @minimum 0
         */
        start?: number;
        /**
         * Filter events that end at or before this Unix timestamp.
         * @minimum 0
         */
        end?: number;
        /**
         * Filter events by title text.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /**
         * Filter events by description text.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /**
         * Filter events by location text.
         * @minLength 1
         * @pattern \S
         */
        location?: string;
        /** Whether Nylas should include cancelled events. */
        showCancelled?: boolean;
        /** Whether Nylas should treat tentative Microsoft events as busy. */
        tentativeAsBusy?: boolean;
        /**
         * Filter events updated after this Unix timestamp.
         * @minimum 0
         */
        updatedAfter?: number;
        /**
         * Filter events updated before this Unix timestamp.
         * @minimum 0
         */
        updatedBefore?: number;
        /**
         * A comma-separated list of event fields for Nylas to return.
         * @minLength 1
         * @pattern \S
         */
        select?: string;
      };
      output: {
        /** The Nylas request ID when returned. */
        requestId: string | null;
        /** The events returned by Nylas. */
        events: Array<{
          /** The event ID. */
          id: string;
          /** The event title when returned. */
          title: string | null;
          /** The calendar ID associated with the event when returned. */
          calendarId: string | null;
          /** The grant ID associated with the event when returned. */
          grantId: string | null;
          /** Whether the event blocks time as busy when returned. */
          busy: boolean | null;
          /** The event status when returned. */
          status: string | null;
          /** The provider event URL when returned. */
          htmlLink: string | null;
          /** The raw Nylas object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor token for the next page when Nylas returns one. */
        nextCursor: string | null;
        /** The raw Nylas response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List grants in the Nylas application with optional filters. */
    "nylas.list_grants": {
      input: {
        /**
         * The maximum number of grants to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The result offset for Nylas offset pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * Filter grants by email address.
         * @minLength 1
         * @pattern \S
         */
        email?: string;
        /**
         * Filter grants by provider name.
         * @minLength 1
         * @pattern \S
         */
        provider?: string;
        /** Filter grants by grant status. */
        grantStatus?: "valid" | "invalid";
        /**
         * Filter grants by Nylas workspace ID.
         * @minLength 1
         * @pattern \S
         */
        workspaceId?: string;
        /**
         * Return grants created at or after this Unix timestamp.
         * @minimum 0
         */
        since?: number;
        /**
         * Return grants created at or before this Unix timestamp.
         * @minimum 0
         */
        before?: number;
        /**
         * The sort order accepted by Nylas.
         * @minLength 1
         * @pattern \S
         */
        orderBy?: string;
        /**
         * The field Nylas should use to sort grants.
         * @minLength 1
         * @pattern \S
         */
        sortBy?: string;
      };
      output: {
        /** The Nylas request ID when returned. */
        requestId: string | null;
        /** The grants returned by Nylas. */
        grants: Array<{
          /** The Nylas grant ID. */
          id: string;
          /** The provider connected to this grant. */
          provider: string;
          /** The email address associated with the grant when returned. */
          email: string | null;
          /** The user display name associated with the grant when returned. */
          name: string | null;
          /** The Nylas grant status when returned. */
          grantStatus: string | null;
          /** When the grant was created, in Unix seconds. */
          createdAt: number | null;
          /** When the grant was last updated, in Unix seconds. */
          updatedAt: number | null;
          /** The raw Nylas object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The page limit returned by Nylas when present. */
        limit: number | null;
        /** The page offset returned by Nylas when present. */
        offset: number | null;
        /** The raw Nylas response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
