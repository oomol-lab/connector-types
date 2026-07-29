import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find Heartbeat community users whose email matches exactly. */
    "heartbeat.find_users_by_email": {
      input: {
        /**
         * The exact user email address to find.
         * @format email
         */
        email: string;
      };
      output: {
        /** The matching community users. */
        users: Array<{
          /** The unique identifier of the user. */
          id?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /** The user's full name. */
          name?: string;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's current role. */
          role?: string;
          /** Whether the user is a community administrator. */
          isAdmin?: boolean;
          /** The groups associated with the user. */
          groups?: Array<{
            /** The unique identifier of the group. */
            id?: string;
            /** The display name of the group. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The user's onboarding question responses. */
          onboardingResponses?: Array<{
            /** The onboarding question shown to the user. */
            question?: string;
            /** The user's answer to the onboarding question. */
            answer?: string;
            /** Whether the onboarding response is private. */
            isPrivate?: boolean;
            [key: string]: unknown;
          }>;
          /** The user's Heartbeat biography. */
          bio?: string;
          /** The URL of the user's Heartbeat avatar. */
          avatar?: string;
          /** The formatted LinkedIn summary available for the user. */
          linkedInSummary?: string;
          /** The LinkedIn profile data available for the user. */
          linkedInData?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve one Heartbeat access group by group ID. */
    "heartbeat.get_group": {
      input: {
        /**
         * The unique Heartbeat group ID.
         * @format uuid
         */
        groupId: string;
      };
      output: {
        /** A Heartbeat access group with documented fields and any additional upstream data. */
        group: {
          /** The unique identifier of the group. */
          id?: string;
          /** The display name of the group. */
          name?: string;
          /** The description of the group. */
          description?: string;
          /** The hexadecimal color assigned to the group. */
          color?: string;
          /** The identifier of the parent group, or null for a top-level group. */
          parentGroupID?: string | null;
          /** The users who belong to the group. */
          users?: Array<{
            /** The unique identifier of the user. */
            id?: string;
            /** The display name of the user. */
            name?: string;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Whether the group is archived. */
          archived?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Heartbeat community user by user ID. */
    "heartbeat.get_user": {
      input: {
        /**
         * The unique Heartbeat user ID.
         * @format uuid
         */
        userId: string;
      };
      output: {
        /** A Heartbeat community user with documented profile fields and any additional upstream data. */
        user: {
          /** The unique identifier of the user. */
          id?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /** The user's full name. */
          name?: string;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's current role. */
          role?: string;
          /** Whether the user is a community administrator. */
          isAdmin?: boolean;
          /** The groups associated with the user. */
          groups?: Array<{
            /** The unique identifier of the group. */
            id?: string;
            /** The display name of the group. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The user's onboarding question responses. */
          onboardingResponses?: Array<{
            /** The onboarding question shown to the user. */
            question?: string;
            /** The user's answer to the onboarding question. */
            answer?: string;
            /** Whether the onboarding response is private. */
            isPrivate?: boolean;
            [key: string]: unknown;
          }>;
          /** The user's Heartbeat biography. */
          bio?: string;
          /** The URL of the user's Heartbeat avatar. */
          avatar?: string;
          /** The formatted LinkedIn summary available for the user. */
          linkedInSummary?: string;
          /** The LinkedIn profile data available for the user. */
          linkedInData?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** List all channels in the connected Heartbeat community. */
    "heartbeat.list_channels": {
      input: Record<string, never>;
      output: {
        /** The community channels. */
        channels: Array<{
          /** The unique identifier of the channel. */
          id?: string;
          /** The display name of the channel. */
          name?: string;
          /** The emoji assigned to the channel. */
          emoji?: string;
          /** The Heartbeat channel type. */
          type?: "POSTS" | "CHAT" | "VOICE";
          [key: string]: unknown;
        }>;
      };
    };
    /** List Heartbeat community events, optionally filtered by access group. */
    "heartbeat.list_events": {
      input: {
        /**
         * Return only events assigned to this Heartbeat group ID.
         * @format uuid
         */
        groupId?: string;
      };
      output: {
        /** The community events. */
        events: Array<{
          /** The unique identifier of the event. */
          id?: string;
          /** The display name of the event. */
          name?: string;
          /** The description of the event. */
          description?: string;
          /**
           * The original event start time in UTC.
           * @format date-time
           */
          startTime?: string;
          /**
           * The original event end time in UTC.
           * @format date-time
           */
          endTime?: string;
          /** Whether the event recurs. */
          recurring?: boolean;
          /**
           * The time when the event was created.
           * @format date-time
           */
          createdAt?: string;
          /** The user identifier of the event creator. */
          createdBy?: string;
          /** The identifiers of users invited to the event. */
          invitedUsers?: Array<string>;
          /** The identifiers of groups invited to the event. */
          invitedGroups?: Array<string>;
          /** The URL of the event cover image, or null when no cover image is set. */
          coverImage?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all access groups in the connected Heartbeat community. */
    "heartbeat.list_groups": {
      input: Record<string, never>;
      output: {
        /** The community access groups. */
        groups: Array<{
          /** The unique identifier of the group. */
          id?: string;
          /** The display name of the group. */
          name?: string;
          /** The description of the group. */
          description?: string;
          /** The hexadecimal color assigned to the group. */
          color?: string;
          /** The identifier of the parent group, or null for a top-level group. */
          parentGroupID?: string | null;
          /** The users who belong to the group. */
          users?: Array<{
            /** The unique identifier of the user. */
            id?: string;
            /** The display name of the user. */
            name?: string;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Whether the group is archived. */
          archived?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all users in the connected Heartbeat community. */
    "heartbeat.list_users": {
      input: Record<string, never>;
      output: {
        /** The community users. */
        users: Array<{
          /** The unique identifier of the user. */
          id?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /** The user's full name. */
          name?: string;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's current role. */
          role?: string;
          /** Whether the user is a community administrator. */
          isAdmin?: boolean;
          /** The groups associated with the user. */
          groups?: Array<{
            /** The unique identifier of the group. */
            id?: string;
            /** The display name of the group. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The user's onboarding question responses. */
          onboardingResponses?: Array<{
            /** The onboarding question shown to the user. */
            question?: string;
            /** The user's answer to the onboarding question. */
            answer?: string;
            /** Whether the onboarding response is private. */
            isPrivate?: boolean;
            [key: string]: unknown;
          }>;
          /** The user's Heartbeat biography. */
          bio?: string;
          /** The URL of the user's Heartbeat avatar. */
          avatar?: string;
          /** The formatted LinkedIn summary available for the user. */
          linkedInSummary?: string;
          /** The LinkedIn profile data available for the user. */
          linkedInData?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
