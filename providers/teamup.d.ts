import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an event in a Teamup calendar. */
    "teamup.create_event": {
      input: {
        /**
         * The Teamup calendar key or calendar identifier that addresses the calendar.
         * @minLength 1
         */
        calendarKey: string;
        /**
         * The IANA timezone used when Teamup returns event timestamps.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The event start timestamp in ISO 8601 format.
         * @minLength 1
         */
        startDateTime: string;
        /**
         * The event end timestamp in ISO 8601 format.
         * @minLength 1
         */
        endDateTime: string;
        /**
         * The Teamup subcalendar identifiers assigned to the event.
         * @minItems 1
         */
        subcalendarIds: Array<number>;
        /** Whether the event lasts all day. */
        allDay?: boolean;
        /**
         * The event title.
         * @minLength 1
         */
        title: string;
        /** The event location. */
        location?: string;
        /** The people or group associated with the event. */
        who?: string;
        /** The event notes, which may contain Teamup-supported HTML. */
        notes?: string;
        /** The event recurrence rule accepted by Teamup. */
        recurrenceRule?: string;
      };
      output: {
        /** The event object returned by Teamup. */
        event: Record<string, unknown>;
      };
    };
    /** Delete an event from a Teamup calendar. */
    "teamup.delete_event": {
      input: {
        /**
         * The Teamup calendar key or calendar identifier that addresses the calendar.
         * @minLength 1
         */
        calendarKey: string;
        /**
         * The Teamup event identifier.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** The identifier Teamup can use to undo the deletion. */
        undoId: string | null;
      };
    };
    /** Get one Teamup calendar event by its identifier. */
    "teamup.get_event": {
      input: {
        /**
         * The Teamup calendar key or calendar identifier that addresses the calendar.
         * @minLength 1
         */
        calendarKey: string;
        /**
         * The Teamup event identifier.
         * @minLength 1
         */
        eventId: string;
        /**
         * The IANA timezone used when Teamup returns event timestamps.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The event object returned by Teamup. */
        event: Record<string, unknown>;
      };
    };
    /** List events from a Teamup calendar over an optional date range. */
    "teamup.list_events": {
      input: {
        /**
         * The Teamup calendar key or calendar identifier that addresses the calendar.
         * @minLength 1
         */
        calendarKey: string;
        /**
         * The inclusive range start in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive range end in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The IANA timezone used when Teamup returns event timestamps.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The events returned by Teamup. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List subcalendars available through a Teamup calendar key or identifier. */
    "teamup.list_subcalendars": {
      input: {
        /**
         * The Teamup calendar key or calendar identifier that addresses the calendar.
         * @minLength 1
         */
        calendarKey: string;
        /** Whether inactive subcalendars should be included. */
        includeInactive?: boolean;
      };
      output: {
        /** The subcalendars returned by Teamup. */
        subcalendars: Array<Record<string, unknown>>;
      };
    };
    /** Update selected fields of an existing Teamup calendar event. */
    "teamup.update_event": {
      input: {
        /**
         * The Teamup calendar key or calendar identifier that addresses the calendar.
         * @minLength 1
         */
        calendarKey: string;
        /**
         * The Teamup event identifier.
         * @minLength 1
         */
        eventId: string;
        /**
         * The IANA timezone used when Teamup returns event timestamps.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The event start timestamp in ISO 8601 format.
         * @minLength 1
         */
        startDateTime?: string;
        /**
         * The event end timestamp in ISO 8601 format.
         * @minLength 1
         */
        endDateTime?: string;
        /**
         * The Teamup subcalendar identifiers assigned to the event.
         * @minItems 1
         */
        subcalendarIds?: Array<number>;
        /** Whether the event lasts all day. */
        allDay?: boolean;
        /**
         * The event title.
         * @minLength 1
         */
        title?: string;
        /** The event location. */
        location?: string;
        /** The people or group associated with the event. */
        who?: string;
        /** The event notes, which may contain Teamup-supported HTML. */
        notes?: string;
        /** The event recurrence rule accepted by Teamup. */
        recurrenceRule?: string;
      };
      output: {
        /** The event object returned by Teamup. */
        event: Record<string, unknown>;
        /** The identifier Teamup can use to undo the update. */
        undoId: string | null;
      };
    };
  }
}
