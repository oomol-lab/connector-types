import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Woodpecker campaign settings and content by campaign ID. */
    "woodpecker_co.get_campaign": {
      input: {
        /**
         * The Woodpecker campaign ID.
         * @exclusiveMinimum 0
         */
        campaign_id: number;
      };
      output: {
        /** A normalized Woodpecker campaign. */
        campaign: {
          /** The Woodpecker campaign ID. */
          id: number | null;
          /** The campaign name. */
          name: string | null;
          /** The campaign status. */
          status: string | null;
          /** The raw object returned by Woodpecker. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Woodpecker statistics for one campaign by campaign ID. */
    "woodpecker_co.get_campaign_statistics": {
      input: {
        /**
         * The Woodpecker campaign ID.
         * @exclusiveMinimum 0
         */
        campaign_id: number;
      };
      output: {
        /** The campaign statistics object returned by Woodpecker. */
        statistics: Record<string, unknown>;
        /** The raw object returned by Woodpecker. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Woodpecker mailbox by mailbox configuration ID. */
    "woodpecker_co.get_mailbox": {
      input: {
        /**
         * The Woodpecker mailbox configuration ID.
         * @exclusiveMinimum 0
         */
        mailbox_id: number;
      };
      output: {
        /** A normalized Woodpecker mailbox. */
        mailbox: {
          /** The Woodpecker mailbox configuration ID. */
          id: number | null;
          /** The mailbox configuration type, such as SMTP or IMAP. */
          type: string | null;
          /** The mailbox email address. */
          email: string | null;
          /** The email provider name returned by Woodpecker. */
          provider: string | null;
          /** The mailbox login returned by Woodpecker. */
          login: string | null;
          /** The raw Woodpecker mailbox details object. */
          details: Record<string, unknown>;
          /** The raw object returned by Woodpecker. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Woodpecker campaigns, optionally filtered by campaign status. */
    "woodpecker_co.list_campaigns": {
      input: {
        /** The campaign status to filter by. */
        status?: "RUNNING" | "DRAFT" | "STOPPED" | "PAUSED" | "EDITED" | "COMPLETED";
      };
      output: {
        /** The campaigns returned by Woodpecker. */
        campaigns: Array<{
          /** The Woodpecker campaign ID. */
          id: number | null;
          /** The campaign name. */
          name: string | null;
          /** The campaign status. */
          status: string | null;
          /** The raw object returned by Woodpecker. */
          raw: Record<string, unknown>;
        }>;
        /** The raw list payload returned by a Woodpecker v1 endpoint. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Woodpecker mailboxes connected to the authenticated account. */
    "woodpecker_co.list_mailboxes": {
      input: Record<string, never>;
      output: {
        /** The mailboxes returned by Woodpecker. */
        mailboxes: Array<{
          /** The Woodpecker mailbox configuration ID. */
          id: number | null;
          /** The mailbox configuration type, such as SMTP or IMAP. */
          type: string | null;
          /** The mailbox email address. */
          email: string | null;
          /** The email provider name returned by Woodpecker. */
          provider: string | null;
          /** The mailbox login returned by Woodpecker. */
          login: string | null;
          /** The raw Woodpecker mailbox details object. */
          details: Record<string, unknown>;
          /** The raw object returned by Woodpecker. */
          raw: Record<string, unknown>;
        }>;
        /** The raw mailbox objects returned by Woodpecker. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List prospects from the Woodpecker prospect database with optional filters. */
    "woodpecker_co.list_prospects": {
      input: {
        /**
         * The one-based results page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of prospects per page, up to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The prospects sort expression, such as +company.
         * @minLength 1
         */
        sort?: string;
        /**
         * The Woodpecker prospect IDs to request; the connector serializes them for the official id filter.
         * @minItems 1
         */
        ids?: Array<number>;
        /** The global prospect status to filter by. */
        status?: "ACTIVE" | "BOUNCED" | "REPLIED" | "BLACKLIST" | "INVALID";
        /** Whether to return prospects that have ever been contacted. */
        contacted?: boolean;
        /** The campaign interest level to filter prospects by. */
        interested?: "INTERESTED" | "MAYBE-LATER" | "NOT-INTERESTED" | "NOT-MARKED";
        /** The prospect activity filter. */
        activity?: "OPENED" | "NOT-OPENED" | "CLICKED" | "NOT-CLICKED";
        /**
         * The Woodpecker diff expression, such as activity>2026-01-15 08:00:00; URL encoding is handled by the connector.
         * @minLength 1
         */
        diff?: string;
      };
      output: {
        /** The prospects returned by Woodpecker. */
        prospects: Array<{
          /** The Woodpecker prospect ID. */
          id: number | null;
          /** The prospect email address. */
          email: string | null;
          /** The prospect global status. */
          status: string | null;
          /** The prospect first name when returned. */
          first_name: string | null;
          /** The prospect last name when returned. */
          last_name: string | null;
          /** The raw object returned by Woodpecker. */
          raw: Record<string, unknown>;
        }>;
        /** The raw list payload returned by a Woodpecker v1 endpoint. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List active Woodpecker users in the authenticated account. */
    "woodpecker_co.list_users": {
      input: {
        /**
         * The zero-based results page to request.
         * @minimum 0
         */
        page?: number;
        /** The user sort order supported by Woodpecker. */
        sort?: "+id" | "-id";
      };
      output: {
        /** The users returned by Woodpecker. */
        users: Array<{
          /** The Woodpecker user ID. */
          id: number | null;
          /** The user's full name. */
          name: string | null;
          /** The user's email address. */
          email: string | null;
          /** The user's role in the account. */
          role: string | null;
          /** The raw object returned by Woodpecker. */
          raw: Record<string, unknown>;
        }>;
        /** Woodpecker pagination metadata. */
        pagination: {
          /** The total number of matching elements. */
          total_elements: number | null;
          /** The total number of result pages. */
          total_pages: number | null;
          /** The current page number returned by Woodpecker. */
          current_page_number: number | null;
          /** The maximum number of items in the page. */
          page_size: number | null;
        };
        /** The raw object returned by Woodpecker. */
        raw: Record<string, unknown>;
      };
    };
  }
}
