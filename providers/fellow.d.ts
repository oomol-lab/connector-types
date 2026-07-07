import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a Fellow action item by marking it as won't do. */
    "fellow.archive_action_item": {
      input: {
        /**
         * The Fellow action item ID.
         * @minLength 1
         */
        action_item_id: string;
      };
      output: {
        /** A Fellow API record. The object keeps the upstream fields returned by Fellow. */
        action_item: Record<string, unknown>;
      };
    };
    /** Retrieve one Fellow action item by ID. */
    "fellow.get_action_item": {
      input: {
        /**
         * The Fellow action item ID.
         * @minLength 1
         */
        action_item_id: string;
      };
      output: {
        /** A Fellow API record. The object keeps the upstream fields returned by Fellow. */
        action_item: Record<string, unknown>;
      };
    };
    /** Get the Fellow user and workspace associated with the current API key. */
    "fellow.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Fellow user information. */
        user: {
          /**
           * The Fellow user ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Fellow user email address.
           * @minLength 1
           */
          email: string;
          /**
           * The Fellow user's full name.
           * @minLength 1
           */
          full_name: string;
          [key: string]: unknown;
        };
        /** Fellow workspace information. */
        workspace: {
          /**
           * The Fellow workspace ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Fellow workspace name.
           * @minLength 1
           */
          name: string;
          /**
           * The Fellow workspace subdomain.
           * @minLength 1
           */
          subdomain: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Fellow meeting note by ID. */
    "fellow.get_note": {
      input: {
        /**
         * The Fellow note ID.
         * @minLength 1
         */
        note_id: string;
      };
      output: {
        /** A Fellow API record. The object keeps the upstream fields returned by Fellow. */
        note: Record<string, unknown>;
      };
    };
    /** List Fellow action items with optional filters, ordering, and pagination. */
    "fellow.list_action_items": {
      input: {
        /** Cursor pagination options accepted by Fellow list endpoints. */
        pagination?: {
          /**
           * The pagination cursor returned by a previous Fellow response.
           * @minLength 1
           */
          cursor?: string | null;
          /**
           * The number of records to return per page. Fellow allows 1 to 50.
           * @minimum 1
           * @maximum 50
           */
          page_size?: number;
        } | null;
        /** Optional Fellow action item include options. */
        include?: Record<string, unknown> | null;
        /** The Fellow action item sort order. */
        order_by?: "created_at_desc" | "created_at_asc" | "due_date" | null;
        /** Filters accepted by Fellow when listing action items. */
        filters?: {
          /** Whether to return completed action items. */
          completed?: boolean | null;
          /** Whether to return archived action items. */
          archived?: boolean | null;
          /** Whether to return AI-detected action items. */
          ai_detected?: boolean | null;
          /** Whether to return action items whose AI suggestion was accepted. */
          ai_suggestion_accepted_by_user?: boolean | null;
          /** The Fellow action item scope filter. */
          scope?: "assigned_to_me" | "assigned_to_others" | "all" | null;
        } | null;
      };
      output: {
        /** Paginated Fellow action items. */
        action_items: {
          /** Pagination metadata returned by Fellow. */
          page_info: {
            /**
             * The cursor to use for the next page when available.
             * @minLength 1
             */
            cursor?: string | null;
            /** The page size used by Fellow for this response. */
            page_size: number;
            [key: string]: unknown;
          };
          /** Fellow action item records. */
          data: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Fellow meeting notes with optional filters, includes, and pagination. */
    "fellow.list_notes": {
      input: {
        /** Cursor pagination options accepted by Fellow list endpoints. */
        pagination?: {
          /**
           * The pagination cursor returned by a previous Fellow response.
           * @minLength 1
           */
          cursor?: string | null;
          /**
           * The number of records to return per page. Fellow allows 1 to 50.
           * @minimum 1
           * @maximum 50
           */
          page_size?: number;
        } | null;
        /** Optional expensive fields Fellow can include in note list responses. */
        include?: {
          /** Whether Fellow should include note event attendee emails. */
          event_attendees?: boolean;
          /** Whether Fellow should include note markdown content. */
          content_markdown?: boolean;
        } | null;
        /** Filters accepted by Fellow when listing notes. */
        filters?: {
          /**
           * Return notes for a specific event GUID.
           * @minLength 1
           */
          event_guid?: string | null;
          /**
           * Return notes created at or after this datetime.
           * @minLength 1
           */
          created_at_start?: string | null;
          /**
           * Return notes created at or before this datetime.
           * @minLength 1
           */
          created_at_end?: string | null;
          /**
           * Return notes updated at or after this datetime.
           * @minLength 1
           */
          updated_at_start?: string | null;
          /**
           * Return notes updated at or before this datetime.
           * @minLength 1
           */
          updated_at_end?: string | null;
          /**
           * Return notes from a specific Fellow channel ID.
           * @minLength 1
           */
          channel_id?: string | null;
          /**
           * Return notes matching this title filter.
           * @minLength 1
           */
          title?: string | null;
          /**
           * Event attendee emails used to filter Fellow notes.
           * @minItems 1
           */
          event_attendees?: Array<string> | null;
        } | null;
      };
      output: {
        /** Paginated Fellow notes. */
        notes: {
          /** Pagination metadata returned by Fellow. */
          page_info: {
            /**
             * The cursor to use for the next page when available.
             * @minLength 1
             */
            cursor?: string | null;
            /** The page size used by Fellow for this response. */
            page_size: number;
            [key: string]: unknown;
          };
          /** Fellow note records. */
          data: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Mark a Fellow action item complete or incomplete. */
    "fellow.mark_action_item_complete": {
      input: {
        /**
         * The Fellow action item ID.
         * @minLength 1
         */
        action_item_id: string;
        /** Whether the Fellow action item should be marked complete. */
        completed: boolean;
      };
      output: {
        /** A Fellow API record. The object keeps the upstream fields returned by Fellow. */
        action_item: Record<string, unknown>;
      };
    };
  }
}
