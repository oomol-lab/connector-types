import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Modjo account by ID. */
    "modjo_ai.get_account": {
      input: {
        /**
         * The Modjo resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** Get one Modjo call by integer ID or UUID with optional relation expansion. */
    "modjo_ai.get_call": {
      input: {
        /**
         * The Modjo call ID. Modjo accepts a positive integer ID or UUID.
         * @minLength 1
         */
        id: string;
        /**
         * Relations to expand inline in a Modjo call response.
         * @minItems 1
         */
        expand?: Array<"contacts" | "deal" | "account" | "users">;
      };
      output: Record<string, unknown>;
    };
    /** Get AI-extracted next steps for a Modjo call. */
    "modjo_ai.get_call_next_steps": {
      input: {
        /**
         * The Modjo call ID. Modjo accepts a positive integer ID or UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
      };
    };
    /** Get the transcript for a Modjo call by integer ID or UUID. */
    "modjo_ai.get_call_transcript": {
      input: {
        /**
         * The Modjo call ID. Modjo accepts a positive integer ID or UUID.
         * @minLength 1
         */
        id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get one Modjo contact by ID. */
    "modjo_ai.get_contact": {
      input: {
        /**
         * The Modjo resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** Get the AI-generated summary for a Modjo deal. */
    "modjo_ai.get_deal_summary": {
      input: {
        /**
         * The Modjo resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** Get one Modjo team by ID. */
    "modjo_ai.get_team": {
      input: {
        /**
         * The Modjo resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** Get one Modjo user by ID. */
    "modjo_ai.get_user": {
      input: {
        /**
         * The Modjo resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** List Modjo accounts with optional pagination and name filtering. */
    "modjo_ai.list_accounts": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter by exact or partial resource name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List published notes for a Modjo call. */
    "modjo_ai.list_call_notes": {
      input: {
        /**
         * The Modjo call ID. Modjo accepts a positive integer ID or UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
      };
    };
    /** List AI-generated summaries for a Modjo call. */
    "modjo_ai.list_call_summaries": {
      input: {
        /**
         * The Modjo call ID. Modjo accepts a positive integer ID or UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
      };
    };
    /** List tags associated with a Modjo call. */
    "modjo_ai.list_call_tags": {
      input: {
        /**
         * The Modjo call ID. Modjo accepts a positive integer ID or UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
      };
    };
    /** List Modjo calls with optional pagination, relation expansion, and filters. */
    "modjo_ai.list_calls": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Relations to expand inline in a Modjo call response.
         * @minItems 1
         */
        expand?: Array<"contacts" | "deal" | "account" | "users">;
        /**
         * Filter calls starting from this ISO 8601 date-time.
         * @format date-time
         */
        from?: string;
        /**
         * Filter calls ending at this ISO 8601 date-time.
         * @format date-time
         */
        to?: string;
        /**
         * Filter calls by Modjo user ID.
         * @minimum 1
         */
        user_id?: number;
        /**
         * Filter calls by Modjo deal ID.
         * @minimum 1
         */
        deal_id?: number;
        /**
         * Filter calls by Modjo account ID.
         * @minimum 1
         */
        account_id?: number;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo contacts with optional pagination and name filtering. */
    "modjo_ai.list_contacts": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter by exact or partial resource name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo deals with optional pagination and CRM filters. */
    "modjo_ai.list_deals": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter deals by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter deals by Modjo account ID.
         * @minimum 1
         */
        account_id?: number;
        /** Filter deals by Modjo deal status. */
        status?: "Open" | "Closed won" | "Closed lost" | "Closed" | "Deleted";
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo tags with optional pagination. */
    "modjo_ai.list_tags": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo users that belong to a team. */
    "modjo_ai.list_team_members": {
      input: {
        /**
         * The Modjo team ID.
         * @minimum 1
         */
        id: number;
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo teams with optional pagination and name filtering. */
    "modjo_ai.list_teams": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter by exact or partial resource name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo topics with optional pagination. */
    "modjo_ai.list_topics": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
    /** List Modjo users with optional pagination and exact email filtering. */
    "modjo_ai.list_users": {
      input: {
        /**
         * Page number to request. Modjo pagination is 1-based.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items per page. Modjo allows values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter by exact user email address.
         * @format email
         */
        email?: string;
      };
      output: {
        /** The items returned by Modjo. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Modjo. */
        pagination: {
          /** Current page number returned by Modjo. */
          page: number;
          /** Number of items per page returned by Modjo. */
          size: number;
          /** Total number of items available in Modjo. */
          total: number;
        };
      };
    };
  }
}
