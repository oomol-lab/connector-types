import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an existing SupportBee label to a ticket. */
    "supportbee.add_label_to_ticket": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
        /**
         * The existing SupportBee label name to add.
         * @minLength 1
         */
        label_name: string;
      };
      output: {
        /** A SupportBee label. */
        label: {
          /** The SupportBee label ID. */
          id: number | null;
          /** The SupportBee label name. */
          label: string | null;
          /** The SupportBee ticket ID associated with the label. */
          ticket: number | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a SupportBee ticket with JSON body content and optional email recipients. */
    "supportbee.create_ticket": {
      input: {
        /**
         * The subject of the ticket.
         * @minLength 1
         */
        subject?: string;
        /**
         * The name of the ticket requester.
         * @minLength 1
         */
        requester_name?: string;
        /**
         * The email address of the ticket requester.
         * @format email
         */
        requester_email?: string;
        /**
         * Email addresses sent to SupportBee.
         * @minItems 1
         */
        cc?: Array<string>;
        /**
         * Email addresses sent to SupportBee.
         * @minItems 1
         */
        bcc?: Array<string>;
        /** Whether SupportBee should email a copy of the ticket to the requester, CC, and BCC recipients. */
        notify_requester?: boolean;
        /**
         * The plain-text ticket body. Either text or html must be provided.
         * @minLength 1
         */
        text?: string;
        /**
         * The HTML ticket body. Either text or html must be provided.
         * @minLength 1
         */
        html?: string;
        /**
         * SupportBee attachment IDs that were already uploaded through the SupportBee attachment API.
         * @minItems 1
         */
        attachment_ids?: Array<number>;
        /**
         * The SupportBee forwarding address ID used as the sender for ticket copies or auto-responses.
         * @minLength 1
         */
        forwarding_address_id?: string;
      };
      output: {
        /** A normalized SupportBee ticket. */
        ticket: {
          /** The SupportBee ticket ID. */
          id: number | null;
          /** The ticket subject. */
          subject: string | null;
          /** The number of replies on the ticket. */
          replies_count: number | null;
          /** The number of comments on the ticket. */
          comments_count: number | null;
          /** The ticket creation time returned by SupportBee. */
          created_at: string | null;
          /** The ticket last-activity time returned by SupportBee. */
          last_activity_at: string | null;
          /** Whether the ticket is currently unanswered. */
          unanswered: boolean | null;
          /** Whether the ticket is archived. */
          archived: boolean | null;
          /** Whether the ticket is marked as spam. */
          spam: boolean | null;
          /** The label names returned with the ticket. */
          labels: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          requester: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a SupportBee ticket comment with JSON body content. */
    "supportbee.create_ticket_comment": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
        /**
         * The plain-text comment body. Either text or html must be provided.
         * @minLength 1
         */
        text?: string;
        /**
         * The HTML comment body. Either text or html must be provided.
         * @minLength 1
         */
        html?: string;
      };
      output: {
        /** A normalized SupportBee ticket comment. */
        comment: {
          /** The SupportBee comment ID. */
          id: number | null;
          /** The comment creation time returned by SupportBee. */
          created_at: string | null;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          commenter: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a SupportBee ticket reply with JSON body content. */
    "supportbee.create_ticket_reply": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
        /**
         * The plain-text reply body. Either text or html must be provided.
         * @minLength 1
         */
        text?: string;
        /**
         * The HTML reply body. Either text or html must be provided.
         * @minLength 1
         */
        html?: string;
        /**
         * Email addresses sent to SupportBee.
         * @minItems 1
         */
        cc?: Array<string>;
        /**
         * Email addresses sent to SupportBee.
         * @minItems 1
         */
        bcc?: Array<string>;
        /**
         * SupportBee attachment IDs that were already uploaded through the SupportBee attachment API.
         * @minItems 1
         */
        attachment_ids?: Array<number>;
        /** The SupportBee agent to reply on behalf of. Admin rights are required upstream. */
        on_behalf_of?: {
          /**
           * A positive SupportBee numeric identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The email address of the agent to reply on behalf of.
           * @format email
           */
          email?: string;
        };
      };
      output: {
        /** A normalized SupportBee ticket reply. */
        reply: {
          /** The SupportBee reply ID. */
          id: number | null;
          /** The reply creation time returned by SupportBee. */
          created_at: string | null;
          /** The reply summary returned by SupportBee. */
          summary: string | null;
          /** The CC email addresses returned with the reply. */
          cc: Array<string>;
          /** The BCC email addresses returned with the reply. */
          bcc: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          replier: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a SupportBee user or customer group. */
    "supportbee.create_user": {
      input: {
        /**
         * The user email address. Required when type is user or omitted.
         * @format email
         */
        email?: string;
        /**
         * The user or customer group name.
         * @minLength 1
         */
        name: string;
        /** The SupportBee role value: 9 for Collaborator, 10 for Agent, or 20 for Admin. */
        role?: number;
        /**
         * SupportBee team IDs to associate with the user.
         * @minItems 1
         */
        team_ids?: Array<number>;
        /** Whether to create or update a user or customer group. */
        type?: "user" | "customer_group";
        /** Whether customer group members can access group tickets from the portal. */
        can_members_access_group_tickets?: boolean | null;
        /**
         * Email domains whose users should automatically join the customer group.
         * @minItems 1
         */
        email_domains?: Array<string>;
      };
      output: {
        /** A normalized SupportBee user or customer group. */
        user: {
          /** The SupportBee user or customer group ID. */
          id: number | null;
          /** The SupportBee user type when returned. */
          type: string | null;
          /** The user email address when returned. */
          email: string | null;
          /** The user or customer group display name. */
          name: string | null;
          /** The SupportBee role string when returned. */
          role: string | null;
          /** Whether SupportBee marks the user as an agent. */
          agent: boolean | null;
          /** The teams returned with the user. */
          teams: Array<Record<string, unknown>>;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a SupportBee ticket by ID. */
    "supportbee.get_ticket": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized SupportBee ticket. */
        ticket: {
          /** The SupportBee ticket ID. */
          id: number | null;
          /** The ticket subject. */
          subject: string | null;
          /** The number of replies on the ticket. */
          replies_count: number | null;
          /** The number of comments on the ticket. */
          comments_count: number | null;
          /** The ticket creation time returned by SupportBee. */
          created_at: string | null;
          /** The ticket last-activity time returned by SupportBee. */
          last_activity_at: string | null;
          /** Whether the ticket is currently unanswered. */
          unanswered: boolean | null;
          /** Whether the ticket is archived. */
          archived: boolean | null;
          /** Whether the ticket is marked as spam. */
          spam: boolean | null;
          /** The label names returned with the ticket. */
          labels: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          requester: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one SupportBee ticket reply by ticket ID and reply ID. */
    "supportbee.get_ticket_reply": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        reply_id: number;
      };
      output: {
        /** A normalized SupportBee ticket reply. */
        reply: {
          /** The SupportBee reply ID. */
          id: number | null;
          /** The reply creation time returned by SupportBee. */
          created_at: string | null;
          /** The reply summary returned by SupportBee. */
          summary: string | null;
          /** The CC email addresses returned with the reply. */
          cc: Array<string>;
          /** The BCC email addresses returned with the reply. */
          bcc: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          replier: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one SupportBee user or customer group by ID. */
    "supportbee.get_user": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The maximum number of tickets SupportBee should include for the user, or false to request all tickets. */
        max_tickets?: number | false;
      };
      output: {
        /** A normalized SupportBee user or customer group. */
        user: {
          /** The SupportBee user or customer group ID. */
          id: number | null;
          /** The SupportBee user type when returned. */
          type: string | null;
          /** The user email address when returned. */
          email: string | null;
          /** The user or customer group display name. */
          name: string | null;
          /** The SupportBee role string when returned. */
          role: string | null;
          /** Whether SupportBee marks the user as an agent. */
          agent: boolean | null;
          /** The teams returned with the user. */
          teams: Array<Record<string, unknown>>;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** List custom SupportBee labels for the connected desk. */
    "supportbee.list_labels": {
      input: Record<string, never>;
      output: {
        /** The labels returned by SupportBee. */
        labels: Array<{
          /** The SupportBee label ID. */
          id: number | null;
          /** The SupportBee label name. */
          label: string | null;
          /** The SupportBee ticket ID associated with the label. */
          ticket: number | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** List SupportBee teams with optional user expansion filters. */
    "supportbee.list_teams": {
      input: {
        /** Whether SupportBee should include users in each team. */
        with_users?: boolean;
        /** The SupportBee user filter. Official docs currently support me. */
        user?: "me";
      };
      output: {
        /** The teams returned by SupportBee. */
        teams: Array<{
          /** The SupportBee team ID. */
          id: number | null;
          /** The SupportBee team name. */
          name: string | null;
          /** The users returned with the team when requested. */
          users: Array<Record<string, unknown>>;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** List comments for a SupportBee ticket. */
    "supportbee.list_ticket_comments": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
      };
      output: {
        /** The comments returned by SupportBee. */
        comments: Array<{
          /** The SupportBee comment ID. */
          id: number | null;
          /** The comment creation time returned by SupportBee. */
          created_at: string | null;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          commenter: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** List replies for a SupportBee ticket. */
    "supportbee.list_ticket_replies": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
      };
      output: {
        /** The replies returned by SupportBee. */
        replies: Array<{
          /** The SupportBee reply ID. */
          id: number | null;
          /** The reply creation time returned by SupportBee. */
          created_at: string | null;
          /** The reply summary returned by SupportBee. */
          summary: string | null;
          /** The CC email addresses returned with the reply. */
          cc: Array<string>;
          /** The BCC email addresses returned with the reply. */
          bcc: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          replier: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** List SupportBee tickets with optional official ticket filters. */
    "supportbee.list_tickets": {
      input: {
        /**
         * The number of records to retrieve. SupportBee requires this to be less than 100.
         * @minimum 1
         * @maximum 99
         */
        per_page?: number;
        /**
         * The one-based SupportBee page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** How SupportBee should include archived tickets: true, false, or any. */
        archived?: "true" | "false" | "any";
        /** Whether SupportBee should include tickets marked as spam. */
        spam?: boolean;
        /** Whether SupportBee should include trashed tickets. */
        trash?: boolean;
        /** Whether SupportBee should return only tickets with replies or only tickets without replies. */
        replies?: boolean;
        /**
         * The exact number of replies a ticket must have.
         * @minimum 0
         */
        max_replies?: number;
        /**
         * SupportBee assigned_user filter such as me, any, none, or an agent ID.
         * @minLength 1
         */
        assigned_user?: string;
        /**
         * SupportBee assigned_team filter such as mine, none, or a team ID.
         * @minLength 1
         */
        assigned_team?: string;
        /**
         * The SupportBee label name used to filter tickets.
         * @minLength 1
         */
        label?: string;
        /**
         * A SupportBee date, date-time, or timestamp lower bound for ticket activity.
         * @minLength 1
         */
        since?: string;
        /**
         * A SupportBee date, date-time, or timestamp upper bound for ticket activity.
         * @minLength 1
         */
        until?: string;
        /** The SupportBee ticket sort mode. */
        sort_by?: "last_activity" | "creation_time";
        /**
         * Email addresses sent to SupportBee.
         * @minItems 1
         */
        requester_emails?: Array<string>;
        /** Whether SupportBee should return only the total ticket count. */
        total_only?: boolean;
      };
      output: {
        /** The tickets returned by SupportBee. */
        tickets: Array<{
          /** The SupportBee ticket ID. */
          id: number | null;
          /** The ticket subject. */
          subject: string | null;
          /** The number of replies on the ticket. */
          replies_count: number | null;
          /** The number of comments on the ticket. */
          comments_count: number | null;
          /** The ticket creation time returned by SupportBee. */
          created_at: string | null;
          /** The ticket last-activity time returned by SupportBee. */
          last_activity_at: string | null;
          /** Whether the ticket is currently unanswered. */
          unanswered: boolean | null;
          /** Whether the ticket is archived. */
          archived: boolean | null;
          /** Whether the ticket is marked as spam. */
          spam: boolean | null;
          /** The label names returned with the ticket. */
          labels: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          requester: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The current SupportBee page number when returned. */
        current_page: number | null;
        /** The SupportBee page size when returned. */
        per_page: number | null;
        /** The total number of SupportBee pages when returned. */
        total_pages: number | null;
        /** The total number of SupportBee tickets when returned. */
        total: number | null;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** List SupportBee users and customer groups. */
    "supportbee.list_users": {
      input: {
        /** Whether SupportBee should include invited users. */
        with_invited?: boolean;
        /**
         * Role names SupportBee should include, sent as a comma-separated with_roles query value.
         * @minItems 1
         */
        with_roles?: Array<"admin" | "agent" | "collaborator" | "customer">;
        /** The SupportBee user type filter. */
        type?: "user" | "customer_group";
      };
      output: {
        /** The users and customer groups returned by SupportBee. */
        users: Array<{
          /** The SupportBee user or customer group ID. */
          id: number | null;
          /** The SupportBee user type when returned. */
          type: string | null;
          /** The user email address when returned. */
          email: string | null;
          /** The user or customer group display name. */
          name: string | null;
          /** The SupportBee role string when returned. */
          role: string | null;
          /** Whether SupportBee marks the user as an agent. */
          agent: boolean | null;
          /** The teams returned with the user. */
          teams: Array<Record<string, unknown>>;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove a SupportBee label from a ticket. */
    "supportbee.remove_label_from_ticket": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        ticket_id: number;
        /**
         * The SupportBee label name to remove.
         * @minLength 1
         */
        label_name: string;
      };
      output: {
        /** Whether the label operation completed successfully. */
        ok: boolean;
      };
    };
    /** Search SupportBee tickets by query text with optional pagination filters. */
    "supportbee.search_tickets": {
      input: {
        /**
         * The SupportBee ticket search query.
         * @minLength 1
         */
        query: string;
        /**
         * The number of records to retrieve. SupportBee requires this to be less than 100.
         * @minimum 1
         * @maximum 99
         */
        per_page?: number;
        /**
         * The one-based SupportBee page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Whether SupportBee should include tickets marked as spam. */
        spam?: boolean;
        /** Whether SupportBee should include trashed tickets. */
        trash?: boolean;
      };
      output: {
        /** The tickets returned by SupportBee. */
        tickets: Array<{
          /** The SupportBee ticket ID. */
          id: number | null;
          /** The ticket subject. */
          subject: string | null;
          /** The number of replies on the ticket. */
          replies_count: number | null;
          /** The number of comments on the ticket. */
          comments_count: number | null;
          /** The ticket creation time returned by SupportBee. */
          created_at: string | null;
          /** The ticket last-activity time returned by SupportBee. */
          last_activity_at: string | null;
          /** Whether the ticket is currently unanswered. */
          unanswered: boolean | null;
          /** Whether the ticket is archived. */
          archived: boolean | null;
          /** Whether the ticket is marked as spam. */
          spam: boolean | null;
          /** The label names returned with the ticket. */
          labels: Array<string>;
          /** The user, requester, agent, commenter, or replier object returned by SupportBee. */
          requester: Record<string, unknown> | null;
          /** The ticket, reply, or comment content object returned by SupportBee. */
          content: Record<string, unknown> | null;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        }>;
        /** The current SupportBee page number when returned. */
        current_page: number | null;
        /** The SupportBee page size when returned. */
        per_page: number | null;
        /** The total number of SupportBee pages when returned. */
        total_pages: number | null;
        /** The total number of SupportBee tickets when returned. */
        total: number | null;
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a SupportBee user or customer group by ID. */
    "supportbee.update_user": {
      input: {
        /**
         * A positive SupportBee numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The user email address. Required when type is user or omitted.
         * @format email
         */
        email?: string;
        /**
         * The user or customer group name.
         * @minLength 1
         */
        name: string;
        /** The SupportBee role value: 9 for Collaborator, 10 for Agent, or 20 for Admin. */
        role?: number;
        /**
         * SupportBee team IDs to associate with the user.
         * @minItems 1
         */
        team_ids?: Array<number>;
        /** Whether to update a user or customer group. */
        type?: "user" | "customer_group";
        /** Whether customer group members can access group tickets from the portal. */
        can_members_access_group_tickets?: boolean | null;
        /**
         * Email domains whose users should automatically join the customer group.
         * @minItems 1
         */
        email_domains?: Array<string>;
      };
      output: {
        /** A normalized SupportBee user or customer group. */
        user: {
          /** The SupportBee user or customer group ID. */
          id: number | null;
          /** The SupportBee user type when returned. */
          type: string | null;
          /** The user email address when returned. */
          email: string | null;
          /** The user or customer group display name. */
          name: string | null;
          /** The SupportBee role string when returned. */
          role: string | null;
          /** Whether SupportBee marks the user as an agent. */
          agent: boolean | null;
          /** The teams returned with the user. */
          teams: Array<Record<string, unknown>>;
          /** The raw object returned by SupportBee. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by SupportBee. */
        raw: Record<string, unknown>;
      };
    };
  }
}
