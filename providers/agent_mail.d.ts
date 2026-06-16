import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch multiple messages from a specific AgentMail inbox by message ID. */
    "agent_mail.batch_get_messages": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Message IDs to fetch.
         * @minItems 1
         * @maxItems 500
         */
        message_ids: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Create an AgentMail API key. */
    "agent_mail.create_api_key": {
      input: {
        /**
         * Name of the API key.
         * @minLength 1
         */
        name?: string;
        /** Granular AgentMail API key permissions. */
        permissions?: {
          /** Read inbox details. */
          inbox_read?: boolean;
          /** Create new inboxes. */
          inbox_create?: boolean;
          /** Update inbox settings. */
          inbox_update?: boolean;
          /** Delete inboxes. */
          inbox_delete?: boolean;
          /** Read threads. */
          thread_read?: boolean;
          /** Delete threads. */
          thread_delete?: boolean;
          /** Read messages. */
          message_read?: boolean;
          /** Send messages. */
          message_send?: boolean;
          /** Update message labels. */
          message_update?: boolean;
          /** Access messages labeled spam. */
          label_spam_read?: boolean;
          /** Access messages labeled blocked. */
          label_blocked_read?: boolean;
          /** Access messages labeled trash. */
          label_trash_read?: boolean;
          /** Read drafts. */
          draft_read?: boolean;
          /** Create drafts. */
          draft_create?: boolean;
          /** Update drafts. */
          draft_update?: boolean;
          /** Delete drafts. */
          draft_delete?: boolean;
          /** Send drafts. */
          draft_send?: boolean;
          /** Read webhook configurations. */
          webhook_read?: boolean;
          /** Create webhooks. */
          webhook_create?: boolean;
          /** Update webhooks. */
          webhook_update?: boolean;
          /** Delete webhooks. */
          webhook_delete?: boolean;
          /** Read domain details. */
          domain_read?: boolean;
          /** Create domains. */
          domain_create?: boolean;
          /** Update domains. */
          domain_update?: boolean;
          /** Delete domains. */
          domain_delete?: boolean;
          /** Read list entries. */
          list_entry_read?: boolean;
          /** Create list entries. */
          list_entry_create?: boolean;
          /** Delete list entries. */
          list_entry_delete?: boolean;
          /** Read metrics. */
          metrics_read?: boolean;
          /** Read API keys. */
          api_key_read?: boolean;
          /** Create API keys. */
          api_key_create?: boolean;
          /** Delete API keys. */
          api_key_delete?: boolean;
          /** Read pods. */
          pod_read?: boolean;
          /** Create pods. */
          pod_create?: boolean;
          /** Delete pods. */
          pod_delete?: boolean;
          [key: string]: unknown;
        };
      };
      output: Record<string, unknown>;
    };
    /** Create an AgentMail domain. */
    "agent_mail.create_domain": {
      input: {
        /**
         * Domain name to add to AgentMail.
         * @minLength 1
         */
        domain: string;
        /** Whether bounce and complaint notifications are sent to inboxes. */
        feedback_enabled: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Create a draft in a specific AgentMail inbox. */
    "agent_mail.create_draft": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /** Email address or email address list. */
        reply_to?: string | Array<string>;
        /** Email address or email address list. */
        to?: string | Array<string>;
        /** Email address or email address list. */
        cc?: string | Array<string>;
        /** Email address or email address list. */
        bcc?: string | Array<string>;
        /**
         * Subject line of the draft.
         * @minLength 1
         */
        subject?: string;
        /** Plain text body of the draft. */
        text?: string;
        /** HTML body of the draft. */
        html?: string;
        /**
         * Attachments to include in the draft.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * File name of the attachment.
           * @minLength 1
           */
          filename?: string;
          /**
           * MIME type of the attachment.
           * @minLength 1
           */
          content_type?: string;
          /**
           * Content disposition of the attachment.
           * @minLength 1
           */
          content_disposition?: string;
          /**
           * Content ID of the attachment.
           * @minLength 1
           */
          content_id?: string;
          /**
           * Base64 encoded attachment content.
           * @minLength 1
           */
          content?: string;
          /**
           * URL where AgentMail can fetch the attachment.
           * @format uri
           */
          url?: string;
        }>;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        in_reply_to?: string;
        /**
         * Time at which AgentMail should schedule the draft to send.
         * @format date-time
         */
        send_at?: string;
        /**
         * Client-side identifier associated with the draft.
         * @minLength 1
         */
        client_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a new AgentMail inbox. */
    "agent_mail.create_inbox": {
      input: {
        /**
         * Inbox username. AgentMail generates one when omitted.
         * @minLength 1
         */
        username?: string;
        /**
         * Verified domain used by the inbox. Defaults to agentmail.to.
         * @minLength 1
         */
        domain?: string;
        /**
         * Display name shown for the inbox.
         * @minLength 1
         */
        display_name?: string;
        /**
         * Client-side identifier associated with the inbox.
         * @minLength 1
         */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id?: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * Email address.
         * @format email
         */
        email?: string;
        /** Display name shown for the inbox. */
        display_name?: string;
        /** Client identifier associated with the inbox. */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create an API key scoped to a specific AgentMail inbox. */
    "agent_mail.create_inbox_api_key": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Name of the API key.
         * @minLength 1
         */
        name?: string;
        /** Granular AgentMail API key permissions. */
        permissions?: {
          /** Read inbox details. */
          inbox_read?: boolean;
          /** Create new inboxes. */
          inbox_create?: boolean;
          /** Update inbox settings. */
          inbox_update?: boolean;
          /** Delete inboxes. */
          inbox_delete?: boolean;
          /** Read threads. */
          thread_read?: boolean;
          /** Delete threads. */
          thread_delete?: boolean;
          /** Read messages. */
          message_read?: boolean;
          /** Send messages. */
          message_send?: boolean;
          /** Update message labels. */
          message_update?: boolean;
          /** Access messages labeled spam. */
          label_spam_read?: boolean;
          /** Access messages labeled blocked. */
          label_blocked_read?: boolean;
          /** Access messages labeled trash. */
          label_trash_read?: boolean;
          /** Read drafts. */
          draft_read?: boolean;
          /** Create drafts. */
          draft_create?: boolean;
          /** Update drafts. */
          draft_update?: boolean;
          /** Delete drafts. */
          draft_delete?: boolean;
          /** Send drafts. */
          draft_send?: boolean;
          /** Read webhook configurations. */
          webhook_read?: boolean;
          /** Create webhooks. */
          webhook_create?: boolean;
          /** Update webhooks. */
          webhook_update?: boolean;
          /** Delete webhooks. */
          webhook_delete?: boolean;
          /** Read domain details. */
          domain_read?: boolean;
          /** Create domains. */
          domain_create?: boolean;
          /** Update domains. */
          domain_update?: boolean;
          /** Delete domains. */
          domain_delete?: boolean;
          /** Read list entries. */
          list_entry_read?: boolean;
          /** Create list entries. */
          list_entry_create?: boolean;
          /** Delete list entries. */
          list_entry_delete?: boolean;
          /** Read metrics. */
          metrics_read?: boolean;
          /** Read API keys. */
          api_key_read?: boolean;
          /** Create API keys. */
          api_key_create?: boolean;
          /** Delete API keys. */
          api_key_delete?: boolean;
          /** Read pods. */
          pod_read?: boolean;
          /** Create pods. */
          pod_create?: boolean;
          /** Delete pods. */
          pod_delete?: boolean;
          [key: string]: unknown;
        };
      };
      output: Record<string, unknown>;
    };
    /** Create an allow or block list entry scoped to a specific AgentMail inbox. */
    "agent_mail.create_inbox_list_entry": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
        /** Reason for adding the list entry. */
        reason?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a global AgentMail allow or block list entry. */
    "agent_mail.create_list_entry": {
      input: {
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
        /** Reason for adding the list entry. */
        reason?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create an AgentMail pod. */
    "agent_mail.create_pod": {
      input: {
        /**
         * Name of the pod.
         * @minLength 1
         */
        name?: string;
        /**
         * Client-side identifier associated with the pod.
         * @minLength 1
         */
        client_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create an API key scoped to a specific AgentMail pod. */
    "agent_mail.create_pod_api_key": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Name of the API key.
         * @minLength 1
         */
        name?: string;
        /** Granular AgentMail API key permissions. */
        permissions?: {
          /** Read inbox details. */
          inbox_read?: boolean;
          /** Create new inboxes. */
          inbox_create?: boolean;
          /** Update inbox settings. */
          inbox_update?: boolean;
          /** Delete inboxes. */
          inbox_delete?: boolean;
          /** Read threads. */
          thread_read?: boolean;
          /** Delete threads. */
          thread_delete?: boolean;
          /** Read messages. */
          message_read?: boolean;
          /** Send messages. */
          message_send?: boolean;
          /** Update message labels. */
          message_update?: boolean;
          /** Access messages labeled spam. */
          label_spam_read?: boolean;
          /** Access messages labeled blocked. */
          label_blocked_read?: boolean;
          /** Access messages labeled trash. */
          label_trash_read?: boolean;
          /** Read drafts. */
          draft_read?: boolean;
          /** Create drafts. */
          draft_create?: boolean;
          /** Update drafts. */
          draft_update?: boolean;
          /** Delete drafts. */
          draft_delete?: boolean;
          /** Send drafts. */
          draft_send?: boolean;
          /** Read webhook configurations. */
          webhook_read?: boolean;
          /** Create webhooks. */
          webhook_create?: boolean;
          /** Update webhooks. */
          webhook_update?: boolean;
          /** Delete webhooks. */
          webhook_delete?: boolean;
          /** Read domain details. */
          domain_read?: boolean;
          /** Create domains. */
          domain_create?: boolean;
          /** Update domains. */
          domain_update?: boolean;
          /** Delete domains. */
          domain_delete?: boolean;
          /** Read list entries. */
          list_entry_read?: boolean;
          /** Create list entries. */
          list_entry_create?: boolean;
          /** Delete list entries. */
          list_entry_delete?: boolean;
          /** Read metrics. */
          metrics_read?: boolean;
          /** Read API keys. */
          api_key_read?: boolean;
          /** Create API keys. */
          api_key_create?: boolean;
          /** Delete API keys. */
          api_key_delete?: boolean;
          /** Read pods. */
          pod_read?: boolean;
          /** Create pods. */
          pod_create?: boolean;
          /** Delete pods. */
          pod_delete?: boolean;
          [key: string]: unknown;
        };
      };
      output: Record<string, unknown>;
    };
    /** Create an AgentMail domain scoped to a pod. */
    "agent_mail.create_pod_domain": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Domain name to add to AgentMail.
         * @minLength 1
         */
        domain: string;
        /** Whether bounce and complaint notifications are sent to inboxes. */
        feedback_enabled: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Create an AgentMail inbox scoped to a pod. */
    "agent_mail.create_pod_inbox": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Inbox username. AgentMail generates one when omitted.
         * @minLength 1
         */
        username?: string;
        /**
         * Verified domain used by the inbox. Defaults to agentmail.to.
         * @minLength 1
         */
        domain?: string;
        /**
         * Display name shown for the inbox.
         * @minLength 1
         */
        display_name?: string;
        /**
         * Client-side identifier associated with the inbox.
         * @minLength 1
         */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id?: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * Email address.
         * @format email
         */
        email?: string;
        /** Display name shown for the inbox. */
        display_name?: string;
        /** Client identifier associated with the inbox. */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create an AgentMail allow or block list entry scoped to a pod. */
    "agent_mail.create_pod_list_entry": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
        /** Reason for adding the list entry. */
        reason?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create an AgentMail webhook. */
    "agent_mail.create_webhook": {
      input: {
        /**
         * Webhook endpoint URL.
         * @format uri
         */
        url: string;
        /**
         * Event types this webhook should receive.
         * @minItems 1
         */
        event_types: Array<"message.received" | "message.received.spam" | "message.received.blocked" | "message.received.unauthenticated" | "message.sent" | "message.delivered" | "message.bounced" | "message.complained" | "message.rejected" | "domain.verified">;
        /**
         * Pod IDs subscribed to the webhook.
         * @minItems 1
         */
        pod_ids?: Array<string>;
        /**
         * Inbox IDs subscribed to the webhook.
         * @minItems 1
         */
        inbox_ids?: Array<string>;
        /**
         * Client-side identifier associated with the webhook.
         * @minLength 1
         */
        client_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete an AgentMail API key. */
    "agent_mail.delete_api_key": {
      input: {
        /**
         * The AgentMail API key identifier.
         * @minLength 1
         */
        api_key_id: string;
      };
      output: {
        /** The api_key_id value deleted by AgentMail. */
        api_key_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail domain. */
    "agent_mail.delete_domain": {
      input: {
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: {
        /** The domain_id value deleted by AgentMail. */
        domain_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a draft from a specific AgentMail inbox. */
    "agent_mail.delete_draft": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
      };
      output: {
        /** The inbox_id value deleted by AgentMail. */
        inbox_id: string;
        /** The draft_id value deleted by AgentMail. */
        draft_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail inbox. */
    "agent_mail.delete_inbox": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
      };
      output: {
        /** The inbox_id value deleted by AgentMail. */
        inbox_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an API key scoped to a specific AgentMail inbox. */
    "agent_mail.delete_inbox_api_key": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail API key identifier.
         * @minLength 1
         */
        api_key_id: string;
      };
      output: {
        /** The inbox_id value deleted by AgentMail. */
        inbox_id: string;
        /** The api_key_id value deleted by AgentMail. */
        api_key_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an allow or block list entry scoped to a specific AgentMail inbox. */
    "agent_mail.delete_inbox_list_entry": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
      };
      output: {
        /** The inbox_id value deleted by AgentMail. */
        inbox_id: string;
        /** The direction value deleted by AgentMail. */
        direction: string;
        /** The type value deleted by AgentMail. */
        type: string;
        /** The entry value deleted by AgentMail. */
        entry: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a thread from a specific AgentMail inbox. */
    "agent_mail.delete_inbox_thread": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /** Whether the thread should be permanently deleted. */
        permanent?: boolean;
      };
      output: {
        /** The inbox_id value deleted by AgentMail. */
        inbox_id: string;
        /** The thread_id value deleted by AgentMail. */
        thread_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a global AgentMail allow or block list entry. */
    "agent_mail.delete_list_entry": {
      input: {
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
      };
      output: {
        /** The direction value deleted by AgentMail. */
        direction: string;
        /** The type value deleted by AgentMail. */
        type: string;
        /** The entry value deleted by AgentMail. */
        entry: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail pod. */
    "agent_mail.delete_pod": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
      };
      output: {
        /** The pod_id value deleted by AgentMail. */
        pod_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an API key scoped to a specific AgentMail pod. */
    "agent_mail.delete_pod_api_key": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail API key identifier.
         * @minLength 1
         */
        api_key_id: string;
      };
      output: {
        /** The pod_id value deleted by AgentMail. */
        pod_id: string;
        /** The api_key_id value deleted by AgentMail. */
        api_key_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail domain scoped to a pod. */
    "agent_mail.delete_pod_domain": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: {
        /** The pod_id value deleted by AgentMail. */
        pod_id: string;
        /** The domain_id value deleted by AgentMail. */
        domain_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail inbox scoped to a pod. */
    "agent_mail.delete_pod_inbox": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
      };
      output: {
        /** The pod_id value deleted by AgentMail. */
        pod_id: string;
        /** The inbox_id value deleted by AgentMail. */
        inbox_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail allow or block list entry scoped to a pod. */
    "agent_mail.delete_pod_list_entry": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
      };
      output: {
        /** The pod_id value deleted by AgentMail. */
        pod_id: string;
        /** The direction value deleted by AgentMail. */
        direction: string;
        /** The type value deleted by AgentMail. */
        type: string;
        /** The entry value deleted by AgentMail. */
        entry: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail thread scoped to a pod. */
    "agent_mail.delete_pod_thread": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /** Whether the thread should be permanently deleted. */
        permanent?: boolean;
      };
      output: {
        /** The pod_id value deleted by AgentMail. */
        pod_id: string;
        /** The thread_id value deleted by AgentMail. */
        thread_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail thread. */
    "agent_mail.delete_thread": {
      input: {
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /** Whether the thread should be permanently deleted. */
        permanent?: boolean;
      };
      output: {
        /** The thread_id value deleted by AgentMail. */
        thread_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an AgentMail webhook. */
    "agent_mail.delete_webhook": {
      input: {
        /**
         * The AgentMail webhook identifier.
         * @minLength 1
         */
        webhook_id: string;
      };
      output: {
        /** The webhook_id value deleted by AgentMail. */
        webhook_id: string;
        /** Whether AgentMail accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Forward a specific AgentMail message. */
    "agent_mail.forward_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /** Email address or email address list. */
        reply_to?: string | Array<string>;
        /** Email address or email address list. */
        to?: string | Array<string>;
        /** Email address or email address list. */
        cc?: string | Array<string>;
        /** Email address or email address list. */
        bcc?: string | Array<string>;
        /**
         * Subject line of the forwarded message.
         * @minLength 1
         */
        subject?: string;
        /** Plain text body of the forwarded message. */
        text?: string;
        /** HTML body of the forwarded message. */
        html?: string;
        /**
         * Attachments to include in the forwarded message.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * File name of the attachment.
           * @minLength 1
           */
          filename?: string;
          /**
           * MIME type of the attachment.
           * @minLength 1
           */
          content_type?: string;
          /**
           * Content disposition of the attachment.
           * @minLength 1
           */
          content_disposition?: string;
          /**
           * Content ID of the attachment.
           * @minLength 1
           */
          content_id?: string;
          /**
           * Base64 encoded attachment content.
           * @minLength 1
           */
          content?: string;
          /**
           * URL where AgentMail can fetch the attachment.
           * @format uri
           */
          url?: string;
        }>;
        /** Custom message headers to include in the outbound message. */
        headers?: Record<string, string>;
      };
      output: {
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
    };
    /** Get a single AgentMail domain. */
    "agent_mail.get_domain": {
      input: {
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the DNS zone file records needed for an AgentMail domain. */
    "agent_mail.get_domain_zone_file": {
      input: {
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a draft from a specific AgentMail inbox. */
    "agent_mail.get_draft": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata and download URL for an attachment on a specific AgentMail draft. */
    "agent_mail.get_draft_attachment": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get a single AgentMail draft across accessible inboxes. */
    "agent_mail.get_global_draft": {
      input: {
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata and download URL for an attachment on an AgentMail draft. */
    "agent_mail.get_global_draft_attachment": {
      input: {
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get a single AgentMail inbox. */
    "agent_mail.get_inbox": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
      };
      output: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id?: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * Email address.
         * @format email
         */
        email?: string;
        /** Display name shown for the inbox. */
        display_name?: string;
        /** Client identifier associated with the inbox. */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get an allow or block list entry scoped to a specific AgentMail inbox. */
    "agent_mail.get_inbox_list_entry": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single thread from a specific AgentMail inbox. */
    "agent_mail.get_inbox_thread": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata and download URL for an attachment in an AgentMail inbox thread. */
    "agent_mail.get_inbox_thread_attachment": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get a global AgentMail allow or block list entry. */
    "agent_mail.get_list_entry": {
      input: {
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single message from a specific AgentMail inbox. */
    "agent_mail.get_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id?: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id?: string;
        /**
         * Labels applied to the message.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /** Sender address of the message. */
        from?: string;
        /**
         * Recipient email addresses.
         * @minItems 1
         */
        to?: Array<string>;
        /**
         * CC recipient email addresses.
         * @minItems 1
         */
        cc?: Array<string>;
        /**
         * BCC recipient email addresses.
         * @minItems 1
         */
        bcc?: Array<string>;
        /** Subject line of the message. */
        subject?: string;
        /** Plain text body of the message. */
        text?: string;
        /** HTML body of the message. */
        html?: string;
        /** Short text preview of the message. */
        preview?: string;
        /** Attachments included in the message. */
        attachments?: Array<{
          /** Unique identifier of the attachment. */
          attachment_id: string;
          /** File name of the attachment. */
          filename?: string;
          /** Attachment size in bytes. */
          size: number;
          /** MIME type of the attachment. */
          content_type?: string;
          /** Content disposition of the attachment. */
          content_disposition?: string;
          /** Content ID of the attachment. */
          content_id?: string;
          /** Whether the attachment is inline. */
          inline?: boolean;
          /**
           * URL used to download the attachment.
           * @format uri
           */
          download_url?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          expires_at?: string;
        }>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get metadata and download URL for an attachment on a specific AgentMail message. */
    "agent_mail.get_message_attachment": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get the AgentMail organization available to the current API key. */
    "agent_mail.get_organization": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get a single AgentMail pod. */
    "agent_mail.get_pod": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single AgentMail domain scoped to a pod. */
    "agent_mail.get_pod_domain": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the DNS zone file records needed for an AgentMail pod domain. */
    "agent_mail.get_pod_domain_zone_file": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single AgentMail draft scoped to a pod. */
    "agent_mail.get_pod_draft": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata and download URL for an attachment on an AgentMail pod draft. */
    "agent_mail.get_pod_draft_attachment": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get a single AgentMail inbox scoped to a pod. */
    "agent_mail.get_pod_inbox": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
      };
      output: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id?: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * Email address.
         * @format email
         */
        email?: string;
        /** Display name shown for the inbox. */
        display_name?: string;
        /** Client identifier associated with the inbox. */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get an AgentMail allow or block list entry scoped to a pod. */
    "agent_mail.get_pod_list_entry": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * The email address or domain list entry.
         * @minLength 1
         */
        entry: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single AgentMail thread scoped to a pod. */
    "agent_mail.get_pod_thread": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata and download URL for an attachment in an AgentMail pod thread. */
    "agent_mail.get_pod_thread_attachment": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get a presigned download URL for the raw EML version of an AgentMail message. */
    "agent_mail.get_raw_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /** Size of the raw message in bytes. */
        size: number;
        /**
         * Presigned URL used to download the raw message.
         * @format uri
         */
        download_url: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at: string;
      };
    };
    /** Get a single AgentMail thread. */
    "agent_mail.get_thread": {
      input: {
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get metadata and download URL for an attachment in an AgentMail thread. */
    "agent_mail.get_thread_attachment": {
      input: {
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * The AgentMail attachment identifier.
         * @minLength 1
         */
        attachment_id: string;
      };
      output: {
        /** Unique identifier of the attachment. */
        attachment_id: string;
        /** File name of the attachment. */
        filename?: string;
        /** Attachment size in bytes. */
        size: number;
        /** MIME type of the attachment. */
        content_type?: string;
        /** Content disposition of the attachment. */
        content_disposition?: string;
        /** Content ID of the attachment. */
        content_id?: string;
        /** Whether the attachment is inline. */
        inline?: boolean;
        /**
         * URL used to download the attachment.
         * @format uri
         */
        download_url?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        expires_at?: string;
      };
    };
    /** Get a single AgentMail webhook. */
    "agent_mail.get_webhook": {
      input: {
        /**
         * The AgentMail webhook identifier.
         * @minLength 1
         */
        webhook_id: string;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail API keys. */
    "agent_mail.list_api_keys": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail domains. */
    "agent_mail.list_domains": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List drafts from a specific AgentMail inbox. */
    "agent_mail.list_drafts": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail drafts across accessible inboxes. */
    "agent_mail.list_global_drafts": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List API keys scoped to a specific AgentMail inbox. */
    "agent_mail.list_inbox_api_keys": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
      };
      output: Record<string, unknown>;
    };
    /** List events scoped to a specific AgentMail inbox. */
    "agent_mail.list_inbox_events": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List allow or block entries scoped to a specific AgentMail inbox. */
    "agent_mail.list_inbox_list_entries": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
      };
      output: Record<string, unknown>;
    };
    /** List threads in a specific AgentMail inbox. */
    "agent_mail.list_inbox_threads": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
        /** Whether spam threads should be included in the result. */
        include_spam?: boolean;
        /** Whether blocked threads should be included in the result. */
        include_blocked?: boolean;
        /** Whether unauthenticated threads should be included in the result. */
        include_unauthenticated?: boolean;
        /** Whether trash threads should be included in the result. */
        include_trash?: boolean;
        /**
         * Sender addresses used to filter threads.
         * @minItems 1
         */
        senders?: Array<string>;
        /**
         * Recipient addresses used to filter threads.
         * @minItems 1
         */
        recipients?: Array<string>;
        /**
         * Subject filters used by AgentMail.
         * @minItems 1
         */
        subject?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** List inboxes available to the current AgentMail API key. */
    "agent_mail.list_inboxes": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List global AgentMail allow or block entries. */
    "agent_mail.list_list_entries": {
      input: {
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
      };
      output: Record<string, unknown>;
    };
    /** List messages from a specific AgentMail inbox. */
    "agent_mail.list_messages": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
        /** Whether spam messages should be included in the result. */
        include_spam?: boolean;
        /** Whether blocked messages should be included in the result. */
        include_blocked?: boolean;
        /** Whether unauthenticated messages should be included in the result. */
        include_unauthenticated?: boolean;
        /** Whether trash messages should be included in the result. */
        include_trash?: boolean;
        /**
         * Sender address used to filter messages.
         * @minLength 1
         */
        from?: string;
        /**
         * Recipient address used to filter messages.
         * @minLength 1
         */
        to?: string;
        /**
         * Subject filters used by AgentMail.
         * @minItems 1
         */
        subject?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail API keys scoped to a pod. */
    "agent_mail.list_pod_api_keys": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail domains scoped to a pod. */
    "agent_mail.list_pod_domains": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail drafts scoped to a pod. */
    "agent_mail.list_pod_drafts": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail inboxes scoped to a pod. */
    "agent_mail.list_pod_inboxes": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail allow or block entries scoped to a pod. */
    "agent_mail.list_pod_list_entries": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /** Direction of the list entry. */
        direction: "send" | "receive" | "reply";
        /** Type of list entry. */
        type: "allow" | "block";
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail threads scoped to a pod. */
    "agent_mail.list_pod_threads": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
        /** Whether spam threads should be included in the result. */
        include_spam?: boolean;
        /** Whether blocked threads should be included in the result. */
        include_blocked?: boolean;
        /** Whether unauthenticated threads should be included in the result. */
        include_unauthenticated?: boolean;
        /** Whether trash threads should be included in the result. */
        include_trash?: boolean;
        /**
         * Sender addresses used to filter threads.
         * @minItems 1
         */
        senders?: Array<string>;
        /**
         * Recipient addresses used to filter threads.
         * @minItems 1
         */
        recipients?: Array<string>;
        /**
         * Subject filters used by AgentMail.
         * @minItems 1
         */
        subject?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail pods. */
    "agent_mail.list_pods": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail threads across accessible inboxes. */
    "agent_mail.list_threads": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
        /** Whether spam threads should be included in the result. */
        include_spam?: boolean;
        /** Whether blocked threads should be included in the result. */
        include_blocked?: boolean;
        /** Whether unauthenticated threads should be included in the result. */
        include_unauthenticated?: boolean;
        /** Whether trash threads should be included in the result. */
        include_trash?: boolean;
        /**
         * Sender addresses used to filter threads.
         * @minItems 1
         */
        senders?: Array<string>;
        /**
         * Recipient addresses used to filter threads.
         * @minItems 1
         */
        recipients?: Array<string>;
        /**
         * Subject filters used by AgentMail.
         * @minItems 1
         */
        subject?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** List AgentMail webhooks. */
    "agent_mail.list_webhooks": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /** Whether results should be sorted in ascending timestamp order. */
        ascending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Query AgentMail metrics scoped to a specific inbox. */
    "agent_mail.query_inbox_metrics": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Metric event types to query.
         * @minItems 1
         */
        event_types?: Array<"message.sent" | "message.delivered" | "message.bounced" | "message.delayed" | "message.rejected" | "message.complained" | "message.received">;
        /**
         * Start timestamp for the metrics query.
         * @format date-time
         */
        start?: string;
        /**
         * End timestamp for the metrics query.
         * @format date-time
         */
        end?: string;
        /**
         * Period in seconds for each metrics bucket.
         * @minimum 1
         */
        period?: number;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether metrics should be sorted in descending timestamp order. */
        descending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Query AgentMail metrics across accessible resources. */
    "agent_mail.query_metrics": {
      input: {
        /**
         * Metric event types to query.
         * @minItems 1
         */
        event_types?: Array<"message.sent" | "message.delivered" | "message.bounced" | "message.delayed" | "message.rejected" | "message.complained" | "message.received">;
        /**
         * Start timestamp for the metrics query.
         * @format date-time
         */
        start?: string;
        /**
         * End timestamp for the metrics query.
         * @format date-time
         */
        end?: string;
        /**
         * Period in seconds for each metrics bucket.
         * @minimum 1
         */
        period?: number;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether metrics should be sorted in descending timestamp order. */
        descending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Query AgentMail metrics scoped to a pod. */
    "agent_mail.query_pod_metrics": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Metric event types to query.
         * @minItems 1
         */
        event_types?: Array<"message.sent" | "message.delivered" | "message.bounced" | "message.delayed" | "message.rejected" | "message.complained" | "message.received">;
        /**
         * Start timestamp for the metrics query.
         * @format date-time
         */
        start?: string;
        /**
         * End timestamp for the metrics query.
         * @format date-time
         */
        end?: string;
        /**
         * Period in seconds for each metrics bucket.
         * @minimum 1
         */
        period?: number;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether metrics should be sorted in descending timestamp order. */
        descending?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Reply to all recipients of a specific AgentMail message. */
    "agent_mail.reply_all_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /** Email address or email address list. */
        reply_to?: string | Array<string>;
        /** Plain text body of the reply. */
        text?: string;
        /** HTML body of the reply. */
        html?: string;
        /**
         * Attachments to include in the reply.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * File name of the attachment.
           * @minLength 1
           */
          filename?: string;
          /**
           * MIME type of the attachment.
           * @minLength 1
           */
          content_type?: string;
          /**
           * Content disposition of the attachment.
           * @minLength 1
           */
          content_disposition?: string;
          /**
           * Content ID of the attachment.
           * @minLength 1
           */
          content_id?: string;
          /**
           * Base64 encoded attachment content.
           * @minLength 1
           */
          content?: string;
          /**
           * URL where AgentMail can fetch the attachment.
           * @format uri
           */
          url?: string;
        }>;
        /** Custom message headers to include in the outbound message. */
        headers?: Record<string, string>;
      };
      output: {
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
    };
    /** Reply to a specific AgentMail message. */
    "agent_mail.reply_to_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /** Email address or email address list. */
        reply_to?: string | Array<string>;
        /** Email address or email address list. */
        to?: string | Array<string>;
        /** Email address or email address list. */
        cc?: string | Array<string>;
        /** Email address or email address list. */
        bcc?: string | Array<string>;
        /** Whether to reply to all recipients of the original message. */
        reply_all?: boolean;
        /** Plain text body of the reply. */
        text?: string;
        /** HTML body of the reply. */
        html?: string;
        /**
         * Attachments to include in the reply.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * File name of the attachment.
           * @minLength 1
           */
          filename?: string;
          /**
           * MIME type of the attachment.
           * @minLength 1
           */
          content_type?: string;
          /**
           * Content disposition of the attachment.
           * @minLength 1
           */
          content_disposition?: string;
          /**
           * Content ID of the attachment.
           * @minLength 1
           */
          content_id?: string;
          /**
           * Base64 encoded attachment content.
           * @minLength 1
           */
          content?: string;
          /**
           * URL where AgentMail can fetch the attachment.
           * @format uri
           */
          url?: string;
        }>;
        /** Custom message headers to include in the outbound message. */
        headers?: Record<string, string>;
      };
      output: {
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
    };
    /** Search threads in a specific AgentMail inbox. */
    "agent_mail.search_inbox_threads": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Search query.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
      };
      output: Record<string, unknown>;
    };
    /** Search messages in a specific AgentMail inbox. */
    "agent_mail.search_messages": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Search query.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
      };
      output: Record<string, unknown>;
    };
    /** Search AgentMail threads scoped to a pod. */
    "agent_mail.search_pod_threads": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * Search query.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
      };
      output: Record<string, unknown>;
    };
    /** Search AgentMail threads across accessible inboxes. */
    "agent_mail.search_threads": {
      input: {
        /**
         * Search query.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination token for the next page of results.
         * @minLength 1
         */
        page_token?: string;
        /**
         * Only include records before this ISO 8601 timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include records after this ISO 8601 timestamp.
         * @format date-time
         */
        after?: string;
      };
      output: Record<string, unknown>;
    };
    /** Send a specific AgentMail draft. */
    "agent_mail.send_draft": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        add_labels?: Array<string>;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        remove_labels?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Send a message from a specific AgentMail inbox. */
    "agent_mail.send_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        labels?: Array<string>;
        /** Email address or email address list. */
        reply_to?: string | Array<string>;
        /** Email address or email address list. */
        to?: string | Array<string>;
        /** Email address or email address list. */
        cc?: string | Array<string>;
        /** Email address or email address list. */
        bcc?: string | Array<string>;
        /**
         * Subject line of the message.
         * @minLength 1
         */
        subject?: string;
        /** Plain text body of the message. */
        text?: string;
        /** HTML body of the message. */
        html?: string;
        /**
         * Attachments to include in the message.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * File name of the attachment.
           * @minLength 1
           */
          filename?: string;
          /**
           * MIME type of the attachment.
           * @minLength 1
           */
          content_type?: string;
          /**
           * Content disposition of the attachment.
           * @minLength 1
           */
          content_disposition?: string;
          /**
           * Content ID of the attachment.
           * @minLength 1
           */
          content_id?: string;
          /**
           * Base64 encoded attachment content.
           * @minLength 1
           */
          content?: string;
          /**
           * URL where AgentMail can fetch the attachment.
           * @format uri
           */
          url?: string;
        }>;
        /** Custom message headers to include in the outbound message. */
        headers?: Record<string, string>;
      };
      output: {
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
      };
    };
    /** Update an AgentMail domain. */
    "agent_mail.update_domain": {
      input: {
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
        /** Whether bounce and complaint notifications are sent to inboxes. */
        feedback_enabled: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Update a draft in a specific AgentMail inbox. */
    "agent_mail.update_draft": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail draft identifier.
         * @minLength 1
         */
        draft_id: string;
        /** Email address or email address list. */
        reply_to?: string | Array<string>;
        /** Email address or email address list. */
        to?: string | Array<string>;
        /** Email address or email address list. */
        cc?: string | Array<string>;
        /** Email address or email address list. */
        bcc?: string | Array<string>;
        /**
         * Subject line of the draft.
         * @minLength 1
         */
        subject?: string;
        /** Plain text body of the draft. */
        text?: string;
        /** HTML body of the draft. */
        html?: string;
        /**
         * Time at which AgentMail should schedule the draft to send.
         * @format date-time
         */
        send_at?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update an AgentMail inbox display name or metadata. */
    "agent_mail.update_inbox": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Display name shown for the inbox.
         * @minLength 1
         */
        display_name?: string;
        /** Metadata to merge into the inbox. Set a key to null to remove it, or send null to clear all metadata. */
        metadata?: Record<string, string | number | boolean | null> | null;
      };
      output: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id?: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * Email address.
         * @format email
         */
        email?: string;
        /** Display name shown for the inbox. */
        display_name?: string;
        /** Client identifier associated with the inbox. */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Update labels on a thread in a specific AgentMail inbox. */
    "agent_mail.update_inbox_thread": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        add_labels?: Array<string>;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        remove_labels?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Update labels on a message in a specific AgentMail inbox. */
    "agent_mail.update_message": {
      input: {
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * The AgentMail message identifier.
         * @minLength 1
         */
        message_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        add_labels?: Array<string>;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        remove_labels?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Update an AgentMail domain scoped to a pod. */
    "agent_mail.update_pod_domain": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
        /** Whether bounce and complaint notifications are sent to inboxes. */
        feedback_enabled: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Update an AgentMail inbox scoped to a pod. */
    "agent_mail.update_pod_inbox": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id: string;
        /**
         * Display name shown for the inbox.
         * @minLength 1
         */
        display_name?: string;
        /** Metadata to merge into the inbox. Set a key to null to remove it, or send null to clear all metadata. */
        metadata?: Record<string, string | number | boolean | null> | null;
      };
      output: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id?: string;
        /**
         * The AgentMail inbox identifier.
         * @minLength 1
         */
        inbox_id?: string;
        /**
         * Email address.
         * @format email
         */
        email?: string;
        /** Display name shown for the inbox. */
        display_name?: string;
        /** Client identifier associated with the inbox. */
        client_id?: string;
        /** Custom metadata attached to the inbox. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        updated_at?: string;
        /**
         * Timestamp in ISO 8601 format.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Update labels on an AgentMail thread scoped to a pod. */
    "agent_mail.update_pod_thread": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        add_labels?: Array<string>;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        remove_labels?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Update labels on an AgentMail thread. */
    "agent_mail.update_thread": {
      input: {
        /**
         * The AgentMail thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        add_labels?: Array<string>;
        /**
         * Labels used to filter or apply to a record.
         * @minItems 1
         */
        remove_labels?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Update an AgentMail webhook. */
    "agent_mail.update_webhook": {
      input: {
        /**
         * The AgentMail webhook identifier.
         * @minLength 1
         */
        webhook_id: string;
        /**
         * Inbox IDs to subscribe to the webhook.
         * @minItems 1
         */
        add_inbox_ids?: Array<string>;
        /**
         * Inbox IDs to unsubscribe from the webhook.
         * @minItems 1
         */
        remove_inbox_ids?: Array<string>;
        /**
         * Pod IDs to subscribe to the webhook.
         * @minItems 1
         */
        add_pod_ids?: Array<string>;
        /**
         * Pod IDs to unsubscribe from the webhook.
         * @minItems 1
         */
        remove_pod_ids?: Array<string>;
        /** Full replacement list of event types for the webhook. */
        event_types?: Array<"message.received" | "message.received.spam" | "message.received.blocked" | "message.received.unauthenticated" | "message.sent" | "message.delivered" | "message.bounced" | "message.complained" | "message.rejected" | "domain.verified">;
      };
      output: Record<string, unknown>;
    };
    /** Ask AgentMail to verify a domain's DNS records. */
    "agent_mail.verify_domain": {
      input: {
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Ask AgentMail to verify a pod domain's DNS records. */
    "agent_mail.verify_pod_domain": {
      input: {
        /**
         * The AgentMail pod identifier.
         * @minLength 1
         */
        pod_id: string;
        /**
         * The AgentMail domain identifier.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get AgentMail identity information for the current API key. */
    "agent_mail.who_am_i": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
  }
}
