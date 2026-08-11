import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a HelpDesk ticket with a requester and plain-text first message; attachment transactions are intentionally excluded. */
    "helpdesk.create_ticket": {
      input: {
        /** The HelpDesk ticket status. */
        status?: "open" | "pending" | "onhold" | "solved" | "closed";
        /** The HelpDesk ticket priority. */
        priority?: -10 | 0 | 10 | 20;
        /**
         * The ticket subject.
         * @minLength 1
         */
        subject?: string;
        /** The teams that can access the ticket. */
        teamIds?: Array<string>;
        /** The person requesting support. */
        requester: {
          /**
           * The requester email address.
           * @format email
           */
          email: string;
          /**
           * The requester display name.
           * @minLength 1
           */
          name?: string;
        };
        /** The people copied on ticket messages. */
        cc?: Array<{
          /**
           * The copied person's email address.
           * @format email
           */
          email: string;
          /**
           * The copied person's display name.
           * @minLength 1
           */
          name?: string;
        }>;
        /** The tags to attach to the ticket. */
        tagIds?: Array<string>;
        /** The agents that should follow the ticket. */
        followerIds?: Array<string>;
        /** A ticket assignment to a HelpDesk team, agent, or both. */
        assignment?: {
          /**
           * The HelpDesk team UUID.
           * @format uuid
           */
          teamId?: string;
          /**
           * The HelpDesk agent UUID.
           * @format uuid
           */
          agentId?: string;
        };
        /** A plain-text ticket message. */
        message: {
          /**
           * The plain-text message content.
           * @minLength 1
           */
          text: string;
        };
        /** Whether the new message is private to agents. */
        isPrivate?: boolean;
        /** Custom field values keyed by the HelpDesk custom field API key. */
        customFields?: Record<string, unknown>;
        /** The actor type attributed to this change. */
        authorType?: "agent" | "client";
      };
      output: {
        /** A HelpDesk ticket returned by the API. */
        ticket: {
          /**
           * The unique ticket identifier.
           * @format uuid
           */
          ID?: string;
          /** The HelpDesk account identifier. */
          licenseID?: number;
          /**
           * The time the ticket was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The identifier that created the ticket.
           * @format uuid
           */
          createdBy?: string;
          /** The type of actor that created the ticket. */
          createdByType?: string;
          /**
           * The time the ticket was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The identifier that last updated the ticket.
           * @format uuid
           */
          updatedBy?: string;
          /** The human-readable short ticket identifier. */
          shortID?: string;
          /**
           * The time of the last public message.
           * @format date-time
           */
          lastMessageAt?: string;
          /** The HelpDesk ticket status. */
          status?: "open" | "pending" | "onhold" | "solved" | "closed";
          /** The HelpDesk ticket priority. */
          priority?: -10 | 0 | 10 | 20;
          /** The ticket subject. */
          subject?: string;
          /** The teams that can access the ticket. */
          teamIDs?: Array<string>;
          /** The requester returned with a HelpDesk ticket. */
          requester?: {
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The people copied on ticket messages. */
          cc?: Array<{
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The tags attached to the ticket. */
          tagIDs?: Array<string>;
          /** The agents following the ticket. */
          followers?: Array<string>;
          /** The current team and agent assignment. */
          assignment?: Record<string, unknown>;
          /** The ticket custom field values. */
          customFields?: Record<string, unknown>;
          /** The HelpDesk ticket silo. */
          silo?: "tickets" | "archive" | "trash" | "spam";
          /** The source from which the ticket originated. */
          source?: Record<string, unknown>;
          /** The ticket event history returned by HelpDesk. */
          events?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a HelpDesk ticket by UUID. */
    "helpdesk.delete_ticket": {
      input: {
        /**
         * The HelpDesk ticket UUID.
         * @format uuid
         */
        ticketId: string;
      };
      output: {
        /** Whether HelpDesk returned its documented OK acknowledgement. */
        ok: boolean;
      };
    };
    /** Get one HelpDesk ticket by UUID. */
    "helpdesk.get_ticket": {
      input: {
        /**
         * The HelpDesk ticket UUID.
         * @format uuid
         */
        ticketId: string;
      };
      output: {
        /** A HelpDesk ticket returned by the API. */
        ticket: {
          /**
           * The unique ticket identifier.
           * @format uuid
           */
          ID?: string;
          /** The HelpDesk account identifier. */
          licenseID?: number;
          /**
           * The time the ticket was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The identifier that created the ticket.
           * @format uuid
           */
          createdBy?: string;
          /** The type of actor that created the ticket. */
          createdByType?: string;
          /**
           * The time the ticket was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The identifier that last updated the ticket.
           * @format uuid
           */
          updatedBy?: string;
          /** The human-readable short ticket identifier. */
          shortID?: string;
          /**
           * The time of the last public message.
           * @format date-time
           */
          lastMessageAt?: string;
          /** The HelpDesk ticket status. */
          status?: "open" | "pending" | "onhold" | "solved" | "closed";
          /** The HelpDesk ticket priority. */
          priority?: -10 | 0 | 10 | 20;
          /** The ticket subject. */
          subject?: string;
          /** The teams that can access the ticket. */
          teamIDs?: Array<string>;
          /** The requester returned with a HelpDesk ticket. */
          requester?: {
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The people copied on ticket messages. */
          cc?: Array<{
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The tags attached to the ticket. */
          tagIDs?: Array<string>;
          /** The agents following the ticket. */
          followers?: Array<string>;
          /** The current team and agent assignment. */
          assignment?: Record<string, unknown>;
          /** The ticket custom field values. */
          customFields?: Record<string, unknown>;
          /** The HelpDesk ticket silo. */
          silo?: "tickets" | "archive" | "trash" | "spam";
          /** The source from which the ticket originated. */
          source?: Record<string, unknown>;
          /** The ticket event history returned by HelpDesk. */
          events?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List HelpDesk agents available for ticket assignment and following. */
    "helpdesk.list_agents": {
      input: Record<string, never>;
      output: {
        /** The agents returned by HelpDesk. */
        agents: Array<{
          /**
           * The HelpDesk agent UUID.
           * @format uuid
           */
          ID?: string;
          /** The HelpDesk account identifier. */
          licenseID?: number;
          /**
           * The time the agent was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The time the agent was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** The agent email address. */
          email?: string;
          /** The agent full name. */
          name?: string;
          /** The roles assigned to the agent. */
          roles?: Array<string>;
          /** The teams to which the agent belongs. */
          teamIDs?: Array<string>;
          /** The agent account status. */
          status?: string;
          /** The agent avatar URL. */
          avatar?: string | null;
          /** The agent job title. */
          jobTitle?: string | null;
          /** Whether auto-assignment is enabled for the agent. */
          autoassignment?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List HelpDesk teams available for ticket assignment and visibility. */
    "helpdesk.list_teams": {
      input: Record<string, never>;
      output: {
        /** The teams returned by HelpDesk. */
        teams: Array<{
          /**
           * The HelpDesk team UUID.
           * @format uuid
           */
          ID?: string;
          /** The HelpDesk account identifier. */
          licenseID?: number;
          /**
           * The time the team was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The time the team was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** The team name. */
          name?: string;
          /**
           * The reply address used by the team.
           * @format uuid
           */
          replyAddressID?: string | null;
          /** The sender name used for team replies. */
          replyName?: string | null;
          /**
           * The email template used by the team.
           * @format uuid
           */
          templateID?: string | null;
          /** The team notification and routing settings. */
          settings?: Record<string, unknown>;
          /** The team's external integration settings. */
          integrations?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List and search HelpDesk tickets with documented filters and composite cursor pagination. */
    "helpdesk.list_tickets": {
      input: {
        /** The HelpDesk ticket status. */
        status?: "open" | "pending" | "onhold" | "solved" | "closed";
        /** The HelpDesk ticket silo. */
        silo?: "tickets" | "archive" | "trash" | "spam";
        /** Whether to include tickets marked as spam. */
        spam?: boolean;
        /**
         * A ticket subject filter.
         * @minLength 1
         */
        subject?: string;
        /**
         * A full-text ticket search query.
         * @minLength 1
         */
        query?: string;
        /**
         * A human-readable HelpDesk short ticket identifier.
         * @minLength 1
         */
        shortId?: string;
        /**
         * The teams whose visible tickets should be returned.
         * @minItems 1
         */
        teamIds?: Array<string>;
        /**
         * The tags that returned tickets must have.
         * @minItems 1
         */
        tagIds?: Array<string>;
        /** Whether returned tickets must have an assigned agent. */
        hasAssignee?: boolean;
        /** The HelpDesk ticket priority. */
        priority?: -10 | 0 | 10 | 20;
        /**
         * The inclusive creation-time lower bound as an ISO timestamp or HelpDesk relative date.
         * @minLength 1
         */
        createdDateFrom?: string;
        /**
         * The inclusive creation-time upper bound as an ISO timestamp or HelpDesk relative date.
         * @minLength 1
         */
        createdDateTo?: string;
        /**
         * The inclusive update-time lower bound as an ISO timestamp or HelpDesk relative date.
         * @minLength 1
         */
        updatedDateFrom?: string;
        /**
         * The inclusive update-time upper bound as an ISO timestamp or HelpDesk relative date.
         * @minLength 1
         */
        updatedDateTo?: string;
        /**
         * The maximum number of tickets to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The ticket sort direction. */
        order?: "asc" | "desc";
        /** The ticket field used for cursor sorting. */
        sortBy?: "createdAt" | "updatedAt" | "lastMessageAt";
        /** A HelpDesk ticket pagination cursor. */
        next?: {
          /**
           * The timestamp value of the selected sort field.
           * @format date-time
           */
          value: string;
          /**
           * The HelpDesk ticket UUID.
           * @format uuid
           */
          ID: string;
        };
        /** A HelpDesk ticket pagination cursor. */
        prev?: {
          /**
           * The timestamp value of the selected sort field.
           * @format date-time
           */
          value: string;
          /**
           * The HelpDesk ticket UUID.
           * @format uuid
           */
          ID: string;
        };
      };
      output: {
        /** The tickets returned by HelpDesk. */
        tickets: Array<{
          /**
           * The unique ticket identifier.
           * @format uuid
           */
          ID?: string;
          /** The HelpDesk account identifier. */
          licenseID?: number;
          /**
           * The time the ticket was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The identifier that created the ticket.
           * @format uuid
           */
          createdBy?: string;
          /** The type of actor that created the ticket. */
          createdByType?: string;
          /**
           * The time the ticket was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The identifier that last updated the ticket.
           * @format uuid
           */
          updatedBy?: string;
          /** The human-readable short ticket identifier. */
          shortID?: string;
          /**
           * The time of the last public message.
           * @format date-time
           */
          lastMessageAt?: string;
          /** The HelpDesk ticket status. */
          status?: "open" | "pending" | "onhold" | "solved" | "closed";
          /** The HelpDesk ticket priority. */
          priority?: -10 | 0 | 10 | 20;
          /** The ticket subject. */
          subject?: string;
          /** The teams that can access the ticket. */
          teamIDs?: Array<string>;
          /** The requester returned with a HelpDesk ticket. */
          requester?: {
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The people copied on ticket messages. */
          cc?: Array<{
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The tags attached to the ticket. */
          tagIDs?: Array<string>;
          /** The agents following the ticket. */
          followers?: Array<string>;
          /** The current team and agent assignment. */
          assignment?: Record<string, unknown>;
          /** The ticket custom field values. */
          customFields?: Record<string, unknown>;
          /** The HelpDesk ticket silo. */
          silo?: "tickets" | "archive" | "trash" | "spam";
          /** The source from which the ticket originated. */
          source?: Record<string, unknown>;
          /** The ticket event history returned by HelpDesk. */
          events?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The total number of pages reported by HelpDesk. */
        totalPages: number | null;
        /** The total number of matching tickets. */
        totalResults: number | null;
        /** A HelpDesk ticket pagination cursor. */
        nextCursor: {
          /**
           * The timestamp value of the selected sort field.
           * @format date-time
           */
          value: string;
          /**
           * The HelpDesk ticket UUID.
           * @format uuid
           */
          ID: string;
        } | null;
        /** A HelpDesk ticket pagination cursor. */
        prevCursor: {
          /**
           * The timestamp value of the selected sort field.
           * @format date-time
           */
          value: string;
          /**
           * The HelpDesk ticket UUID.
           * @format uuid
           */
          ID: string;
        } | null;
      };
    };
    /** Move a HelpDesk ticket between the active, archive, trash, or spam silos. */
    "helpdesk.move_ticket_to_silo": {
      input: {
        /**
         * The HelpDesk ticket UUID.
         * @format uuid
         */
        ticketId: string;
        /** The HelpDesk ticket silo. */
        silo: "tickets" | "archive" | "trash" | "spam";
      };
      output: {
        /** Whether HelpDesk returned its documented OK acknowledgement. */
        ok: boolean;
      };
    };
    /** Partially update a HelpDesk ticket and optionally add one plain-text public or private message. */
    "helpdesk.update_ticket": {
      input: {
        /**
         * The HelpDesk ticket UUID.
         * @format uuid
         */
        ticketId: string;
        /** The HelpDesk ticket status. */
        status?: "open" | "pending" | "onhold" | "solved" | "closed";
        /** The HelpDesk ticket priority. */
        priority?: -10 | 0 | 10 | 20;
        /**
         * The ticket subject.
         * @minLength 1
         */
        subject?: string;
        /** The teams that can access the ticket. */
        teamIds?: Array<string>;
        /** The person requesting support. */
        requester?: {
          /**
           * The requester email address.
           * @format email
           */
          email: string;
          /**
           * The requester display name.
           * @minLength 1
           */
          name?: string;
        };
        /** The people copied on ticket messages. */
        cc?: Array<{
          /**
           * The copied person's email address.
           * @format email
           */
          email: string;
          /**
           * The copied person's display name.
           * @minLength 1
           */
          name?: string;
        }>;
        /** The tags to attach to the ticket. */
        tagIds?: Array<string>;
        /** The agents that should follow the ticket. */
        followerIds?: Array<string>;
        /** A ticket assignment to a HelpDesk team, agent, or both. */
        assignment?: {
          /**
           * The HelpDesk team UUID.
           * @format uuid
           */
          teamId?: string;
          /**
           * The HelpDesk agent UUID.
           * @format uuid
           */
          agentId?: string;
        };
        /** A plain-text ticket message. */
        message?: {
          /**
           * The plain-text message content.
           * @minLength 1
           */
          text: string;
        };
        /** Whether the new message is private to agents. */
        isPrivate?: boolean;
        /** Custom field values keyed by the HelpDesk custom field API key. */
        customFields?: Record<string, unknown>;
        /** The actor type attributed to this change. */
        authorType?: "agent" | "client";
      };
      output: {
        /** A HelpDesk ticket returned by the API. */
        ticket: {
          /**
           * The unique ticket identifier.
           * @format uuid
           */
          ID?: string;
          /** The HelpDesk account identifier. */
          licenseID?: number;
          /**
           * The time the ticket was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The identifier that created the ticket.
           * @format uuid
           */
          createdBy?: string;
          /** The type of actor that created the ticket. */
          createdByType?: string;
          /**
           * The time the ticket was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The identifier that last updated the ticket.
           * @format uuid
           */
          updatedBy?: string;
          /** The human-readable short ticket identifier. */
          shortID?: string;
          /**
           * The time of the last public message.
           * @format date-time
           */
          lastMessageAt?: string;
          /** The HelpDesk ticket status. */
          status?: "open" | "pending" | "onhold" | "solved" | "closed";
          /** The HelpDesk ticket priority. */
          priority?: -10 | 0 | 10 | 20;
          /** The ticket subject. */
          subject?: string;
          /** The teams that can access the ticket. */
          teamIDs?: Array<string>;
          /** The requester returned with a HelpDesk ticket. */
          requester?: {
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The people copied on ticket messages. */
          cc?: Array<{
            /** The requester email address. */
            email?: string;
            /** The requester display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The tags attached to the ticket. */
          tagIDs?: Array<string>;
          /** The agents following the ticket. */
          followers?: Array<string>;
          /** The current team and agent assignment. */
          assignment?: Record<string, unknown>;
          /** The ticket custom field values. */
          customFields?: Record<string, unknown>;
          /** The HelpDesk ticket silo. */
          silo?: "tickets" | "archive" | "trash" | "spam";
          /** The source from which the ticket originated. */
          source?: Record<string, unknown>;
          /** The ticket event history returned by HelpDesk. */
          events?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
