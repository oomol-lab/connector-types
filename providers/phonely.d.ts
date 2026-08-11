import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Phonely agent by its agent ID. */
    "phonely.get_agent": {
      input: {
        /**
         * The unique Phonely agent ID.
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /** A Phonely agent record. */
        agent: {
          /** The Phonely user ID that owns the agent. */
          uid?: string;
          /** The unique Phonely agent ID. */
          agentId?: string;
          /** The agent name. */
          name?: string;
          /** The agent country code when configured. */
          country?: string | null;
          /** The business phone number assigned to the agent when configured. */
          businessPhoneNumber?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the detailed call summary and transcript for a Phonely call. */
    "phonely.get_call": {
      input: {
        /**
         * The unique Phonely agent ID.
         * @minLength 1
         */
        agentId: string;
        /**
         * The unique Phonely call ID.
         * @minLength 1
         */
        callId: string;
      };
      output: {
        /** The call detail records returned by Phonely. */
        calls: Array<Record<string, unknown>>;
      };
    };
    /** List the Phonely agents accessible to the connected user. */
    "phonely.list_agents": {
      input: Record<string, never>;
      output: {
        /** The agents accessible to the connected user. */
        agents: Array<{
          /** The Phonely user ID that owns the agent. */
          uid?: string;
          /** The unique Phonely agent ID. */
          agentId?: string;
          /** The agent name. */
          name?: string;
          /** The agent country code when configured. */
          country?: string | null;
          /** The business phone number assigned to the agent when configured. */
          businessPhoneNumber?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List calls for a Phonely agent with pagination and optional filters. */
    "phonely.list_calls": {
      input: {
        /**
         * The unique Phonely agent ID.
         * @minLength 1
         */
        agentId: string;
        /**
         * The maximum number of calls to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching calls to skip.
         * @minimum 0
         */
        offset?: number;
        /** The customer phone number to match. */
        customerPhoneNumber?: string;
        /** The campaign ID to match. */
        campaignId?: string;
        /**
         * The call statuses to include.
         * @minItems 1
         */
        status?: Array<"COMPLETED" | "FAILED" | "ENDED" | "IN_PROGRESS">;
        /**
         * The customer sentiments to include.
         * @minItems 1
         */
        sentiment?: Array<"Positive" | "Negative" | "Neutral">;
        /**
         * The call types to include.
         * @minItems 1
         */
        callType?: Array<"inboundPhoneCall" | "outboundPhoneCall" | "webCall" | "dailyCall">;
        /**
         * The call outcomes to include.
         * @minItems 1
         */
        outcome?: Array<string>;
        /**
         * The call ended reasons to include.
         * @minItems 1
         */
        endedReason?: Array<string>;
        /**
         * The call modes to include.
         * @minItems 1
         */
        mode?: Array<string>;
        /**
         * Return calls starting at or after this ISO 8601 time.
         * @format date-time
         */
        startDate?: string;
        /**
         * Return calls starting at or before this ISO 8601 time.
         * @format date-time
         */
        endDate?: string;
        /**
         * The minimum call duration in seconds.
         * @minimum 0
         */
        minDuration?: number;
        /**
         * The maximum call duration in seconds.
         * @minimum 0
         */
        maxDuration?: number;
      };
      output: {
        /** The calls in this page. */
        items: Array<Record<string, unknown>>;
        /** The total number of calls matching the filters. */
        total: number;
        /** The page limit used by Phonely. */
        limit: number;
        /** The page offset used by Phonely. */
        offset: number;
      };
    };
  }
}
