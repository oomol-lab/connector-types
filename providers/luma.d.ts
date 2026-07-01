import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Luma calendar scoped to the current API key. */
    "luma.get_calendar": {
      input: Record<string, never>;
      output: {
        /** A Luma calendar. */
        calendar: {
          /** The Luma calendar ID. */
          id?: string;
          /** The calendar name. */
          name?: string;
          /** The calendar slug. */
          slug?: string | null;
          /** The calendar avatar URL. */
          avatar_url?: string | null;
          /** The public Luma calendar URL. */
          url?: string;
          /** The calendar description. */
          description?: string | null;
          /** Whether this is a personal calendar. */
          is_personal?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get full details for a Luma event the API key can manage. */
    "luma.get_event": {
      input: {
        /**
         * Luma event ID, usually starting with evt-.
         * @minLength 1
         */
        event_id: string;
      };
      output: {
        /** A Luma event. */
        event: {
          /** The event platform, such as luma. */
          platform?: string;
          /** The Luma event ID. */
          id?: string;
          /** The event creator's Luma user ID. */
          user_id?: string;
          /** The managing Luma calendar ID. */
          calendar_id?: string;
          /** The event start time. */
          start_at?: string;
          /** The event end time. */
          end_at?: string;
          /** The event creation time. */
          created_at?: string;
          /** The event timezone. */
          timezone?: string;
          /** The event name. */
          name?: string;
          /** The event description. */
          description?: string;
          /** The event description in Markdown. */
          description_md?: string;
          /** The public Luma event URL. */
          url?: string;
          /** The event visibility returned by Luma. */
          visibility?: string;
          /** The API key's access level for this event. */
          access?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for a Luma event guest. */
    "luma.get_event_guest": {
      input: {
        /**
         * Luma event ID, usually starting with evt-.
         * @minLength 1
         */
        event_id: string;
        /**
         * Guest identifier: guest ID, ticket key, guest key, or email address.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Luma event guest. */
        guest: {
          /** The Luma guest ID. */
          id?: string;
          /** The guest's Luma user ID. */
          user_id?: string;
          /**
           * The guest's email address.
           * @format email
           */
          user_email?: string;
          /** The guest's display name. */
          user_name?: string | null;
          /** The guest's first name. */
          user_first_name?: string | null;
          /** The guest's last name. */
          user_last_name?: string | null;
          /** The guest approval status. */
          approval_status?: string;
          /** The guest check-in QR code value. */
          check_in_qr_code?: string;
          /** When the guest was invited, or null. */
          invited_at?: string | null;
          /** When the guest registered, or null. */
          registered_at?: string | null;
          /** The guest phone number, or null. */
          phone_number?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the Luma user profile for the current API key. */
    "luma.get_self": {
      input: Record<string, never>;
      output: {
        /** A Luma user profile. */
        user: {
          /** The Luma user ID. */
          id?: string;
          /** The user's display name. */
          name?: string | null;
          /** The user's avatar URL. */
          avatar_url?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /** The user's first name. */
          first_name?: string | null;
          /** The user's last name. */
          last_name?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List events for the Luma calendar scoped to the current API key. */
    "luma.list_calendar_events": {
      input: {
        /**
         * ISO 8601 date-time accepted by Luma, for example 2022-10-19T03:27:13.673Z.
         * @minLength 1
         */
        before?: string;
        /**
         * ISO 8601 date-time accepted by Luma, for example 2022-10-19T03:27:13.673Z.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor token returned as next_cursor by a previous Luma page.
         * @minLength 1
         */
        pagination_cursor?: string;
        /**
         * Maximum number of records to return. Luma enforces its own maximum.
         * @minimum 1
         */
        pagination_limit?: number;
        /** Event platforms to include, such as luma or external. */
        platforms?: Array<"luma" | "external">;
        /** The Luma event sort column. */
        sort_column?: "start_at";
        /** The Luma sort direction. */
        sort_direction?: "asc" | "desc" | "asc nulls last" | "desc nulls last";
        /** The calendar submission status to include. */
        status?: "approved" | "pending";
        /** Access values to include. */
        access?: Array<"manage" | "view">;
      };
      output: {
        /** Events returned by Luma. */
        events: Array<{
          /** The event platform, such as luma. */
          platform?: string;
          /** The Luma event ID. */
          id?: string;
          /** The event creator's Luma user ID. */
          user_id?: string;
          /** The managing Luma calendar ID. */
          calendar_id?: string;
          /** The event start time. */
          start_at?: string;
          /** The event end time. */
          end_at?: string;
          /** The event creation time. */
          created_at?: string;
          /** The event timezone. */
          timezone?: string;
          /** The event name. */
          name?: string;
          /** The event description. */
          description?: string;
          /** The event description in Markdown. */
          description_md?: string;
          /** The public Luma event URL. */
          url?: string;
          /** The event visibility returned by Luma. */
          visibility?: string;
          /** The API key's access level for this event. */
          access?: string;
          [key: string]: unknown;
        }>;
        /** Whether Luma has more events to fetch. */
        hasMore: boolean;
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** List registered or invited guests for a Luma event. */
    "luma.list_event_guests": {
      input: {
        /**
         * Luma event ID, usually starting with evt-.
         * @minLength 1
         */
        event_id: string;
        /** Guest approval status to include. */
        approval_status?: "approved" | "session" | "pending_approval" | "invited" | "declined" | "waitlist";
        /**
         * Cursor token returned as next_cursor by a previous Luma page.
         * @minLength 1
         */
        pagination_cursor?: string;
        /**
         * Maximum number of records to return. Luma enforces its own maximum.
         * @minimum 1
         */
        pagination_limit?: number;
        /** The Luma guest sort column. */
        sort_column?: "name" | "email" | "created_at" | "registered_at" | "checked_in_at";
        /** The Luma sort direction. */
        sort_direction?: "asc" | "desc" | "asc nulls last" | "desc nulls last";
      };
      output: {
        /** Guests returned by Luma. */
        guests: Array<{
          /** The Luma guest ID. */
          id?: string;
          /** The guest's Luma user ID. */
          user_id?: string;
          /**
           * The guest's email address.
           * @format email
           */
          user_email?: string;
          /** The guest's display name. */
          user_name?: string | null;
          /** The guest's first name. */
          user_first_name?: string | null;
          /** The guest's last name. */
          user_last_name?: string | null;
          /** The guest approval status. */
          approval_status?: string;
          /** The guest check-in QR code value. */
          check_in_qr_code?: string;
          /** When the guest was invited, or null. */
          invited_at?: string | null;
          /** When the guest registered, or null. */
          registered_at?: string | null;
          /** The guest phone number, or null. */
          phone_number?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether Luma has more guests to fetch. */
        hasMore: boolean;
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
  }
}
