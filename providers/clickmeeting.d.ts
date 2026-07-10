import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a ClickMeeting meeting or webinar room. */
    "clickmeeting.create_conference": {
      input: {
        /**
         * The room name visible to ClickMeeting attendees.
         * @minLength 1
         */
        name: string;
        /** The ClickMeeting room type. */
        roomType: "meeting" | "webinar";
        /** Whether to create a permanent room instead of a one-time scheduled room. */
        permanentRoom: boolean;
        /**
         * The ClickMeeting room access type: 1 for open access, 2 for password access, or 3 for token access.
         * @minimum 1
         * @maximum 3
         */
        accessType: number;
        /**
         * The custom room URL slug to use instead of one derived from name.
         * @minLength 1
         */
        customRoomUrlName?: string;
        /** The UTF-8 lobby description shown before the room starts. */
        lobbyDescription?: string;
        /** Whether the room lobby is enabled. */
        lobbyEnabled?: boolean;
        /** The room start date, either YYYY-MM-DD HH:mm:ss or ISO 8601. */
        startsAt?: string;
        /** The room duration in ClickMeeting format, such as 1:20 or 0:20. */
        duration?: string | number;
        /**
         * The time zone name for the room start date, such as America/New_York.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The ClickMeeting skin identifier.
         * @exclusiveMinimum 0
         */
        skinId?: number;
        /**
         * The room password used when accessType is 2.
         * @minLength 1
         */
        password?: string;
        /** The ClickMeeting registration settings for a room. */
        registration?: {
          /** Whether registration is enabled for the room. */
          enabled?: boolean;
          /**
           * The ClickMeeting registration template identifier, from 1 to 3.
           * @minimum 1
           * @maximum 3
           */
          template?: number;
        };
        /** The ClickMeeting advanced room settings. */
        settings?: {
          /** Whether the room is shown on the personal page. */
          showOnPersonalPage?: boolean;
          /** Whether ClickMeeting sends thank-you emails. */
          thankYouEmailsEnabled?: boolean;
          /** Whether the connection tester is enabled. */
          connectionTesterEnabled?: boolean;
          /** Whether the phone gateway is enabled. */
          phonegatewayEnabled?: boolean;
          /** Whether recording starts automatically. */
          recorderAutostartEnabled?: boolean;
          /** Whether the invite button is enabled in the room. */
          roomInviteButtonEnabled?: boolean;
          /** Whether social media sharing is enabled. */
          socialMediaSharingEnabled?: boolean;
          /** Whether connection status is enabled. */
          connectionStatusEnabled?: boolean;
          /** The thank-you page URL configured for the room. */
          thankYouPageUrl?: string;
          /** Whether end-to-end encryption is enabled for the room. */
          encryptionEnabled?: boolean;
        };
      };
      output: {
        /** A normalized ClickMeeting room with the original response preserved in raw. */
        conference: {
          /** The ClickMeeting room identifier. */
          id?: number | null;
          /** The room name. */
          name?: string | null;
          /** The room status. */
          status?: string | null;
          /** The room type. */
          roomType?: string | null;
          /** The room access type. */
          accessType?: number | null;
          /** Whether the room is permanent. */
          permanentRoom?: boolean | null;
          /** The attendee room URL. */
          roomUrl?: string | null;
          /** The embeddable room URL. */
          embedRoomUrl?: string | null;
          /** The room start date when provided. */
          startsAt?: string | null;
          /** The room end date when provided. */
          endsAt?: string | null;
          /** The room creation date. */
          createdAt?: string | null;
          /** The room update date. */
          updatedAt?: string | null;
          /** The room time zone. */
          timezone?: string | null;
          /** Whether room registration is enabled. */
          registrationEnabled?: boolean | null;
          /** The raw ClickMeeting room object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a ClickMeeting room. */
    "clickmeeting.delete_conference": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** The delete result returned by ClickMeeting. */
        result: string;
      };
    };
    /** Generate access tokens for a token-protected ClickMeeting room. */
    "clickmeeting.generate_access_tokens": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The number of access tokens to generate, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        howMany: number;
      };
      output: {
        /** The generated access tokens. */
        accessTokens: Array<{
          /** The access token value. */
          token?: string | null;
          /** The email address the token was sent to when available. */
          sentToEmail?: string | null;
          /** The first token use date when available. */
          firstUseDate?: string | null;
          /** The raw ClickMeeting access token object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get details for a ClickMeeting room. */
    "clickmeeting.get_conference": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** A normalized ClickMeeting room with the original response preserved in raw. */
        conference: {
          /** The ClickMeeting room identifier. */
          id?: number | null;
          /** The room name. */
          name?: string | null;
          /** The room status. */
          status?: string | null;
          /** The room type. */
          roomType?: string | null;
          /** The room access type. */
          accessType?: number | null;
          /** Whether the room is permanent. */
          permanentRoom?: boolean | null;
          /** The attendee room URL. */
          roomUrl?: string | null;
          /** The embeddable room URL. */
          embedRoomUrl?: string | null;
          /** The room start date when provided. */
          startsAt?: string | null;
          /** The room end date when provided. */
          endsAt?: string | null;
          /** The room creation date. */
          createdAt?: string | null;
          /** The room update date. */
          updatedAt?: string | null;
          /** The room time zone. */
          timezone?: string | null;
          /** Whether room registration is enabled. */
          registrationEnabled?: boolean | null;
          /** The raw ClickMeeting room object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get details for a ClickMeeting room session. */
    "clickmeeting.get_session": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The ClickMeeting room session identifier.
         * @exclusiveMinimum 0
         */
        sessionId: number;
      };
      output: {
        /** A normalized ClickMeeting room session. */
        session: {
          /** The ClickMeeting session identifier. */
          id?: number | null;
          /** The session start date. */
          startDate?: string | null;
          /** The session end date. */
          endDate?: string | null;
          /** The maximum visitor count during the session. */
          maxVisitors?: number | null;
          /** The total visitor count during the session. */
          totalVisitors?: number | null;
          /** The attendees embedded in a session detail response. */
          attendees?: Array<{
            /** The attendee UID returned by ClickMeeting. */
            uid?: string | null;
            /** The attendee email address. */
            email?: string | null;
            /** The attendee nickname. */
            nickname?: string | null;
            /** The attendee role. */
            role?: string | null;
            /** The attendee rating when available. */
            rating?: string | null;
            /** The attendee rating comment when available. */
            ratingComment?: string | null;
            /** The raw ClickMeeting attendee object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw ClickMeeting session object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List generated access tokens for a ClickMeeting room. */
    "clickmeeting.list_access_tokens": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** The generated access tokens. */
        accessTokens: Array<{
          /** The access token value. */
          token?: string | null;
          /** The email address the token was sent to when available. */
          sentToEmail?: string | null;
          /** The first token use date when available. */
          firstUseDate?: string | null;
          /** The raw ClickMeeting access token object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List all ClickMeeting recordings for the connected account. */
    "clickmeeting.list_all_recordings": {
      input: Record<string, never>;
      output: {
        /** The recordings returned by ClickMeeting. */
        recordings: Array<{
          /** The recording identifier. */
          id?: number | null;
          /** The recording download URL. */
          recordingUrl?: string | null;
          /** The recording duration in seconds. */
          recordingDuration?: number | null;
          /** The room identifier associated with the recording. */
          conferenceId?: number | null;
          /** The recording start date returned by ClickMeeting. */
          recorderStarted?: string | null;
          /** The ISO recording start date when provided. */
          recorderStartDate?: string | null;
          /** The recording file size returned by ClickMeeting. */
          recordingFileSize?: string | null;
          /** The recording name when provided. */
          recordingName?: string | null;
          /** The raw ClickMeeting recording object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ClickMeeting chat archives available for download. */
    "clickmeeting.list_chats": {
      input: Record<string, never>;
      output: {
        /** The chat archive listings returned by ClickMeeting. */
        chats: Array<{
          /** The chat session identifier. */
          id?: number | null;
          /** The room name associated with the chat. */
          name?: string | null;
          /** The chat date. */
          date?: string | null;
          /** The chat time. */
          time?: string | null;
          /** The chat time zone. */
          timezone?: string | null;
          /** The URL that can be used to download the chat archive. */
          downloadLink?: string | null;
          /** The raw ClickMeeting chat object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List recordings for a ClickMeeting room. */
    "clickmeeting.list_conference_recordings": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** The recordings returned by ClickMeeting. */
        recordings: Array<{
          /** The recording identifier. */
          id?: number | null;
          /** The recording download URL. */
          recordingUrl?: string | null;
          /** The recording duration in seconds. */
          recordingDuration?: number | null;
          /** The room identifier associated with the recording. */
          conferenceId?: number | null;
          /** The recording start date returned by ClickMeeting. */
          recorderStarted?: string | null;
          /** The ISO recording start date when provided. */
          recorderStartDate?: string | null;
          /** The recording file size returned by ClickMeeting. */
          recordingFileSize?: string | null;
          /** The recording name when provided. */
          recordingName?: string | null;
          /** The raw ClickMeeting recording object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List active or inactive ClickMeeting rooms. */
    "clickmeeting.list_conferences": {
      input: {
        /** The ClickMeeting room status. */
        status: "active" | "inactive";
        /**
         * The page number for inactive room listings.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The rooms returned by ClickMeeting. */
        conferences: Array<{
          /** The ClickMeeting room identifier. */
          id?: number | null;
          /** The room name. */
          name?: string | null;
          /** The room status. */
          status?: string | null;
          /** The room type. */
          roomType?: string | null;
          /** The room access type. */
          accessType?: number | null;
          /** Whether the room is permanent. */
          permanentRoom?: boolean | null;
          /** The attendee room URL. */
          roomUrl?: string | null;
          /** The embeddable room URL. */
          embedRoomUrl?: string | null;
          /** The room start date when provided. */
          startsAt?: string | null;
          /** The room end date when provided. */
          endsAt?: string | null;
          /** The room creation date. */
          createdAt?: string | null;
          /** The room update date. */
          updatedAt?: string | null;
          /** The room time zone. */
          timezone?: string | null;
          /** Whether room registration is enabled. */
          registrationEnabled?: boolean | null;
          /** The raw ClickMeeting room object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ClickMeeting phone gateway numbers. */
    "clickmeeting.list_phone_gateways": {
      input: Record<string, never>;
      output: {
        /** The phone gateways returned by ClickMeeting. */
        phoneGateways: Array<{
          /** The country code for the phone gateway. */
          code?: string | null;
          /** The phone gateway location. */
          location?: string | null;
          /** The phone number value. */
          value?: string | null;
          /** The geographic metadata returned by ClickMeeting. */
          geo?: Record<string, unknown>;
          /** The raw ClickMeeting phone gateway object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List registrations for a ClickMeeting room by registration status. */
    "clickmeeting.list_registrations": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /** The ClickMeeting registration status. */
        status: "all" | "active";
      };
      output: {
        /** The registrations returned by ClickMeeting. */
        registrations: Array<{
          /** The registration identifier. */
          id?: number | null;
          /** The session identifier associated with the registration. */
          sessionId?: number | null;
          /** The registered participant email address. */
          email?: string | null;
          /** The registered participant nickname. */
          visitorNickname?: string | null;
          /** The registration date. */
          registrationDate?: string | null;
          /** The registration confirmation value. */
          registrationConfirmed?: string | null;
          /** The registration form fields returned by ClickMeeting. */
          fields?: Record<string, unknown>;
          /** The raw ClickMeeting registration object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List attendees for a ClickMeeting room session. */
    "clickmeeting.list_session_attendees": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The ClickMeeting room session identifier.
         * @exclusiveMinimum 0
         */
        sessionId: number;
      };
      output: {
        /** The attendees returned by ClickMeeting. */
        attendees: Array<{
          /** The attendee UID returned by ClickMeeting. */
          uid?: string | null;
          /** The attendee email address. */
          email?: string | null;
          /** The attendee nickname. */
          nickname?: string | null;
          /** The attendee role. */
          role?: string | null;
          /** The attendee rating when available. */
          rating?: string | null;
          /** The attendee rating comment when available. */
          ratingComment?: string | null;
          /** The raw ClickMeeting attendee object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List registrations for a specific ClickMeeting room session. */
    "clickmeeting.list_session_registrations": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The ClickMeeting room session identifier.
         * @exclusiveMinimum 0
         */
        sessionId: number;
      };
      output: {
        /** The registrations returned by ClickMeeting. */
        registrations: Array<{
          /** The registration identifier. */
          id?: number | null;
          /** The session identifier associated with the registration. */
          sessionId?: number | null;
          /** The registered participant email address. */
          email?: string | null;
          /** The registered participant nickname. */
          visitorNickname?: string | null;
          /** The registration date. */
          registrationDate?: string | null;
          /** The registration confirmation value. */
          registrationConfirmed?: string | null;
          /** The registration form fields returned by ClickMeeting. */
          fields?: Record<string, unknown>;
          /** The raw ClickMeeting registration object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List sessions for a ClickMeeting room. */
    "clickmeeting.list_sessions": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** The sessions returned by ClickMeeting. */
        sessions: Array<{
          /** The ClickMeeting session identifier. */
          id?: number | null;
          /** The session start date. */
          startDate?: string | null;
          /** The session end date. */
          endDate?: string | null;
          /** The maximum visitor count during the session. */
          maxVisitors?: number | null;
          /** The total visitor count during the session. */
          totalVisitors?: number | null;
          /** The attendees embedded in a session detail response. */
          attendees?: Array<{
            /** The attendee UID returned by ClickMeeting. */
            uid?: string | null;
            /** The attendee email address. */
            email?: string | null;
            /** The attendee nickname. */
            nickname?: string | null;
            /** The attendee role. */
            role?: string | null;
            /** The attendee rating when available. */
            rating?: string | null;
            /** The attendee rating comment when available. */
            ratingComment?: string | null;
            /** The raw ClickMeeting attendee object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw ClickMeeting session object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ClickMeeting time zones, optionally filtered by country code. */
    "clickmeeting.list_time_zones": {
      input: {
        /**
         * The ISO 3166-1 alpha-2 country code to filter time zones.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** The time zone names returned by ClickMeeting. */
        timeZones: Array<string>;
      };
    };
    /** Check ClickMeeting API availability for the connected API key. */
    "clickmeeting.ping": {
      input: Record<string, never>;
      output: {
        /** The ping response value returned by ClickMeeting. */
        ping: string;
      };
    };
    /** Register a participant for a ClickMeeting room. */
    "clickmeeting.register_participant": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The participant first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The participant last name.
         * @minLength 1
         */
        lastName: string;
        /**
         * The participant email address.
         * @format email
         */
        email: string;
        /** The participant company name. */
        company?: string;
        /** The optional ClickMeeting confirmation email settings. */
        confirmationEmail?: {
          /** Whether ClickMeeting should send a confirmation email. */
          enabled?: boolean;
          /**
           * The confirmation email language code.
           * @minLength 1
           */
          lang?: string;
        };
      };
      output: {
        /** The registration status returned by ClickMeeting. */
        status: string;
        /** The participant room URL returned by ClickMeeting. */
        url?: string;
      };
    };
    /** Update a ClickMeeting room. */
    "clickmeeting.update_conference": {
      input: {
        /**
         * The ClickMeeting room identifier.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The room name visible to ClickMeeting attendees.
         * @minLength 1
         */
        name?: string;
        /** The ClickMeeting room type. */
        roomType?: "meeting" | "webinar";
        /** Whether to create a permanent room instead of a one-time scheduled room. */
        permanentRoom?: boolean;
        /**
         * The ClickMeeting room access type: 1 for open access, 2 for password access, or 3 for token access.
         * @minimum 1
         * @maximum 3
         */
        accessType?: number;
        /**
         * The custom room URL slug to use instead of one derived from name.
         * @minLength 1
         */
        customRoomUrlName?: string;
        /** The UTF-8 lobby description shown before the room starts. */
        lobbyDescription?: string;
        /** Whether the room lobby is enabled. */
        lobbyEnabled?: boolean;
        /** The room start date, either YYYY-MM-DD HH:mm:ss or ISO 8601. */
        startsAt?: string;
        /** The room duration in ClickMeeting format, such as 1:20 or 0:20. */
        duration?: string | number;
        /**
         * The time zone name for the room start date, such as America/New_York.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The ClickMeeting skin identifier.
         * @exclusiveMinimum 0
         */
        skinId?: number;
        /**
         * The room password used when accessType is 2.
         * @minLength 1
         */
        password?: string;
        /** The ClickMeeting registration settings for a room. */
        registration?: {
          /** Whether registration is enabled for the room. */
          enabled?: boolean;
          /**
           * The ClickMeeting registration template identifier, from 1 to 3.
           * @minimum 1
           * @maximum 3
           */
          template?: number;
        };
        /** The ClickMeeting advanced room settings. */
        settings?: {
          /** Whether the room is shown on the personal page. */
          showOnPersonalPage?: boolean;
          /** Whether ClickMeeting sends thank-you emails. */
          thankYouEmailsEnabled?: boolean;
          /** Whether the connection tester is enabled. */
          connectionTesterEnabled?: boolean;
          /** Whether the phone gateway is enabled. */
          phonegatewayEnabled?: boolean;
          /** Whether recording starts automatically. */
          recorderAutostartEnabled?: boolean;
          /** Whether the invite button is enabled in the room. */
          roomInviteButtonEnabled?: boolean;
          /** Whether social media sharing is enabled. */
          socialMediaSharingEnabled?: boolean;
          /** Whether connection status is enabled. */
          connectionStatusEnabled?: boolean;
          /** The thank-you page URL configured for the room. */
          thankYouPageUrl?: string;
          /** Whether end-to-end encryption is enabled for the room. */
          encryptionEnabled?: boolean;
        };
        /** The ClickMeeting room status. */
        status?: "active" | "inactive";
      };
      output: {
        /** A normalized ClickMeeting room with the original response preserved in raw. */
        conference: {
          /** The ClickMeeting room identifier. */
          id?: number | null;
          /** The room name. */
          name?: string | null;
          /** The room status. */
          status?: string | null;
          /** The room type. */
          roomType?: string | null;
          /** The room access type. */
          accessType?: number | null;
          /** Whether the room is permanent. */
          permanentRoom?: boolean | null;
          /** The attendee room URL. */
          roomUrl?: string | null;
          /** The embeddable room URL. */
          embedRoomUrl?: string | null;
          /** The room start date when provided. */
          startsAt?: string | null;
          /** The room end date when provided. */
          endsAt?: string | null;
          /** The room creation date. */
          createdAt?: string | null;
          /** The room update date. */
          updatedAt?: string | null;
          /** The room time zone. */
          timezone?: string | null;
          /** Whether room registration is enabled. */
          registrationEnabled?: boolean | null;
          /** The raw ClickMeeting room object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
