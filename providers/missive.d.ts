import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Missive contact by ID. */
    "missive.get_contact": {
      input: {
        /**
         * The Missive contact ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** One Missive contact. */
        contact: {
          /** The Missive contact ID. */
          id?: string;
          /** Whether this contact is deleted. */
          deleted?: boolean;
          /**
           * The Unix timestamp when the contact was last modified.
           * @minimum 0
           */
          modified_at?: number;
          /** The contact book ID that contains this contact. */
          contact_book?: string;
          /** The contact's first name. */
          first_name?: string;
          /** The contact's last name. */
          last_name?: string;
          /** The contact's middle name. */
          middle_name?: string;
          /** The display filing name for this contact. */
          file_as?: string;
          /** Notes stored on this contact. */
          notes?: string;
          /** Whether the contact is starred. */
          starred?: boolean;
          /** The contact info entries returned by Missive. */
          infos?: Array<Record<string, unknown>>;
          /** The contact membership entries returned by Missive. */
          memberships?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Missive conversation by ID. */
    "missive.get_conversation": {
      input: {
        /**
         * The Missive conversation ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** One Missive conversation. */
        conversation: {
          /** The Missive conversation ID. */
          id?: string;
          /**
           * The Unix timestamp when the conversation was created.
           * @minimum 0
           */
          created_at?: number;
          /** The conversation subject. */
          subject?: string | null;
          /** The latest message subject. */
          latest_message_subject?: string | null;
          /** One Missive organization. */
          organization?: {
            /** The Missive organization ID. */
            id?: string;
            /** The organization name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The conversation color value. */
          color?: string | null;
          /** The message authors returned by Missive. */
          authors?: Array<Record<string, unknown>>;
          /** The external authors returned by Missive. */
          external_authors?: Array<Record<string, unknown>>;
          /** The users with access to the conversation. */
          users?: Array<Record<string, unknown>>;
          /** The users assigned to the conversation. */
          assignees?: Array<Record<string, unknown>>;
          /** The comma-separated assignee display names. */
          assignee_names?: string;
          /** The comma-separated assignee email addresses. */
          assignee_emails?: string;
          /** The shared labels on the conversation. */
          shared_labels?: Array<Record<string, unknown>>;
          /** The comma-separated shared label names. */
          shared_label_names?: string;
          /** One Missive team. */
          team?: {
            /** The Missive team ID. */
            id?: string;
            /** The team name. */
            name?: string;
            /** The organization ID that owns the team. */
            organization?: string;
            /** The active member user IDs on the team. */
            active_members?: Array<string>;
            /** The observer user IDs on the team. */
            observers?: Array<string>;
            [key: string]: unknown;
          } | null;
          /**
           * The number of messages in the conversation.
           * @minimum 0
           */
          messages_count?: number;
          /**
           * The number of drafts in the conversation.
           * @minimum 0
           */
          drafts_count?: number;
          /**
           * The number of scheduled messages in the conversation.
           * @minimum 0
           */
          send_later_messages_count?: number;
          /**
           * The number of attachments in the conversation.
           * @minimum 0
           */
          attachments_count?: number;
          /**
           * The number of tasks in the conversation.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * The number of completed tasks in the conversation.
           * @minimum 0
           */
          completed_tasks_count?: number;
          /**
           * The Unix timestamp of the conversation's most recent activity.
           * @minimum 0
           */
          last_activity_at?: number;
          /**
           * The Unix timestamp when the conversation was closed.
           * @minimum 0
           */
          closed_at?: number;
          /**
           * The URL that opens the conversation in the Missive web app.
           * @format uri
           */
          web_url?: string;
          /** The deep link that opens the conversation in the Missive app. */
          app_url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Missive contact books the authenticated user can access. */
    "missive.list_contact_books": {
      input: {
        /**
         * The maximum number of records to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset used to paginate records.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The contact books returned by Missive. */
        contact_books: Array<{
          /** The Missive contact book ID. */
          id?: string;
          /** The contact book name. */
          name?: string;
          /** The owning user ID. */
          user?: string;
          /** The organization ID for a shared contact book. */
          organization?: string | null;
          /** Whether the contact book is shared with the full organization. */
          share_with_organization?: boolean;
          /** The team ID when shared with a specific team. */
          share_with_team?: string | null;
          /** The user IDs the contact book is explicitly shared with. */
          share_with_users?: Array<string>;
          /** The contact book description. */
          description?: string | null;
          /** Whether an import is currently in progress. */
          importing?: boolean;
          /** The latest contact import error message. */
          import_error_text?: string | null;
          /**
           * The total rows in the current or latest import.
           * @minimum 0
           */
          import_rows_count?: number;
          /**
           * The rows processed so far in the current or latest import.
           * @minimum 0
           */
          import_processed_rows_count?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contacts from one Missive contact book with documented filters. */
    "missive.list_contacts": {
      input: {
        /**
         * The contact book ID to list contacts from.
         * @minLength 1
         */
        contact_book: string;
        /** The ordering mode for returned contacts. */
        order?: "last_name" | "last_modified";
        /**
         * The maximum number of contacts to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset used to paginate contacts.
         * @minimum 0
         */
        offset?: number;
        /**
         * Only return contacts modified or created since this Unix timestamp.
         * @minimum 0
         */
        modified_since?: number;
        /** Whether to include deleted contacts in modified_since results. */
        include_deleted?: boolean;
        /**
         * The search text used to filter contacts.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The contacts returned by Missive. */
        contacts: Array<{
          /** The Missive contact ID. */
          id?: string;
          /** Whether this contact is deleted. */
          deleted?: boolean;
          /**
           * The Unix timestamp when the contact was last modified.
           * @minimum 0
           */
          modified_at?: number;
          /** The contact book ID that contains this contact. */
          contact_book?: string;
          /** The contact's first name. */
          first_name?: string;
          /** The contact's last name. */
          last_name?: string;
          /** The contact's middle name. */
          middle_name?: string;
          /** The display filing name for this contact. */
          file_as?: string;
          /** Notes stored on this contact. */
          notes?: string;
          /** Whether the contact is starred. */
          starred?: boolean;
          /** The contact info entries returned by Missive. */
          infos?: Array<Record<string, unknown>>;
          /** The contact membership entries returned by Missive. */
          memberships?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Missive conversations using a required mailbox, team, or shared-label filter. */
    "missive.list_conversations": {
      input: {
        /**
         * The maximum number of conversations to return.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The last_activity_at Unix timestamp used to paginate conversations.
         * @minimum 0
         */
        until?: number;
        /** Whether to list conversations in the Inbox mailbox. */
        inbox?: boolean;
        /** Whether to list conversations in the All mailbox. */
        all?: boolean;
        /** Whether to list conversations assigned to the user. */
        assigned?: boolean;
        /** Whether to list conversations in Closed. */
        closed?: boolean;
        /** Whether to list conversations in Snoozed. */
        snoozed?: boolean;
        /** Whether to list conversations in Starred. */
        flagged?: boolean;
        /** Whether to list conversations in Trash. */
        trashed?: boolean;
        /** Whether to list conversations in Spam. */
        junked?: boolean;
        /** Whether to list conversations in Drafts. */
        drafts?: boolean;
        /**
         * The shared label ID to list conversations from.
         * @minLength 1
         */
        shared_label?: string;
        /**
         * The team ID to list conversations in the team's Inbox.
         * @minLength 1
         */
        team_inbox?: string;
        /**
         * The team ID to list conversations in the team's Closed mailbox.
         * @minLength 1
         */
        team_closed?: string;
        /**
         * The team ID to list conversations in the team's All mailbox.
         * @minLength 1
         */
        team_all?: string;
        /**
         * The organization ID used to filter conversations shared with that organization.
         * @minLength 1
         */
        organization?: string;
        /**
         * Filter conversations by a specific contact email address.
         * @minLength 1
         */
        email?: string;
        /**
         * Filter conversations by a specific contact email domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * Filter conversations by a contact organization or group ID.
         * @minLength 1
         */
        contact_organization?: string;
      };
      output: {
        /** The conversations returned by Missive. */
        conversations: Array<{
          /** The Missive conversation ID. */
          id?: string;
          /**
           * The Unix timestamp when the conversation was created.
           * @minimum 0
           */
          created_at?: number;
          /** The conversation subject. */
          subject?: string | null;
          /** The latest message subject. */
          latest_message_subject?: string | null;
          /** One Missive organization. */
          organization?: {
            /** The Missive organization ID. */
            id?: string;
            /** The organization name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The conversation color value. */
          color?: string | null;
          /** The message authors returned by Missive. */
          authors?: Array<Record<string, unknown>>;
          /** The external authors returned by Missive. */
          external_authors?: Array<Record<string, unknown>>;
          /** The users with access to the conversation. */
          users?: Array<Record<string, unknown>>;
          /** The users assigned to the conversation. */
          assignees?: Array<Record<string, unknown>>;
          /** The comma-separated assignee display names. */
          assignee_names?: string;
          /** The comma-separated assignee email addresses. */
          assignee_emails?: string;
          /** The shared labels on the conversation. */
          shared_labels?: Array<Record<string, unknown>>;
          /** The comma-separated shared label names. */
          shared_label_names?: string;
          /** One Missive team. */
          team?: {
            /** The Missive team ID. */
            id?: string;
            /** The team name. */
            name?: string;
            /** The organization ID that owns the team. */
            organization?: string;
            /** The active member user IDs on the team. */
            active_members?: Array<string>;
            /** The observer user IDs on the team. */
            observers?: Array<string>;
            [key: string]: unknown;
          } | null;
          /**
           * The number of messages in the conversation.
           * @minimum 0
           */
          messages_count?: number;
          /**
           * The number of drafts in the conversation.
           * @minimum 0
           */
          drafts_count?: number;
          /**
           * The number of scheduled messages in the conversation.
           * @minimum 0
           */
          send_later_messages_count?: number;
          /**
           * The number of attachments in the conversation.
           * @minimum 0
           */
          attachments_count?: number;
          /**
           * The number of tasks in the conversation.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * The number of completed tasks in the conversation.
           * @minimum 0
           */
          completed_tasks_count?: number;
          /**
           * The Unix timestamp of the conversation's most recent activity.
           * @minimum 0
           */
          last_activity_at?: number;
          /**
           * The Unix timestamp when the conversation was closed.
           * @minimum 0
           */
          closed_at?: number;
          /**
           * The URL that opens the conversation in the Missive web app.
           * @format uri
           */
          web_url?: string;
          /** The deep link that opens the conversation in the Missive app. */
          app_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List organizations the authenticated Missive API token owner belongs to. */
    "missive.list_organizations": {
      input: {
        /**
         * The maximum number of records to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset used to paginate records.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The organizations returned by Missive. */
        organizations: Array<{
          /** The Missive organization ID. */
          id?: string;
          /** The organization name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List teams visible to the authenticated Missive API token. */
    "missive.list_teams": {
      input: Record<string, never>;
      output: {
        /** The teams returned by Missive. */
        teams: Array<{
          /** The Missive team ID. */
          id?: string;
          /** The team name. */
          name?: string;
          /** The organization ID that owns the team. */
          organization?: string;
          /** The active member user IDs on the team. */
          active_members?: Array<string>;
          /** The observer user IDs on the team. */
          observers?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List users visible to the authenticated Missive API token. */
    "missive.list_users": {
      input: Record<string, never>;
      output: {
        /** The users returned by Missive. */
        users: Array<{
          /** The Missive user ID. */
          id?: string;
          /** The user's email address. */
          email?: string;
          /** The user's display name. */
          display_name?: string;
          /** The user's first name. */
          first_name?: string;
          /** The user's last name. */
          last_name?: string;
          /** The URL of the user's avatar image. */
          avatar_url?: string;
          /** Whether this user is the authenticated token owner. */
          me?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
