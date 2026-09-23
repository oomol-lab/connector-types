import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Blocklist one or more listmonk subscribers. Blocklisted subscribers are unsubscribed from every list and never receive campaigns. */
    "listmonk.blocklist_subscribers": {
      input: {
        /**
         * The subscriber IDs to blocklist.
         * @minItems 1
         */
        subscriberIds: Array<number>;
      };
      output: {
        /** Whether the subscribers were blocklisted. */
        blocklisted: boolean;
      };
    };
    /** Cancel a running or paused campaign permanently. A cancelled campaign cannot be resumed. */
    "listmonk.cancel_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Create a listmonk campaign as a draft. Nothing is sent: use send_campaign_test to preview it by email, then schedule_campaign or start_campaign to send it. Setting sendAt here only stores the time; the campaign is not scheduled until schedule_campaign runs. */
    "listmonk.create_campaign": {
      input: {
        /**
         * The internal campaign name.
         * @minLength 1
         */
        name: string;
        /**
         * The email subject. May contain listmonk template expressions.
         * @minLength 1
         */
        subject: string;
        /**
         * The list IDs to send the campaign to.
         * @minItems 1
         */
        listIds: Array<number>;
        /** The From header, for example "Chicago Aggies <news@example.org>". Defaults to the instance setting. */
        fromEmail?: string;
        /** The campaign body format. */
        contentType?: "richtext" | "html" | "markdown" | "plain" | "visual";
        /** The campaign body in the chosen contentType. */
        body?: string;
        /** An optional plain-text alternative body for HTML and richtext campaigns. */
        altbody?: string;
        /**
         * The campaign template ID. Defaults to the instance default template.
         * @exclusiveMinimum 0
         */
        templateId?: number;
        /** Tags for the campaign. */
        tags?: Array<string>;
        /**
         * When to send, as an ISO-8601 timestamp WITH a timezone offset, for example 2026-10-01T09:00:00+02:00 or 2026-10-01T07:00:00Z. Must be in the future. listmonk stores the absolute instant; the dashboard displays it in the listmonk server's timezone, so always state the offset explicitly.
         * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$
         */
        sendAt?: string;
        /** The messenger to send through. Defaults to email. */
        messenger?: string;
        /** Extra SMTP headers, each an object with one header name and value. */
        headers?: Array<Record<string, string>>;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Create a listmonk mailing list. */
    "listmonk.create_list": {
      input: {
        /**
         * The list name.
         * @minLength 1
         */
        name: string;
        /** public lists appear on the public subscription form; private lists do not. */
        type: "private" | "public";
        /** single subscribes immediately; double sends a confirmation email. */
        optin: "single" | "double";
        /** The list status. Defaults to active. */
        status?: "active" | "archived";
        /** Tags for the list. */
        tags?: Array<string>;
        /** A description of the list. */
        description?: string;
      };
      output: {
        /** A listmonk list with id, uuid, name, type, optin, status, tags, description, subscriber_count, and timestamps. */
        list: Record<string, unknown>;
      };
    };
    /** Create a listmonk subscriber and optionally subscribe it to lists. Double opt-in lists send a confirmation email unless preconfirmSubscriptions is true. */
    "listmonk.create_subscriber": {
      input: {
        /**
         * The subscriber email address.
         * @format email
         */
        email: string;
        /**
         * The subscriber name.
         * @minLength 1
         */
        name: string;
        /** The subscriber status. Defaults to enabled. */
        status?: "enabled" | "blocklisted";
        /** List IDs to subscribe the subscriber to. */
        listIds?: Array<number>;
        /** Arbitrary JSON attributes stored on the subscriber and available in templates, for example {"city": "Bengaluru"}. */
        attribs?: Record<string, unknown>;
        /** Mark the subscriptions as confirmed so no opt-in email is sent for double opt-in lists. */
        preconfirmSubscriptions?: boolean;
      };
      output: {
        /** A listmonk subscriber with id, uuid, email, name, attribs, status, lists (with subscription_status), created_at, and updated_at. */
        subscriber: Record<string, unknown>;
      };
    };
    /** Permanently delete one listmonk campaign. */
    "listmonk.delete_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** Whether the campaign was deleted. */
        deleted: boolean;
      };
    };
    /** Permanently delete one listmonk subscriber and its subscriptions. */
    "listmonk.delete_subscriber": {
      input: {
        /**
         * The numeric subscriber ID.
         * @exclusiveMinimum 0
         */
        subscriberId: number;
      };
      output: {
        /** Whether the subscriber was deleted. */
        deleted: boolean;
      };
    };
    /** Fetch one listmonk campaign with its status, schedule, target lists, body, and delivery counters. */
    "listmonk.get_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
        /** Omit the campaign body from the response. */
        noBody?: boolean;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Fetch campaign analytics over a date range: daily view, click, or bounce counts, or per-link click counts (type links). */
    "listmonk.get_campaign_analytics": {
      input: {
        /**
         * The campaign IDs to report on.
         * @minItems 1
         */
        campaignIds: Array<number>;
        /** The analytics type. */
        type: "views" | "clicks" | "bounces" | "links";
        /** The range start, as YYYY-MM-DD or an ISO-8601 timestamp. */
        from: string;
        /** The range end, as YYYY-MM-DD or an ISO-8601 timestamp. */
        to: string;
      };
      output: {
        /** The analytics type that was requested. */
        type: string;
        /** The analytics rows returned by listmonk. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Render the campaign body inside its template and return the HTML preview, exactly as recipients would see it. */
    "listmonk.get_campaign_preview": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** The rendered campaign HTML. */
        html: string;
      };
    };
    /** Fetch one listmonk list. */
    "listmonk.get_list": {
      input: {
        /**
         * The numeric list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** A listmonk list with id, uuid, name, type, optin, status, tags, description, subscriber_count, and timestamps. */
        list: Record<string, unknown>;
      };
    };
    /** Fetch the listmonk user profile of the connected API user, including its role and permissions. */
    "listmonk.get_profile": {
      input: Record<string, never>;
      output: {
        /** The listmonk user profile. */
        user: Record<string, unknown>;
      };
    };
    /** Fetch live delivery stats (sent, to_send, rate, started_at) for currently running campaigns, optionally narrowed to specific campaign IDs. */
    "listmonk.get_running_campaign_stats": {
      input: {
        /** Only return stats for these campaign IDs. */
        campaignIds?: Array<number>;
      };
      output: {
        /** One entry per running campaign. */
        stats: Array<Record<string, unknown>>;
      };
    };
    /** Fetch one listmonk subscriber with attributes and list subscriptions. */
    "listmonk.get_subscriber": {
      input: {
        /**
         * The numeric subscriber ID.
         * @exclusiveMinimum 0
         */
        subscriberId: number;
      };
      output: {
        /** A listmonk subscriber with id, uuid, email, name, attribs, status, lists (with subscription_status), created_at, and updated_at. */
        subscriber: Record<string, unknown>;
      };
    };
    /** Fetch one listmonk template including its body. */
    "listmonk.get_template": {
      input: {
        /**
         * The numeric template ID.
         * @exclusiveMinimum 0
         */
        templateId: number;
      };
      output: {
        /** A listmonk template with id, name, type, subject, body, is_default, and timestamps. */
        template: Record<string, unknown>;
      };
    };
    /** List listmonk campaigns, optionally filtered by a name/subject search, statuses, or tags, with paging. */
    "listmonk.list_campaigns": {
      input: {
        /** Full-text and substring search over campaign name and subject. */
        query?: string;
        /** Only campaigns in any of these statuses. */
        statuses?: Array<"draft" | "scheduled" | "running" | "paused" | "finished" | "cancelled">;
        /** Only campaigns carrying any of these tags. */
        tags?: Array<string>;
        /** The field to sort by. */
        orderBy?: "name" | "status" | "created_at" | "updated_at";
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /**
         * The page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to the listmonk default (20).
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Return every matching record in one page (per_page=all). Overrides page and perPage. */
        all?: boolean;
        /** Omit campaign bodies from the response. Defaults to true. */
        noBody?: boolean;
      };
      output: {
        /** The campaigns on this page. */
        campaigns: Array<Record<string, unknown>>;
        /** The total number of matching records. */
        total: number;
        /** The current page number. */
        page: number;
        /** The page size used by listmonk (0 when all results were requested). */
        perPage: number;
      };
    };
    /** List listmonk mailing lists with subscriber counts, optionally filtered by name, status, or tags. */
    "listmonk.list_lists": {
      input: {
        /** Search lists by name. */
        query?: string;
        /** Only lists with this status. */
        status?: "active" | "archived";
        /** Only lists carrying any of these tags. */
        tags?: Array<string>;
        /** The field to sort by. */
        orderBy?: "name" | "status" | "created_at" | "updated_at";
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /**
         * The page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to the listmonk default (20).
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Return every matching record in one page (per_page=all). Overrides page and perPage. */
        all?: boolean;
      };
      output: {
        /** The lists on this page. */
        lists: Array<Record<string, unknown>>;
        /** The total number of matching records. */
        total: number;
        /** The current page number. */
        page: number;
        /** The page size used by listmonk (0 when all results were requested). */
        perPage: number;
      };
    };
    /** Query listmonk subscribers, optionally filtered by list membership and an SQL expression over the subscribers table, with paging. */
    "listmonk.list_subscribers": {
      input: {
        /** An SQL WHERE expression over the subscribers table, for example subscribers.email LIKE '%@example.com' or subscribers.attribs->>'city' = 'Chicago'. The API user's role needs the subscribers:sql_query permission whenever this is set. */
        query?: string;
        /** Only subscribers in any of these list IDs. */
        listIds?: Array<number>;
        /** Filter by subscription status on the given listIds. */
        subscriptionStatus?: "unconfirmed" | "confirmed" | "unsubscribed";
        /** The field to sort by. */
        orderBy?: "name" | "status" | "created_at" | "updated_at";
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /**
         * The page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to the listmonk default (20).
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Return every matching record in one page (per_page=all). Overrides page and perPage. */
        all?: boolean;
      };
      output: {
        /** The subscribers on this page. */
        subscribers: Array<Record<string, unknown>>;
        /** The total number of matching records. */
        total: number;
        /** The current page number. */
        page: number;
        /** The page size used by listmonk (0 when all results were requested). */
        perPage: number;
      };
    };
    /** List listmonk templates (campaign, visual campaign, and transactional) to pick a templateId for campaigns. */
    "listmonk.list_templates": {
      input: {
        /** Omit template bodies from the response. Defaults to true. */
        noBody?: boolean;
      };
      output: {
        /** The listmonk templates. */
        templates: Array<Record<string, unknown>>;
      };
    };
    /** Add subscribers to lists, remove them from lists, or mark their subscriptions as unsubscribed. status is required when action is add. */
    "listmonk.manage_subscriber_lists": {
      input: {
        /**
         * The subscriber IDs to modify.
         * @minItems 1
         */
        subscriberIds: Array<number>;
        /** The membership change to apply. */
        action: "add" | "remove" | "unsubscribe";
        /**
         * The list IDs to modify.
         * @minItems 1
         */
        targetListIds: Array<number>;
        /** The subscription status to set when action is add. */
        status?: "confirmed" | "unconfirmed" | "unsubscribed";
      };
      output: {
        /** Whether listmonk applied the change. */
        updated: boolean;
      };
    };
    /** Pause a running campaign. It can be resumed later with start_campaign. Only running campaigns can be paused. */
    "listmonk.pause_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Schedule a draft or paused campaign to be sent automatically at sendAt: stores sendAt on the campaign, then changes its status to scheduled. A campaign that is already scheduled is simply moved to the new time. SENDS EMAIL TO ALL SUBSCRIBERS OF THE TARGET LISTS - confirm with the user before executing. */
    "listmonk.schedule_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
        /**
         * When to send, as an ISO-8601 timestamp WITH a timezone offset, for example 2026-10-01T09:00:00+02:00 or 2026-10-01T07:00:00Z. Must be in the future. listmonk stores the absolute instant; the dashboard displays it in the listmonk server's timezone, so always state the offset explicitly.
         * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$
         */
        sendAt: string;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Send the campaign as it is currently saved to specific test addresses only (not to the lists). Each address must already exist as a subscriber in listmonk. */
    "listmonk.send_campaign_test": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
        /**
         * The subscriber email addresses to send the test to.
         * @minItems 1
         */
        emails: Array<string>;
      };
      output: {
        /** Whether listmonk queued the test messages. */
        sent: boolean;
      };
    };
    /** Start sending a draft or paused campaign immediately (status running); a paused campaign resumes where it stopped. SENDS EMAIL TO ALL SUBSCRIBERS OF THE TARGET LISTS - confirm with the user before executing. */
    "listmonk.start_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Unschedule a scheduled campaign by moving it back to draft, so it is not sent at its sendAt. The stored sendAt is kept; only scheduled campaigns can be unscheduled. */
    "listmonk.unschedule_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Update a draft, scheduled, or paused listmonk campaign. Only the provided fields change; target lists and attachments are preserved unless listIds is given. Pass sendAt null to clear a stored send time; listmonk rejects every update while the stored send time is in the past. */
    "listmonk.update_campaign": {
      input: {
        /**
         * The numeric campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
        /**
         * The internal campaign name.
         * @minLength 1
         */
        name?: string;
        /**
         * The email subject.
         * @minLength 1
         */
        subject?: string;
        /**
         * The complete set of target list IDs.
         * @minItems 1
         */
        listIds?: Array<number>;
        /** The From header. */
        fromEmail?: string;
        /** The campaign body format. */
        contentType?: "richtext" | "html" | "markdown" | "plain" | "visual";
        /** The campaign body. */
        body?: string;
        /** The plain-text alternative body. */
        altbody?: string;
        /**
         * The campaign template ID.
         * @exclusiveMinimum 0
         */
        templateId?: number;
        /** The complete set of tags; replaces existing tags. */
        tags?: Array<string>;
        /**
         * A new send time as an ISO-8601 timestamp with a timezone offset, or null to clear the stored send time.
         * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$
         */
        sendAt?: string | null;
      };
      output: {
        /** A listmonk campaign with id, uuid, name, subject, from_email, status, type, content_type, body, send_at, lists, tags, template_id, and the sent/to_send/views/clicks/bounces counters. */
        campaign: Record<string, unknown>;
      };
    };
    /** Update one listmonk list. Only the provided fields change; the current name and tags are preserved when omitted. */
    "listmonk.update_list": {
      input: {
        /**
         * The numeric list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The new list name.
         * @minLength 1
         */
        name?: string;
        /** The list type. */
        type?: "private" | "public";
        /** The opt-in type. */
        optin?: "single" | "double";
        /** The list status. */
        status?: "active" | "archived";
        /** The complete set of tags; replaces existing tags. */
        tags?: Array<string>;
        /** The new description. */
        description?: string;
      };
      output: {
        /** A listmonk list with id, uuid, name, type, optin, status, tags, description, subscriber_count, and timestamps. */
        list: Record<string, unknown>;
      };
    };
    /** Update one listmonk subscriber. Only the provided fields change: the current subscriber is read first and merged, so omitted fields and list subscriptions are preserved. Passing listIds replaces the subscriber's list subscriptions; attribs replaces all attributes. Unless preconfirmSubscriptions is true, an instance with opt-in confirmations enabled emails the subscriber again for every double opt-in list that is still unconfirmed. */
    "listmonk.update_subscriber": {
      input: {
        /**
         * The numeric subscriber ID.
         * @exclusiveMinimum 0
         */
        subscriberId: number;
        /**
         * The new email address.
         * @format email
         */
        email?: string;
        /**
         * The new name.
         * @minLength 1
         */
        name?: string;
        /** The new subscriber status. */
        status?: "enabled" | "disabled" | "blocklisted";
        /** The complete set of list IDs the subscriber should belong to. */
        listIds?: Array<number>;
        /** Arbitrary JSON attributes stored on the subscriber and available in templates, for example {"city": "Bengaluru"}. */
        attribs?: Record<string, unknown>;
        /** Mark newly added subscriptions as confirmed without an opt-in email. */
        preconfirmSubscriptions?: boolean;
      };
      output: {
        /** A listmonk subscriber with id, uuid, email, name, attribs, status, lists (with subscription_status), created_at, and updated_at. */
        subscriber: Record<string, unknown>;
      };
    };
  }
}
