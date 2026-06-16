import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Evenium event by event ID or external event ID. */
    "evenium.get_event": {
      input: {
        /**
         * The Evenium event identifier or external event ID.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** One Evenium event returned by the organizer API. */
        event: {
          /**
           * The Evenium event identifier.
           * @minLength 1
           */
          id?: string;
          /** The event title returned by Evenium. */
          title?: string;
          /** The event description returned by Evenium. */
          description?: string;
          /** The event start timestamp in ISO 8601 format. */
          startDate?: string;
          /** The event end timestamp in ISO 8601 format. */
          endDate?: string;
          /** The event creation timestamp in ISO 8601 format. */
          creationDate?: string;
          /** The current Evenium event status. */
          status?: string;
          /** The Evenium relative event URL. */
          url?: string;
          /** Additional event field entries returned by Evenium. */
          fields?: Array<{
            /**
             * The Evenium event field name.
             * @minLength 1
             */
            name?: string;
            /** The field value returned for the event. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Evenium guest by contact ID or guest code for a given event. */
    "evenium.get_guest": {
      input: {
        /**
         * The Evenium event identifier or external event ID.
         * @minLength 1
         */
        eventId: string;
        /**
         * The Evenium contact identifier or external contact ID.
         * @minLength 1
         */
        contactId?: string;
        /**
         * The Evenium guest code.
         * @minLength 1
         */
        guestCode?: string;
        /** Optional guest sub-resources to expand on guest responses. */
        fields?: Array<"REGISTRATION" | "PRESENCE" | "SIGNATURE">;
      };
      output: {
        /** One Evenium guest returned by the organizer API. */
        guest: {
          /**
           * The Evenium contact identifier for the guest.
           * @minLength 1
           */
          contactId?: string;
          /** The external custom identifier attached to the guest. */
          customId?: string;
          /**
           * The Evenium event identifier that owns the guest.
           * @minLength 1
           */
          eventId?: string;
          /** The Evenium guest code used for direct guest lookup. */
          guestCode?: string;
          /** The guest first name. */
          firstName?: string;
          /** The guest last name. */
          lastName?: string;
          /** The guest gender value returned by Evenium. */
          gender?: string;
          /** The guest email address. */
          email?: string;
          /** The guest company name. */
          company?: string;
          /** The last update timestamp in ISO 8601 format. */
          lastUpdate?: string;
          /** The guest RSVP status returned by Evenium. */
          status?: string;
          /** The guest category returned by Evenium as either an identifier string or an object payload. */
          category?: string | {
            /**
             * The Evenium category identifier.
             * @minimum 0
             */
            id?: number;
            /** The Evenium category label. */
            label?: string;
            [key: string]: unknown;
          };
          /** The guest category label returned in list responses. */
          categoryLabel?: string;
          /** The custom fields attached to the guest. */
          fields?: Array<{
            /**
             * The Evenium field identifier or field name.
             * @minLength 1
             */
            name?: string;
            /** The field value returned by Evenium. */
            value?: string;
            /** Whether the field is event-specific when Evenium returns that marker. */
            eventOnly?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current post-event attendance status for one Evenium guest. */
    "evenium.get_guest_post_status": {
      input: {
        /**
         * The Evenium event identifier or external event ID.
         * @minLength 1
         */
        eventId: string;
        /**
         * The Evenium contact identifier or external contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** The Evenium guest post-status payload. */
        guestPostStatus: {
          /**
           * The Evenium contact identifier for the guest.
           * @minLength 1
           */
          contactId: string;
          /**
           * The Evenium event identifier that owns the guest.
           * @minLength 1
           */
          eventId: string;
          /** The current post-event status returned by Evenium. */
          postStatus: string;
        };
      };
    };
    /** Get the current RSVP status for one Evenium guest. */
    "evenium.get_guest_status": {
      input: {
        /**
         * The Evenium event identifier or external event ID.
         * @minLength 1
         */
        eventId: string;
        /**
         * The Evenium contact identifier or external contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** The Evenium guest status payload. */
        guestStatus: {
          /**
           * The Evenium contact identifier for the guest.
           * @minLength 1
           */
          contactId: string;
          /**
           * The Evenium event identifier that owns the guest.
           * @minLength 1
           */
          eventId: string;
          /** The current RSVP status returned by Evenium. */
          status: string;
        };
      };
    };
    /** List Evenium events with optional title, status, date filters, and pagination. */
    "evenium.list_events": {
      input: {
        /**
         * The maximum number of events to return.
         * @minimum 0
         */
        maxResults?: number;
        /**
         * The zero-based offset of the first event to return.
         * @minimum 0
         */
        firstResult?: number;
        /**
         * Only return events that start after this ISO 8601 timestamp.
         * @minLength 1
         */
        startsAfter?: string;
        /**
         * Only return events that start before this ISO 8601 timestamp.
         * @minLength 1
         */
        startsBefore?: string;
        /**
         * Only return events that end after this ISO 8601 timestamp.
         * @minLength 1
         */
        endsAfter?: string;
        /**
         * Only return events that end before this ISO 8601 timestamp.
         * @minLength 1
         */
        endsBefore?: string;
        /**
         * Only return events created after this ISO 8601 timestamp.
         * @minLength 1
         */
        createdAfter?: string;
        /**
         * Only return events created before this ISO 8601 timestamp.
         * @minLength 1
         */
        createdBefore?: string;
        /**
         * Only return events whose title contains this value.
         * @minLength 1
         */
        title?: string;
        /**
         * Only return events with this Evenium status value.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /**
         * The total number of events returned by this query.
         * @minimum 0
         */
        nbrResults: number;
        /**
         * The maximum number of events requested by the query.
         * @minimum 0
         */
        maxResults: number;
        /**
         * The zero-based offset of the first returned event.
         * @minimum 0
         */
        firstResult: number;
        /** Whether Evenium reports that more events are available. */
        more: boolean;
        /** The events returned by the current page. */
        events: Array<{
          /**
           * The Evenium event identifier.
           * @minLength 1
           */
          id?: string;
          /** The event title returned by Evenium. */
          title?: string;
          /** The event description returned by Evenium. */
          description?: string;
          /** The event start timestamp in ISO 8601 format. */
          startDate?: string;
          /** The event end timestamp in ISO 8601 format. */
          endDate?: string;
          /** The event creation timestamp in ISO 8601 format. */
          creationDate?: string;
          /** The current Evenium event status. */
          status?: string;
          /** The Evenium relative event URL. */
          url?: string;
          /** Additional event field entries returned by Evenium. */
          fields?: Array<{
            /**
             * The Evenium event field name.
             * @minLength 1
             */
            name?: string;
            /** The field value returned for the event. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List guests for one Evenium event with optional attendee filters, expansions, and pagination. */
    "evenium.list_guests": {
      input: {
        /**
         * The Evenium event identifier or external event ID.
         * @minLength 1
         */
        eventId: string;
        /**
         * The maximum number of guests to return.
         * @minimum 0
         */
        maxResults?: number;
        /**
         * The zero-based offset of the first guest to return.
         * @minimum 0
         */
        firstResult?: number;
        /** Optional guest sub-resources to expand on guest responses. */
        fields?: Array<"REGISTRATION" | "PRESENCE" | "SIGNATURE">;
        /**
         * Only return guests with this Evenium RSVP status.
         * @minLength 1
         */
        status?: string;
        /**
         * Only return guests updated after this ISO 8601 timestamp.
         * @minLength 1
         */
        since?: string;
        /**
         * Only return guests updated before this ISO 8601 timestamp.
         * @minLength 1
         */
        until?: string;
        /**
         * Only return guests whose last name matches this value.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Only return guests whose first name matches this value.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Only return guests whose email exactly matches this value.
         * @minLength 1
         */
        email?: string;
        /**
         * Only return guests whose company matches this value.
         * @minLength 1
         */
        company?: string;
      };
      output: {
        /**
         * The total number of guests returned by this query.
         * @minimum 0
         */
        nbrResults: number;
        /**
         * The maximum number of guests requested by the query.
         * @minimum 0
         */
        maxResults: number;
        /**
         * The zero-based offset of the first returned guest.
         * @minimum 0
         */
        firstResult: number;
        /** Whether Evenium reports that more guests are available. */
        more: boolean;
        /** The guests returned by the current page. */
        guests: Array<{
          /**
           * The Evenium contact identifier for the guest.
           * @minLength 1
           */
          contactId?: string;
          /** The external custom identifier attached to the guest. */
          customId?: string;
          /**
           * The Evenium event identifier that owns the guest.
           * @minLength 1
           */
          eventId?: string;
          /** The Evenium guest code used for direct guest lookup. */
          guestCode?: string;
          /** The guest first name. */
          firstName?: string;
          /** The guest last name. */
          lastName?: string;
          /** The guest gender value returned by Evenium. */
          gender?: string;
          /** The guest email address. */
          email?: string;
          /** The guest company name. */
          company?: string;
          /** The last update timestamp in ISO 8601 format. */
          lastUpdate?: string;
          /** The guest RSVP status returned by Evenium. */
          status?: string;
          /** The guest category returned by Evenium as either an identifier string or an object payload. */
          category?: string | {
            /**
             * The Evenium category identifier.
             * @minimum 0
             */
            id?: number;
            /** The Evenium category label. */
            label?: string;
            [key: string]: unknown;
          };
          /** The guest category label returned in list responses. */
          categoryLabel?: string;
          /** The custom fields attached to the guest. */
          fields?: Array<{
            /**
             * The Evenium field identifier or field name.
             * @minLength 1
             */
            name?: string;
            /** The field value returned by Evenium. */
            value?: string;
            /** Whether the field is event-specific when Evenium returns that marker. */
            eventOnly?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
