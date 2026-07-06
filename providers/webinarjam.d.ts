import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for one WebinarJam webinar. */
    "webinarjam.get_webinar": {
      input: {
        /**
         * The WebinarJam webinar_id value.
         * @exclusiveMinimum 0
         */
        webinarId: number;
      };
      output: {
        /** A WebinarJam webinar object returned by the API. */
        webinar: {
          /** The WebinarJam webinar identifier. */
          webinar_id?: number;
          /** The webinar name returned by WebinarJam. */
          name?: string;
          /** The webinar title returned by WebinarJam. */
          title?: string;
          /** The webinar description returned by WebinarJam. */
          description?: string;
          /** The schedules returned for this webinar. */
          schedules?: Array<unknown>;
          [key: string]: unknown;
        };
        /** The raw WebinarJam webinar response. */
        raw: Record<string, unknown>;
      };
    };
    /** List WebinarJam registrants or attendees for a webinar. */
    "webinarjam.list_registrants": {
      input: {
        /**
         * The WebinarJam webinar_id value.
         * @exclusiveMinimum 0
         */
        webinarId: number;
        /**
         * Only return users for this WebinarJam schedule_id value.
         * @exclusiveMinimum 0
         */
        scheduleId?: number;
        /**
         * The result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Live attendance filter accepted by WebinarJam.
         * @minimum 0
         * @maximum 4
         */
        attendedLive?: number;
        /**
         * Replay attendance filter accepted by WebinarJam.
         * @minimum 0
         * @maximum 4
         */
        attendedReplay?: number;
        /**
         * Purchase status filter accepted by WebinarJam.
         * @minimum 0
         * @maximum 2
         */
        purchased?: number;
        /**
         * Unix timestamp filter accepted by WebinarJam for this list request.
         * @minimum 0
         */
        attendedLiveTimestamp?: number;
        /**
         * Unix timestamp filter accepted by WebinarJam for this list request.
         * @minimum 0
         */
        attendedReplayTimestamp?: number;
        /**
         * Date range filter accepted by WebinarJam.
         * @minimum 0
         * @maximum 8
         */
        dateRange?: number;
        /**
         * Search text used to filter registrants.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
      };
      output: {
        /** Registrants or attendees returned by WebinarJam. */
        registrants: Array<{
          /** The registrant first name. */
          first_name?: string;
          /** The registrant last name. */
          last_name?: string;
          /** The registrant email address. */
          email?: string;
          /** The registrant phone number. */
          phone?: string;
          /** The webinar schedule value returned by WebinarJam. */
          schedule?: unknown;
          [key: string]: unknown;
        }>;
        /** The raw WebinarJam registrants response. */
        raw: Record<string, unknown>;
      };
    };
    /** List WebinarJam webinars published in the authenticated account. */
    "webinarjam.list_webinars": {
      input: Record<string, never>;
      output: {
        /** Webinars returned by WebinarJam. */
        webinars: Array<{
          /** The WebinarJam webinar identifier. */
          webinar_id?: number;
          /** The webinar name returned by WebinarJam. */
          name?: string;
          /** The webinar title returned by WebinarJam. */
          title?: string;
          /** The webinar description returned by WebinarJam. */
          description?: string;
          /** The schedules returned for this webinar. */
          schedules?: Array<unknown>;
          [key: string]: unknown;
        }>;
        /** The raw WebinarJam list response. */
        raw: Record<string, unknown>;
      };
    };
    /** Register one user for a WebinarJam webinar. */
    "webinarjam.register_user": {
      input: {
        /**
         * The WebinarJam webinar_id value.
         * @exclusiveMinimum 0
         */
        webinarId: number;
        /**
         * The user's first name.
         * @minLength 1
         * @pattern \S
         */
        firstName: string;
        /**
         * The user's email address.
         * @format email
         */
        email: string;
        /**
         * The WebinarJam schedule integer value to register the user for.
         * @exclusiveMinimum 0
         */
        schedule: number;
        /**
         * The user's last name.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /**
         * The user's country.
         * @minLength 1
         * @pattern \S
         */
        country?: string;
        /**
         * The user's state or region.
         * @minLength 1
         * @pattern \S
         */
        state?: string;
        /**
         * The WebinarJam timezone_id integer value.
         * @exclusiveMinimum 0
         */
        timezoneId?: number;
        /**
         * The user's IP address.
         * @minLength 1
         * @pattern \S
         */
        ipAddress?: string;
        /**
         * The user's phone country code.
         * @minLength 1
         * @pattern \S
         */
        phoneCountryCode?: string;
        /**
         * The user's phone number.
         * @minLength 1
         * @pattern \S
         */
        phone?: string;
        /** Whether the user consented to SMS through Twilio. */
        twilioConsent?: boolean;
        /** Additional WebinarJam custom registration fields keyed by field name or label. */
        customFields?: Record<string, string | number | boolean | Array<string | number>>;
      };
      output: {
        /** The registered user object returned by WebinarJam. */
        registration: Record<string, unknown>;
        /** The raw WebinarJam registration response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
