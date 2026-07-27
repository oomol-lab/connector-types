import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Demio event with its public registration URL and complete scheduled session list. */
    "demio.get_event": {
      input: {
        /** The unique event identifier. */
        id: number;
        /** Whether to return only active sessions in the event series. */
        active?: boolean;
      };
      output: {
        /** The unique event identifier. */
        id: number;
        /** The event name. */
        name: string;
        /** The event description. */
        description: string;
        /** Whether registrants stay registered throughout an event series. */
        registrants_stay_registered: boolean;
        /** The public registration page URL for the event. */
        registration_url: string;
        /** The next available running or scheduled event session identifier. */
        next_date_id: number;
        /** Demio automated-event playback details. */
        automated: {
          /** The automated event video duration in seconds. */
          duration: number;
          /** Whether the automated event video is ready to play. */
          ready: boolean;
        } | null;
        /** All scheduled, running, and finished sessions for the event. */
        dates: Array<{
          /** The unique event session identifier. */
          date_id: number;
          /** The current event session status. */
          status: string;
          /** The scheduled event session time as a Unix timestamp. */
          timestamp: number;
          /** The human-readable scheduled event session time. */
          datetime: string;
          /** The timezone used for the event session. */
          zone: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get scheduling and status information for one Demio event session. */
    "demio.get_event_session": {
      input: {
        /** The unique event identifier. */
        id: number;
        /** The unique event session identifier. */
        date_id: number;
      };
      output: {
        /** The unique event session identifier. */
        date_id: number;
        /** The current event session status. */
        status: string;
        /** The scheduled event session time as a Unix timestamp. */
        timestamp: number;
        /** The human-readable scheduled event session time. */
        datetime: string;
        /** The timezone used for the event session. */
        zone: string;
        [key: string]: unknown;
      };
    };
    /** List participants for one Demio event session, optionally filtered by participation status. */
    "demio.list_event_participants": {
      input: {
        /** The unique event session identifier. */
        date_id: number;
        /** The participation status to return. */
        status?: "attended" | "did not attend" | "completed" | "left early" | "banned";
      };
      output: {
        /** The participants in the event session. */
        participants: Array<{
          /** The participant's email address. */
          email: string;
          /** The participant's name. */
          name: string;
          /** The participant's custom registration field values. */
          custom_fields: Array<{
            /** The custom registration field identifier. */
            id: string;
            /** The custom registration field name. */
            name: string;
            /** The participant's value for the custom registration field. */
            value: string;
            [key: string]: unknown;
          }>;
          /** Whether the participant attended the event session. */
          attended: boolean;
          /** The participant's event session status. */
          status: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List active Demio events, optionally filtered to upcoming, past, or automated events. */
    "demio.list_events": {
      input: {
        /** The event type to return. */
        type?: "upcoming" | "past" | "automated";
      };
      output: Array<{
        /** The unique event identifier. */
        id: number;
        /** The event name. */
        name: string;
        /** The event description. */
        description?: string;
        /** The next scheduled event session identifier. */
        date_id: number;
        /** The next scheduled event session status. */
        status: string;
        /** The next scheduled event session time as a Unix timestamp. */
        timestamp: number;
        /** The timezone used for the next scheduled event session. */
        zone: string;
        /** The public registration page URL for the event. */
        registration_url: string;
        /** Demio automated-event playback details. */
        automated: {
          /** The automated event video duration in seconds. */
          duration: number;
          /** Whether the automated event video is ready to play. */
          ready: boolean;
        } | null;
        [key: string]: unknown;
      }>;
    };
    /** Register one attendee for a Demio event and return the attendee hash and unique join link. */
    "demio.register_attendee": {
      input: {
        /** The event ID, or null when ref_url identifies the event. */
        id?: number | null;
        /**
         * The event registration page URL, or null when id identifies the event.
         * @format uri
         */
        ref_url?: string | null;
        /** The event session ID, or null to let Demio choose the nearest active session. */
        date_id?: number | null;
        /**
         * The attendee's first name.
         * @minLength 3
         */
        name: string;
        /**
         * The attendee's email address.
         * @format email
         */
        email: string;
        /** The attendee's last name. */
        last_name?: string;
        /** The attendee's company. */
        company?: string;
        /** The attendee's company website. */
        website?: string;
        /** The attendee's phone number. */
        phone_number?: string;
        /** The attendee's value for the predefined GDPR field. */
        gdpr?: string;
        [key: string]: string | number | null | string | null | undefined;
      };
      output: {
        /**
         * The attendee hash used to identify the registration.
         * @minLength 1
         */
        hash: string;
        /**
         * The attendee's unique event join link.
         * @format uri
         */
        join_link: string;
        [key: string]: unknown;
      };
    };
  }
}
