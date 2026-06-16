import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or retrieve a Lessonspace space through the official launch endpoint and return the join URL plus room credentials. */
    "lessonspace.create_unified_space": {
      input: {
        /**
         * The unique Lessonspace launch identifier for the space.
         * @minLength 1
         */
        id: string;
        /**
         * The optional Lessonspace space name.
         * @minLength 1
         */
        name?: string;
        /** The Lessonspace user object passed to the launch endpoint. */
        user?: {
          /**
           * The external user identifier used by the caller.
           * @minLength 1
           */
          id?: string;
          /**
           * The display name shown inside Lessonspace.
           * @minLength 1
           */
          name: string;
          /**
           * The email address used by Lessonspace to identify the user.
           * @format email
           */
          email?: string;
          /** The Lessonspace role assigned to the launched user. */
          role?: "teacher" | "student" | "admin";
          /** Whether the launched user should join as a leader. */
          leader?: boolean;
        };
        /** Lessonspace features passed directly to the launch payload. */
        features?: Record<string, boolean | string | number>;
        /**
         * Custom invite URL used by the Lessonspace Invite Others button.
         * @format uri
         */
        invite_url?: string;
        /**
         * Custom resource library URL.
         * @format uri
         */
        resource_url?: string;
        /** Key-value tags applied to the Lessonspace session. */
        tags?: Record<string, string>;
        /** Key-value tags applied to the Lessonspace space. */
        space_tags?: Record<string, string>;
        /** Advanced Holodeck parameters passed through to Lessonspace. */
        holodeck_parameters?: Record<string, unknown>;
        /** External authentication settings passed through to Lessonspace. */
        auth_external?: Record<string, unknown>;
      };
      output: {
        /** The HTTP status code returned by the launch endpoint. */
        statusCode: number;
        /**
         * The URL used to open or embed the Lessonspace room.
         * @format uri
         */
        clientUrl: string;
        /**
         * The room.sh API base URL returned by Lessonspace.
         * @format uri
         */
        apiBase: string;
        /**
         * The underlying room identifier.
         * @minLength 1
         */
        roomId: string;
        /**
         * The room secret returned by Lessonspace.
         * @minLength 1
         */
        secret: string;
        /**
         * The session identifier returned by Lessonspace.
         * @minLength 1
         */
        sessionId: string;
        /** The internal Lessonspace user identifier. */
        userId: number;
        /** The room settings returned by Lessonspace. */
        roomSettings: Record<string, unknown>;
        /** The raw launch payload returned by Lessonspace. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Lessonspace organisation session by session UUID. */
    "lessonspace.get_organisation_session": {
      input: {
        /**
         * The Lessonspace organisation identifier.
         * @minLength 1
         */
        organisation_id?: string;
        /**
         * The Lessonspace session UUID.
         * @format uuid
         */
        session_uuid: string;
      };
      output: {
        /** A normalized Lessonspace session record. */
        session: {
          /** The internal Lessonspace session identifier. */
          id: number;
          /**
           * The Lessonspace session UUID.
           * @format uuid
           */
          uuid: string;
          /** The Lessonspace session name when present. */
          name: string | null;
          /**
           * The session start timestamp when present.
           * @format date-time
           */
          startTime: string | null;
          /**
           * The session end timestamp when present.
           * @format date-time
           */
          endTime: string | null;
          /** The Lessonspace AI lesson summary when present. */
          summary: string | null;
          /** Whether the Lessonspace session recording is available. */
          recordingAvailable: boolean | null;
          /** The playback URL returned on the session object when present. */
          playbackUrl: string | null;
          /** A normalized Lessonspace space summary. */
          space: {
            /** The Lessonspace space UUID when present. */
            id: string | null;
            /** The Lessonspace space slug when present. */
            slug: string | null;
          } | null;
          /** The raw session payload returned by Lessonspace. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the Lessonspace playback URL for one recorded session. */
    "lessonspace.get_session_recording_url": {
      input: {
        /**
         * The Lessonspace organisation identifier.
         * @minLength 1
         */
        organisation_id?: string;
        /**
         * The Lessonspace session UUID.
         * @format uuid
         */
        session_uuid: string;
      };
      output: {
        /**
         * The recording URL returned by Lessonspace.
         * @format uri
         */
        recordingUrl: string;
      };
    };
    /** List Lessonspace sessions for one organisation with official filter parameters. */
    "lessonspace.list_organisation_sessions": {
      input: {
        /**
         * The Lessonspace organisation identifier.
         * @minLength 1
         */
        organisation_id?: string;
        /**
         * A Lessonspace search term or UUID fragment used to filter sessions.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number within the paginated Lessonspace result set.
         * @minimum 1
         */
        page?: number;
        /** Whether to include sessions with one user only. */
        include_single_user?: boolean;
        /**
         * Minimum session duration in seconds.
         * @minimum 0
         */
        duration_min?: number;
        /**
         * Maximum session duration in seconds.
         * @minimum 0
         */
        duration_max?: number;
        /**
         * An ISO 8601 timestamp used by the Lessonspace API.
         * @format date-time
         */
        start_time_after?: string;
        /**
         * An ISO 8601 timestamp used by the Lessonspace API.
         * @format date-time
         */
        start_time_before?: string;
        /**
         * An ISO 8601 timestamp used by the Lessonspace API.
         * @format date-time
         */
        end_time_after?: string;
        /**
         * An ISO 8601 timestamp used by the Lessonspace API.
         * @format date-time
         */
        end_time_before?: string;
        /**
         * An ISO 8601 timestamp used by the Lessonspace API.
         * @format date-time
         */
        date_after?: string;
        /**
         * An ISO 8601 timestamp used by the Lessonspace API.
         * @format date-time
         */
        date_before?: string;
        /**
         * Lessonspace user identifiers used to filter sessions.
         * @minItems 1
         */
        user?: Array<string>;
        /**
         * Lessonspace space UUIDs used to filter sessions.
         * @minItems 1
         */
        space?: Array<string>;
        /**
         * The Launch endpoint id used to filter linked Lessonspace sessions.
         * @minLength 1
         */
        launch_id?: string;
        /** Whether to return only in-progress sessions. */
        in_progress_only?: boolean;
        /** Session tags that must match on the Lessonspace API. */
        tags?: Record<string, string>;
        /**
         * The external user id supplied to the Lessonspace launch payload.
         * @minLength 1
         */
        user_external_id?: string;
        /**
         * The partial Lessonspace launch user name used to filter sessions.
         * @minLength 1
         */
        user_name?: string;
      };
      output: {
        /** The normalized Lessonspace sessions returned by the request. */
        sessions: Array<{
          /** The internal Lessonspace session identifier. */
          id: number;
          /**
           * The Lessonspace session UUID.
           * @format uuid
           */
          uuid: string;
          /** The Lessonspace session name when present. */
          name: string | null;
          /**
           * The session start timestamp when present.
           * @format date-time
           */
          startTime: string | null;
          /**
           * The session end timestamp when present.
           * @format date-time
           */
          endTime: string | null;
          /** The raw session payload returned by Lessonspace. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
