import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the authenticated Dailybot user context and linked organization. */
    "dailybot.get_me": {
      input: Record<string, never>;
      output: {
        /** The authenticated Dailybot user context. */
        profile: {
          /** The authenticated user identifier. */
          id: string;
          /** The authenticated user email address. */
          email: string;
          /** The authenticated user's first name. */
          first_name?: string;
          /** The authenticated user's last name. */
          last_name?: string;
          /** The authenticated user's organization role. */
          role?: string;
          /** The authenticated user's IANA timezone. */
          timezone?: string;
          /** The organization linked to the API key. */
          organization?: {
            /** The Dailybot organization identifier. */
            id: string;
            /** The organization name. */
            name: string;
            /** The organization plan. */
            plan?: string;
            /** The number of members in the organization. */
            member_count?: number;
            /**
             * The ISO 8601 timestamp when the organization was created.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            created_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the Dailybot organization details for the authenticated API key. */
    "dailybot.get_organization": {
      input: Record<string, never>;
      output: {
        /** The Dailybot organization details. */
        organization: {
          /** The Dailybot organization identifier. */
          id: string;
          /** The organization name. */
          name: string;
          /** The organization plan. */
          plan?: string;
          /** The number of members in the organization. */
          member_count?: number;
          /**
           * The ISO 8601 timestamp when the organization was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a specific team from the authenticated Dailybot organization. */
    "dailybot.get_team": {
      input: {
        /**
         * The Dailybot team identifier.
         * @minLength 1
         */
        team_id: string;
      };
      output: {
        /** The Dailybot team details. */
        team: {
          /** The Dailybot team identifier. */
          id: string;
          /** The team name. */
          name: string;
          /** The team description. */
          description?: string;
          /** The number of members in the team. */
          member_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a specific user from the authenticated Dailybot organization. */
    "dailybot.get_user": {
      input: {
        /**
         * The Dailybot user UUID.
         * @minLength 1
         */
        user_uuid: string;
      };
      output: {
        /** The Dailybot user details. */
        user: {
          /** The Dailybot user UUID. */
          uuid: string;
          /** The user email address. */
          email: string;
          /** The user's first name. */
          first_name?: string;
          /** The user's last name. */
          last_name?: string;
          /** The user's organization role. */
          role?: string;
          /** Whether the user is active. */
          is_active?: boolean;
          /** The user's IANA timezone. */
          timezone?: string;
          /** The custom metadata stored on the user. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List members of a specific Dailybot team. */
    "dailybot.list_team_members": {
      input: {
        /**
         * The Dailybot team identifier.
         * @minLength 1
         */
        team_id: string;
      };
      output: {
        /**
         * Total number of results available.
         * @minimum 0
         */
        count: number;
        /** The team members returned by Dailybot. */
        members: Array<{
          /** The team member's user UUID. */
          uuid: string;
          /** The team member's display name. */
          name?: string;
          /** The team member's email address. */
          email?: string;
          /** The team membership role. */
          role?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List teams in the authenticated Dailybot organization. */
    "dailybot.list_teams": {
      input: {
        /**
         * Number of results to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Pagination offset for the result set.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /**
         * Total number of results available.
         * @minimum 0
         */
        count: number;
        /** The teams returned by Dailybot. */
        teams: Array<{
          /** The Dailybot team identifier. */
          id: string;
          /** The team name. */
          name: string;
          /** The team description. */
          description?: string;
          /** The number of members in the team. */
          member_count?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List users in the authenticated Dailybot organization. */
    "dailybot.list_users": {
      input: {
        /** Filter users by active status. */
        is_active?: boolean;
        /** Filter users by role. */
        role?: "admin" | "member";
        /**
         * Number of results to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Pagination offset for the result set.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /**
         * Total number of results available.
         * @minimum 0
         */
        count: number;
        /** The users returned by Dailybot. */
        users: Array<{
          /** The Dailybot user UUID. */
          uuid: string;
          /** The user email address. */
          email: string;
          /** The user's first name. */
          first_name?: string;
          /** The user's last name. */
          last_name?: string;
          /** The user's organization role. */
          role?: string;
          /** Whether the user is active. */
          is_active?: boolean;
          /** The user's IANA timezone. */
          timezone?: string;
          /** The custom metadata stored on the user. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Open a direct Dailybot conversation with a user. */
    "dailybot.open_conversation": {
      input: {
        /**
         * The Dailybot user UUID.
         * @minLength 1
         */
        user_uuid: string;
        /**
         * The optional first message to send with the conversation.
         * @minLength 1
         */
        initial_message?: string;
      };
      output: {
        /** The Dailybot conversation result. */
        conversation: {
          /** The conversation status returned by Dailybot. */
          status: string;
          /** The user UUID for the opened conversation. */
          user_uuid?: string;
          /** The chat platform used for the conversation. */
          platform?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Send an email notification through Dailybot. */
    "dailybot.send_email": {
      input: {
        /**
         * The Dailybot user UUID.
         * @minLength 1
         */
        user_uuid: string;
        /**
         * The email subject line.
         * @minLength 1
         */
        subject: string;
        /**
         * The email body, as plain text or HTML.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** The Dailybot email delivery result. */
        delivery: {
          /** The delivery status returned by Dailybot. */
          status: string;
          [key: string]: unknown;
        };
      };
    };
    /** Send a chat message to a Dailybot user, team, or channel. */
    "dailybot.send_message": {
      input: {
        /** The recipient type for the message. */
        target_type: "user" | "team" | "channel";
        /**
         * The recipient UUID for the message.
         * @minLength 1
         */
        target_uuid: string;
        /**
         * The message text to send.
         * @minLength 1
         */
        message: string;
        /** The chat platform to use for delivery. */
        platform?: "slack" | "msteams" | "discord" | "google_chat";
      };
      output: {
        /** The Dailybot delivery result. */
        delivery: {
          /** The delivery status returned by Dailybot. */
          status: string;
          /** The recipient type used for the message. */
          target_type?: string;
          /** The recipient UUID used for the message. */
          target_uuid?: string;
          /** The message content sent to the recipient. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
