import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an attendee to a Cal.com booking. */
    "cal.add_attendee": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /**
         * The attendee's display name.
         * @minLength 1
         */
        name: string;
        /**
         * The attendee's email address.
         * @minLength 1
         */
        email: string;
        /**
         * The attendee's IANA time zone.
         * @minLength 1
         */
        timeZone: string;
        /** The attendee's phone number. */
        phoneNumber?: string;
        /** The attendee's preferred language. */
        language?: string;
      };
      output: {
        /** The attendee created by the action. */
        attendee: {
          /** The unique identifier of the attendee. */
          id?: number;
          /** The ID of the associated booking. */
          bookingId?: number;
          /** The name of the attendee. */
          name?: string;
          /** The email address of the attendee. */
          email?: string;
          /** The display email address of the attendee. */
          displayEmail?: string;
          /** The time zone of the attendee. */
          timeZone?: string;
          /** The locale of the attendee. */
          locale?: string;
          /** The preferred language of the attendee. */
          language?: string;
          /** The phone number of the attendee. */
          phoneNumber?: string;
          /** Whether the attendee was absent. */
          absent?: boolean;
        };
      };
    };
    /** Cancel a Cal.com booking by UID, optionally providing a cancellation reason. */
    "cal.cancel_booking": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** The reason shown for cancelling the booking. */
        cancellationReason?: string;
        /** Whether subsequent recurring bookings should also be cancelled. */
        cancelSubsequentBookings?: boolean;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Compatibility alias for the cancel-booking-via-uid action name. Cancels a booking by UID. */
    "cal.cancel_booking_via_uid": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** The seat UID to cancel for seat-based bookings. */
        seatUid?: string;
        /** The reason shown for cancelling the booking. */
        cancellationReason?: string;
        /** Whether subsequent recurring bookings should also be cancelled. */
        cancelSubsequentBookings?: boolean;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Confirm a Cal.com booking by UID. */
    "cal.confirm_booking_by_uid": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Create a Cal.com booking. */
    "cal.create_booking": {
      input: {
        /**
         * The requested booking start time.
         * @minLength 1
         */
        start: string;
        /** The primary attendee information. */
        attendee: {
          /**
           * The attendee's display name.
           * @minLength 1
           */
          name: string;
          /**
           * The attendee's email address.
           * @minLength 1
           */
          email: string;
          /**
           * The attendee's IANA time zone.
           * @minLength 1
           */
          timeZone: string;
          /** The attendee's phone number. */
          phoneNumber?: string;
          /** The attendee's preferred language. */
          language?: string;
        };
        /** The numeric Cal.com event type ID. */
        eventTypeId?: number;
        /** The Cal.com event type slug. */
        eventTypeSlug?: string;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** The Cal.com team slug. */
        teamSlug?: string;
        /** The Cal.com organization slug. */
        organizationSlug?: string;
        /** The answers for custom booking form fields. */
        bookingFieldsResponses?: Record<string, unknown>;
        /** Additional guest email addresses. */
        guests?: Array<string>;
        /** The meeting URL to attach to the booking. */
        meetingUrl?: string;
        /** The location payload for the booking. */
        location?: Record<string, unknown>;
        /** Additional metadata to attach to the booking. */
        metadata?: Record<string, unknown>;
        /**
         * The requested booking duration in minutes.
         * @exclusiveMinimum 0
         */
        lengthInMinutes?: number;
        /** Routing metadata for round-robin or collective bookings. */
        routing?: Record<string, unknown>;
        /** The email verification code for protected bookings. */
        emailVerificationCode?: string;
        /** Whether to request instant booking behavior. */
        instant?: boolean;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Create a Cal.com event type for the authenticated user. */
    "cal.create_event_type": {
      input: {
        /**
         * The title of the event type.
         * @minLength 1
         */
        title: string;
        /**
         * The URL slug for the event type.
         * @minLength 1
         */
        slug: string;
        /**
         * The duration of the event in minutes.
         * @exclusiveMinimum 0
         */
        lengthInMinutes: number;
        /** The description of the event type. */
        description?: string | null;
        [key: string]: unknown;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** Create a schedule for the authenticated Cal.com user. */
    "cal.create_schedule": {
      input: {
        /**
         * The display name of the schedule.
         * @minLength 1
         */
        name: string;
        /**
         * The IANA time zone used for this request.
         * @minLength 1
         */
        timeZone: string;
        /** Whether to make this the default schedule. */
        isDefault?: boolean;
        /** The weekly availability rules for the schedule. */
        availability: Array<{
          /** The weekdays this availability block applies to. */
          days: Array<string>;
          /** The start time for the availability block. */
          startTime: string;
          /** The end time for the availability block. */
          endTime: string;
        }>;
        /** The date-specific availability overrides. */
        overrides?: Array<{
          /** The date that the override applies to. */
          date: string;
          /** The start time for the override block. */
          startTime: string;
          /** The end time for the override block. */
          endTime: string;
        }>;
      };
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Compatibility alias for the create-user-availability-schedule action name. Creates a schedule. */
    "cal.create_user_availability_schedule": {
      input: {
        /**
         * The display name of the schedule.
         * @minLength 1
         */
        name: string;
        /**
         * The IANA time zone used for this request.
         * @minLength 1
         */
        timeZone: string;
        /** Whether to make this the default schedule. */
        isDefault?: boolean;
        /** The weekly availability rules for the schedule. */
        availability: Array<{
          /** The weekdays this availability block applies to. */
          days: Array<string>;
          /** The start time for the availability block. */
          startTime: string;
          /** The end time for the availability block. */
          endTime: string;
        }>;
        /** The date-specific availability overrides. */
        overrides?: Array<{
          /** The date that the override applies to. */
          date: string;
          /** The start time for the override block. */
          startTime: string;
          /** The end time for the override block. */
          endTime: string;
        }>;
      };
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Decline a Cal.com booking by UID with an optional reason. */
    "cal.decline_booking_with_reason": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** The reason for declining the booking. */
        reason?: string;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Delete a Cal.com event type by numeric ID. */
    "cal.delete_event_type": {
      input: {
        /** The numeric Cal.com event type ID. */
        eventTypeId: number;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** Compatibility alias for the delete-event-type-by-id action name. Deletes a Cal.com event type by ID. */
    "cal.delete_event_type_by_id": {
      input: {
        /** The numeric Cal.com event type ID. */
        eventTypeId: number;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** Delete a schedule for the authenticated Cal.com user. */
    "cal.delete_schedule": {
      input: {
        /** The numeric Cal.com schedule ID. */
        scheduleId: number;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Compatibility alias for the delete-schedule-by-id action name. Deletes a schedule. */
    "cal.delete_schedule_by_id": {
      input: {
        /** The numeric Cal.com schedule ID. */
        scheduleId: number;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Compatibility alias for the fetch-all-bookings action name. Lists bookings with optional filters and pagination. */
    "cal.fetch_all_bookings": {
      input: {
        /**
         * The number of bookings to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of bookings to return.
         * @minimum 1
         * @maximum 200
         */
        take?: number;
        /** The booking statuses to include. */
        status?: Array<string>;
        /** The numeric Cal.com team ID. */
        teamId?: number;
        /** A comma-separated list of team IDs to include. */
        teamsIds?: string;
        /** The sort direction. */
        sortStart?: "asc" | "desc";
        /** The sort direction. */
        sortEnd?: "asc" | "desc";
        /** The sort direction. */
        sortCreated?: "asc" | "desc";
        /** Only return bookings that start after this time. */
        afterStart?: string;
        /** Only return bookings that end before this time. */
        beforeEnd?: string;
        /** Filter bookings by attendee name. */
        attendeeName?: string;
        /** Filter bookings by attendee email address. */
        attendeeEmail?: string;
        /** The numeric Cal.com event type ID. */
        eventTypeId?: number;
        /** A comma-separated list of event type IDs to include. */
        eventTypeIds?: string;
      };
      output: {
        /** The bookings returned by Cal.com. */
        bookings: Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
        /** The opaque cursor for the next page, or null when there are no more results. */
        nextCursor: string | null;
      };
    };
    /** Compatibility alias for the fetch-event-type-details action name. Gets a single Cal.com event type by ID. */
    "cal.fetch_event_type_details": {
      input: {
        /** The Cal.com event type ID, as a number or non-empty string. */
        eventTypeId: number | string;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** The numeric Cal.com team ID. */
        teamId?: number;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** Compatibility alias for the fetch-schedule-by-id action name. Gets a schedule by numeric ID. */
    "cal.fetch_schedule_by_id": {
      input: {
        /** The numeric Cal.com schedule ID. */
        scheduleId: number;
      };
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Compatibility action for the get-available-slots-info action name. Returns available slots for a user, team, or event type. */
    "cal.get_available_slots_info": {
      input: {
        /** The numeric Cal.com event type ID. */
        eventTypeId?: number;
        /** The Cal.com event type slug. */
        eventTypeSlug?: string;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** A comma-separated list of usernames to query availability for. */
        usernames?: string;
        /** The Cal.com team slug. */
        teamSlug?: string;
        /** The Cal.com organization slug. */
        organizationSlug?: string;
        /** The inclusive start of the availability window. */
        start?: string;
        /** The inclusive end of the availability window. */
        end?: string;
        /** The IANA time zone used for this request. */
        timeZone?: string;
        /**
         * The desired slot duration in minutes.
         * @exclusiveMinimum 0
         */
        duration?: number;
        /** The slot response format to request. */
        format?: "range" | "time";
        /** A booking UID that should be excluded while rescheduling. */
        bookingUidToReschedule?: string;
      };
      output: {
        /** The available slots keyed by date or grouping bucket. */
        slots: Record<string, Array<{
            /** The start time of the slot. */
            start: string;
            /** The end time of the slot. */
            end?: string;
            /** The number of attendees booked in the slot. */
            attendeesCount?: number;
            /** The UID of the booking in the slot. */
            bookingUid?: string;
            [key: string]: unknown;
          }>>;
      };
    };
    /** Get a Cal.com booking by booking UID. */
    "cal.get_booking": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Compatibility alias for the get-booking-references action name. Lists booking references. */
    "cal.get_booking_references": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** Filter references by reference type. */
        type?: string;
      };
      output: {
        /** The booking references returned by Cal.com. */
        references: Array<{
          /** The unique identifier of the booking reference. */
          id: number;
          /** The type of the booking reference. */
          type: string;
          /** The UID of the associated calendar event. */
          eventUid?: string;
          /** The ID of the destination calendar. */
          destinationCalendarId?: string;
        }>;
      };
    };
    /** Get the default schedule for the authenticated Cal.com user. */
    "cal.get_default_schedule": {
      input: Record<string, never>;
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Compatibility alias for the get-default-schedule-details action name. Returns the default schedule for the authenticated user. */
    "cal.get_default_schedule_details": {
      input: Record<string, never>;
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Get a single Cal.com event type by its numeric ID. */
    "cal.get_event_type": {
      input: {
        /** The numeric Cal.com event type ID. */
        eventTypeId: number;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** The numeric Cal.com team ID. */
        teamId?: number;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** List private links configured for a Cal.com event type. */
    "cal.get_event_type_private_links": {
      input: {
        /** The numeric Cal.com event type ID. */
        eventTypeId: number;
      };
      output: {
        /** The private links configured for the event type. */
        privateLinks: Array<{
          /** The unique identifier of the private link. */
          linkId: string;
          /** The ID of the associated event type. */
          eventTypeId: number;
          /** Whether the private link has expired. */
          isExpired?: boolean;
          /** The booking URL for the private link. */
          bookingUrl?: string;
          /** The expiration date of the private link. */
          expiresAt?: string | null;
          /** The maximum number of times the link can be used. */
          maxUsageCount?: number | null;
          /** The current number of times the link has been used. */
          currentUsageCount?: number | null;
        }>;
      };
    };
    /** Get the current Cal.com user profile from the authenticated OAuth account. */
    "cal.get_my_profile": {
      input: Record<string, never>;
      output: {
        /** The authenticated user's profile. */
        profile: {
          /** The unique identifier of the profile. */
          id: number;
          /** The username of the profile. */
          username: string;
          /** The email address of the profile. */
          email: string;
          /** The display name of the user. */
          name?: string | null;
          /** The biography of the user. */
          bio?: string | null;
          /** The time zone of the user. */
          timeZone?: string;
          /** The preferred week start day. */
          weekStart?: string | null;
          /** The preferred time format (12 or 24). */
          timeFormat?: number | null;
          /** The ID of the default schedule. */
          defaultScheduleId?: number | null;
          /** The ID of the organization. */
          organizationId?: number | null;
          /** The URL of the user avatar. */
          avatarUrl?: string | null;
          /** The brand color hex code. */
          brandColor?: string | null;
        };
      };
    };
    /** Get a Cal.com schedule by numeric schedule ID. */
    "cal.get_schedule": {
      input: {
        /** The numeric Cal.com schedule ID. */
        scheduleId: number;
      };
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** List attendees for a Cal.com booking by booking UID. */
    "cal.list_attendees": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
      };
      output: {
        /** The attendees returned for the booking. */
        attendees: Array<{
          /** The unique identifier of the attendee. */
          id?: number;
          /** The ID of the associated booking. */
          bookingId?: number;
          /** The name of the attendee. */
          name?: string;
          /** The email address of the attendee. */
          email?: string;
          /** The display email address of the attendee. */
          displayEmail?: string;
          /** The time zone of the attendee. */
          timeZone?: string;
          /** The locale of the attendee. */
          locale?: string;
          /** The preferred language of the attendee. */
          language?: string;
          /** The phone number of the attendee. */
          phoneNumber?: string;
          /** Whether the attendee was absent. */
          absent?: boolean;
        }>;
      };
    };
    /** List booking references for a Cal.com booking. */
    "cal.list_booking_references": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** Filter references by reference type. */
        type?: string;
      };
      output: {
        /** The booking references returned by Cal.com. */
        references: Array<{
          /** The unique identifier of the booking reference. */
          id: number;
          /** The type of the booking reference. */
          type: string;
          /** The UID of the associated calendar event. */
          eventUid?: string;
          /** The ID of the destination calendar. */
          destinationCalendarId?: string;
        }>;
      };
    };
    /** List bookings for the authenticated Cal.com user with optional date, attendee, and event-type filters. */
    "cal.list_bookings": {
      input: {
        /** Filter bookings by status. */
        status?: string;
        /** Filter bookings by attendee email address. */
        attendeeEmail?: string;
        /** The numeric Cal.com event type ID. */
        eventTypeId?: number;
        /** The Cal.com event type slug. */
        eventTypeSlug?: string;
        /** The sort direction. */
        sortStart?: "asc" | "desc";
        /** The sort direction. */
        sortEnd?: "asc" | "desc";
        /** Only return bookings that start after this time. */
        afterStart?: string;
        /** Only return bookings that start before this time. */
        beforeStart?: string;
        /** Only return bookings that end after this time. */
        afterEnd?: string;
        /** Only return bookings that end before this time. */
        beforeEnd?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The opaque pagination cursor returned by Cal.com. */
        cursor?: string;
      };
      output: {
        /** The bookings returned by Cal.com. */
        bookings: Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
        /** The opaque cursor for the next page, or null when there are no more results. */
        nextCursor: string | null;
      };
    };
    /** List Cal.com event types for the authenticated user with optional pagination and status filters. */
    "cal.list_event_types": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The opaque pagination cursor returned by Cal.com. */
        cursor?: string;
        /** The numeric Cal.com team ID. */
        teamId?: number;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** Filter event types by status. */
        status?: string;
        /** Filter event types by scheduling type. */
        schedulingType?: string;
        /** Whether to return only active event types. */
        onlyActive?: boolean;
      };
      output: {
        /** The event types returned by Cal.com. */
        eventTypes: Array<{
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        }>;
        /** The opaque cursor for the next page, or null when there are no more results. */
        nextCursor: string | null;
      };
    };
    /** List schedules available to the authenticated Cal.com user. */
    "cal.list_schedules": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The opaque pagination cursor returned by Cal.com. */
        cursor?: string;
      };
      output: {
        /** The schedules returned by Cal.com. */
        schedules: Array<{
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        }>;
        /** The opaque cursor for the next page, or null when there are no more results. */
        nextCursor: string | null;
      };
    };
    /** Mark a Cal.com booking host or attendees absent. */
    "cal.mark_booking_absent_for_uid": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** Whether to mark the booking host absent. */
        host?: boolean;
        /** The attendees whose absence status should be updated. */
        attendees?: Array<{
          /** The attendee email address. */
          email: string;
          /** Whether to mark this attendee absent. */
          absent: boolean;
        }>;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Compatibility alias for the post-new-booking-request action name. Creates a booking. */
    "cal.post_new_booking_request": {
      input: {
        /**
         * The requested booking start time.
         * @minLength 1
         */
        start: string;
        /** The primary attendee information. */
        attendee: {
          /**
           * The attendee's display name.
           * @minLength 1
           */
          name: string;
          /**
           * The attendee's email address.
           * @minLength 1
           */
          email: string;
          /**
           * The attendee's IANA time zone.
           * @minLength 1
           */
          timeZone: string;
          /** The attendee's phone number. */
          phoneNumber?: string;
          /** The attendee's preferred language. */
          language?: string;
        };
        /** The numeric Cal.com event type ID. */
        eventTypeId?: number;
        /** The Cal.com event type slug. */
        eventTypeSlug?: string;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** The Cal.com team slug. */
        teamSlug?: string;
        /** The Cal.com organization slug. */
        organizationSlug?: string;
        /** The answers for custom booking form fields. */
        bookingFieldsResponses?: Record<string, unknown>;
        /** Additional guest email addresses. */
        guests?: Array<string>;
        /** The meeting URL to attach to the booking. */
        meetingUrl?: string;
        /** The location payload for the booking. */
        location?: Record<string, unknown>;
        /** Additional metadata to attach to the booking. */
        metadata?: Record<string, unknown>;
        /**
         * The requested booking duration in minutes.
         * @exclusiveMinimum 0
         */
        lengthInMinutes?: number;
        /** Routing metadata for round-robin or collective bookings. */
        routing?: Record<string, unknown>;
        /** The email verification code for protected bookings. */
        emailVerificationCode?: string;
        /** Whether to request instant booking behavior. */
        instant?: boolean;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Reassign a round-robin booking to a specific host user ID. */
    "cal.reassign_booking_with_uid": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /** The Cal.com user ID to reassign the booking to. */
        userId: number;
        /** The reason for reassigning the booking. */
        reason?: string;
      };
      output: {
        /** The raw result payload returned by Cal.com. */
        result: unknown;
      };
    };
    /** Reschedule a Cal.com booking by UID to a new start time. */
    "cal.reschedule_booking": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /**
         * The new booking start time.
         * @minLength 1
         */
        start: string;
        /** The actor or source that initiated the reschedule. */
        rescheduledBy?: string;
        /** The reason for rescheduling the booking. */
        reason?: string;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Compatibility alias for the reschedule-booking-by-uid action name. Reschedules a booking by UID. */
    "cal.reschedule_booking_by_uid": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
        /**
         * The new booking start time.
         * @minLength 1
         */
        start: string;
        /** The actor or source that initiated the reschedule. */
        rescheduledBy?: string;
        /** The reason for rescheduling the booking. */
        reschedulingReason?: string;
        /** The email verification code required for protected bookings. */
        emailVerificationCode?: string;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Compatibility alias for the retrieve-booking-details-by-uid action name. Gets a booking by UID. */
    "cal.retrieve_booking_details_by_uid": {
      input: {
        /**
         * The unique Cal.com booking UID.
         * @minLength 1
         */
        bookingUid: string;
      };
      output: {
        /** The booking record or records returned by Cal.com. */
        booking: {
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        } | Array<{
          /** The unique identifier of the booking. */
          id?: number;
          /** The unique UID of the booking. */
          uid: string;
          /** The title of the booking. */
          title?: string;
          /** The description of the booking. */
          description?: string | null;
          /** The status of the booking. */
          status?: string;
          /** The start time of the booking in ISO 8601 format. */
          start?: string;
          /** The end time of the booking in ISO 8601 format. */
          end?: string;
          /** The duration of the booking in minutes. */
          duration?: number;
          /** The list of attendees for the booking. */
          attendees?: Array<{
            /** The unique identifier of the attendee. */
            id?: number;
            /** The ID of the associated booking. */
            bookingId?: number;
            /** The name of the attendee. */
            name?: string;
            /** The email address of the attendee. */
            email?: string;
            /** The display email address of the attendee. */
            displayEmail?: string;
            /** The time zone of the attendee. */
            timeZone?: string;
            /** The locale of the attendee. */
            locale?: string;
            /** The preferred language of the attendee. */
            language?: string;
            /** The phone number of the attendee. */
            phoneNumber?: string;
            /** Whether the attendee was absent. */
            absent?: boolean;
          }>;
          /** The list of hosts for the booking. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
          /** The ID of the associated event type. */
          eventTypeId?: number;
          /** The slug of the associated event type. */
          eventTypeSlug?: string;
          /** The location payload associated with the booking. */
          location?: Record<string, unknown>;
          /** The metadata attached to the booking. */
          metadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Compatibility alias for the retrieve-calendar-busy-times action name. Returns busy ranges for specific calendars. */
    "cal.retrieve_calendar_busy_times": {
      input: {
        /** The IANA time zone used for this request. */
        timeZone?: string;
        /** The logged-in user's time zone used for client-side compatibility. */
        loggedInUsersTz?: string;
        /**
         * The start of the busy-time lookup window.
         * @minLength 1
         */
        dateFrom: string;
        /**
         * The end of the busy-time lookup window.
         * @minLength 1
         */
        dateTo: string;
        /** The connected calendars to inspect for busy times. */
        calendarsToLoad: Array<{
          /** The credential ID of the calendar connection. */
          credentialId: number;
          /**
           * The provider-specific calendar identifier.
           * @minLength 1
           */
          externalId: string;
        }>;
      };
      output: {
        /** The busy ranges returned for the requested calendars. */
        busyTimes: Array<{
          /** The start time of the busy range. */
          start: string;
          /** The end time of the busy range. */
          end: string;
          /** The source calendar or provider for the busy range. */
          source?: string;
        }>;
      };
    };
    /** Compatibility alias for the retrieve-calendar-list action name. Lists connected calendars and the selected destination calendar. */
    "cal.retrieve_calendar_list": {
      input: Record<string, never>;
      output: {
        /** The connected calendars grouped by integration. */
        connectedCalendars: Array<{
          /** The credential ID for this calendar connection. */
          credentialId?: number;
          /** The calendars available for the connection. */
          calendars?: Array<{
            /** The provider-specific identifier of the calendar. */
            externalId?: string;
            /** Whether the calendar is read-only. */
            readOnly?: boolean;
            /** Whether the calendar is selected in Cal.com. */
            isSelected?: boolean;
            /** The credential ID backing the calendar connection. */
            credentialId?: number;
            /** The integration name for the calendar provider. */
            integration?: string;
            /** The display name of the calendar. */
            name?: string;
            /** Whether this is the primary calendar for the connection. */
            primary?: boolean;
            /** The calendar email address, when available. */
            email?: string;
            /** The delegated credential ID used for this calendar. */
            delegationCredentialId?: string;
            [key: string]: unknown;
          }>;
          /** The primary calendar for the connection. */
          primary?: {
            /** The provider-specific identifier of the calendar. */
            externalId?: string;
            /** Whether the calendar is read-only. */
            readOnly?: boolean;
            /** Whether the calendar is selected in Cal.com. */
            isSelected?: boolean;
            /** The credential ID backing the calendar connection. */
            credentialId?: number;
            /** The integration name for the calendar provider. */
            integration?: string;
            /** The display name of the calendar. */
            name?: string;
            /** Whether this is the primary calendar for the connection. */
            primary?: boolean;
            /** The calendar email address, when available. */
            email?: string;
            /** The delegated credential ID used for this calendar. */
            delegationCredentialId?: string;
            [key: string]: unknown;
          };
          /** The integration metadata for the calendar connection. */
          integration?: Record<string, unknown>;
        }>;
        /** The destination calendar currently used for created events. */
        destinationCalendar: {
          /** The user ID that owns the destination calendar. */
          userId?: number;
          /** The integration name for the destination calendar. */
          integration: string;
          /** The provider-specific identifier of the destination calendar. */
          externalId: string;
          /** The credential ID backing the destination calendar. */
          credentialId?: number;
          /** The delegated credential ID used for the destination calendar. */
          delegationCredentialId?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Compatibility alias for the retrieve-event-type-by-id action name. Gets a single Cal.com event type by ID. */
    "cal.retrieve_event_type_by_id": {
      input: {
        /** The Cal.com event type ID, as a number or non-empty string. */
        eventTypeId: number | string;
        /** The Cal.com username to scope the request to. */
        username?: string;
        /** The numeric Cal.com team ID. */
        teamId?: number;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** Compatibility alias for the retrieve-my-information action name. Returns the authenticated Cal.com user's profile. */
    "cal.retrieve_my_information": {
      input: Record<string, never>;
      output: {
        /** The authenticated user's profile. */
        profile: {
          /** The unique identifier of the profile. */
          id: number;
          /** The username of the profile. */
          username: string;
          /** The email address of the profile. */
          email: string;
          /** The display name of the user. */
          name?: string | null;
          /** The biography of the user. */
          bio?: string | null;
          /** The time zone of the user. */
          timeZone?: string;
          /** The preferred week start day. */
          weekStart?: string | null;
          /** The preferred time format (12 or 24). */
          timeFormat?: number | null;
          /** The ID of the default schedule. */
          defaultScheduleId?: number | null;
          /** The ID of the organization. */
          organizationId?: number | null;
          /** The URL of the user avatar. */
          avatarUrl?: string | null;
          /** The brand color hex code. */
          brandColor?: string | null;
        };
      };
    };
    /** Compatibility alias for the retrieve-schedules-list action name. Lists schedules for the authenticated user. */
    "cal.retrieve_schedules_list": {
      input: Record<string, never>;
      output: {
        /** The schedules returned by Cal.com. */
        schedules: Array<{
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        }>;
        /** The opaque cursor for the next page, or null when there are no more results. */
        nextCursor: string | null;
      };
    };
    /** Compatibility alias for the update-destination-calendar-integration action name. Updates the destination calendar used for created events. */
    "cal.update_destination_calendar_integration": {
      input: {
        /**
         * The integration name of the destination calendar.
         * @minLength 1
         */
        integration: string;
        /**
         * The provider-specific identifier of the destination calendar.
         * @minLength 1
         */
        externalId: string;
        /** The delegated credential ID to use for the destination calendar. */
        delegationCredentialId?: string;
      };
      output: {
        /** The updated destination calendar. */
        destinationCalendar: {
          /** The user ID that owns the destination calendar. */
          userId?: number;
          /** The integration name for the destination calendar. */
          integration: string;
          /** The provider-specific identifier of the destination calendar. */
          externalId: string;
          /** The credential ID backing the destination calendar. */
          credentialId?: number;
          /** The delegated credential ID used for the destination calendar. */
          delegationCredentialId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Cal.com event type by numeric ID. */
    "cal.update_event_type": {
      input: {
        /** The numeric Cal.com event type ID. */
        eventTypeId: number;
        [key: string]: unknown;
      };
      output: {
        /** The requested event type. */
        eventType: {
          /** The unique identifier of the event type. */
          id: number;
          /** The title of the event type. */
          title: string;
          /** The URL slug of the event type. */
          slug: string;
          /** The duration of the event in minutes. */
          lengthInMinutes?: number;
          /** The description of the event type. */
          description?: string | null;
          /** The scheduling type (e.g. round-robin, collective). */
          schedulingType?: string | null;
          /** The display position of the event type. */
          position?: number;
          /** The status of the event type. */
          status?: string | null;
          /** Whether the event type is hidden from the public page. */
          hidden?: boolean;
          /** The list of hosts for the event type. */
          hosts?: Array<{
            /** The name of the host. */
            name?: string;
            /** The email address of the host. */
            email?: string;
            /** The username of the host. */
            username?: string;
            /** The time zone of the host. */
            timeZone?: string;
          }>;
        };
      };
    };
    /** Update the current Cal.com user's profile fields such as name, bio, timezone, and branding. */
    "cal.update_my_profile": {
      input: {
        /** The display name to set on the profile. */
        name?: string;
        /** The biography text to set on the profile. */
        bio?: string | null;
        /** The avatar URL to set on the profile. */
        avatarUrl?: string | null;
        /** The brand color hex code for the profile. */
        brandColor?: string | null;
        /** The dark-mode brand color hex code for the profile. */
        darkBrandColor?: string | null;
        /** The Cal.com theme identifier to apply. */
        theme?: string;
        /** The IANA time zone used for this request. */
        timeZone?: string;
        /** The preferred first day of the week. */
        weekStart?: string;
        /** The preferred time format, such as 12 or 24. */
        timeFormat?: number | null;
        /** The locale code for the profile. */
        locale?: string;
        [key: string]: unknown;
      };
      output: {
        /** The authenticated user's profile. */
        profile: {
          /** The unique identifier of the profile. */
          id: number;
          /** The username of the profile. */
          username: string;
          /** The email address of the profile. */
          email: string;
          /** The display name of the user. */
          name?: string | null;
          /** The biography of the user. */
          bio?: string | null;
          /** The time zone of the user. */
          timeZone?: string;
          /** The preferred week start day. */
          weekStart?: string | null;
          /** The preferred time format (12 or 24). */
          timeFormat?: number | null;
          /** The ID of the default schedule. */
          defaultScheduleId?: number | null;
          /** The ID of the organization. */
          organizationId?: number | null;
          /** The URL of the user avatar. */
          avatarUrl?: string | null;
          /** The brand color hex code. */
          brandColor?: string | null;
        };
      };
    };
    /** Update a schedule for the authenticated Cal.com user. */
    "cal.update_schedule": {
      input: {
        /** The numeric Cal.com schedule ID. */
        scheduleId: number;
        /** The new display name of the schedule. */
        name?: string;
        /** The IANA time zone used for this request. */
        timeZone?: string;
        /** Whether to make this the default schedule. */
        isDefault?: boolean;
        /** The new weekly availability rules for the schedule. */
        availability?: Array<{
          /** The weekdays this availability block applies to. */
          days: Array<string>;
          /** The start time for the availability block. */
          startTime: string;
          /** The end time for the availability block. */
          endTime: string;
        }>;
        /** The new date-specific availability overrides. */
        overrides?: Array<{
          /** The date that the override applies to. */
          date: string;
          /** The start time for the override block. */
          startTime: string;
          /** The end time for the override block. */
          endTime: string;
        }>;
      };
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Compatibility alias for the update-schedule-by-id action name. Updates a schedule. */
    "cal.update_schedule_by_id": {
      input: {
        /** The numeric Cal.com schedule ID. */
        scheduleId: number;
        /** The new display name of the schedule. */
        name?: string;
        /** The IANA time zone used for this request. */
        timeZone?: string;
        /** Whether to make this the default schedule. */
        isDefault?: boolean;
        /** The new weekly availability rules for the schedule. */
        availability?: Array<{
          /** The weekdays this availability block applies to. */
          days: Array<string>;
          /** The start time for the availability block. */
          startTime: string;
          /** The end time for the availability block. */
          endTime: string;
        }>;
        /** The new date-specific availability overrides. */
        overrides?: Array<{
          /** The date that the override applies to. */
          date: string;
          /** The start time for the override block. */
          startTime: string;
          /** The end time for the override block. */
          endTime: string;
        }>;
      };
      output: {
        /** The requested schedule. */
        schedule: {
          /** The unique identifier of the schedule. */
          id: number;
          /** The name of the schedule. */
          name: string;
          /** The ID of the schedule owner. */
          ownerId?: number;
          /** The time zone of the schedule. */
          timeZone?: string;
          /** Whether this is the default schedule. */
          isDefault?: boolean;
          /** The list of availability rules. */
          availability?: Array<Record<string, unknown>>;
          /** The list of schedule overrides. */
          overrides?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Compatibility alias for the update-user-profile-details action name. Updates the authenticated Cal.com user's profile. */
    "cal.update_user_profile_details": {
      input: {
        /** The display name to set on the profile. */
        name?: string;
        /** The email address to set on the profile. */
        email?: string;
        /** The locale code for the profile. */
        locale?: string;
        /** The IANA time zone used for this request. */
        timeZone?: string;
        /** The avatar URL to set on the profile. */
        avatarUrl?: string | null;
        /** The preferred first day of the week. */
        weekStart?: string;
        /** The preferred time format, such as 12 or 24. */
        timeFormat?: number | null;
        /** The numeric ID of the default schedule to use. */
        defaultScheduleId?: number | null;
        [key: string]: unknown;
      };
      output: {
        /** The authenticated user's profile. */
        profile: {
          /** The unique identifier of the profile. */
          id: number;
          /** The username of the profile. */
          username: string;
          /** The email address of the profile. */
          email: string;
          /** The display name of the user. */
          name?: string | null;
          /** The biography of the user. */
          bio?: string | null;
          /** The time zone of the user. */
          timeZone?: string;
          /** The preferred week start day. */
          weekStart?: string | null;
          /** The preferred time format (12 or 24). */
          timeFormat?: number | null;
          /** The ID of the default schedule. */
          defaultScheduleId?: number | null;
          /** The ID of the organization. */
          organizationId?: number | null;
          /** The URL of the user avatar. */
          avatarUrl?: string | null;
          /** The brand color hex code. */
          brandColor?: string | null;
        };
      };
    };
  }
}
