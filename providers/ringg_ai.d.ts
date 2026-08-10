import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve detailed configuration for one Ringg AI assistant. */
    "ringg_ai.get_assistant": {
      input: {
        /**
         * The Ringg AI resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The requested Ringg AI assistant. */
        agents: {
          /**
           * The unique assistant identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve details for one Ringg AI call, optionally including analysis data. */
    "ringg_ai.get_call": {
      input: {
        /**
         * The unique identifier of the call to retrieve.
         * @minLength 1
         */
        id: string;
        /** Whether to include platform and client analysis data in the response. */
        send_analysis?: boolean;
      };
      output: {
        /**
         * The result status returned by Ringg AI.
         * @minLength 1
         */
        status: string;
        /** The requested call details. */
        data: {
          /**
           * The unique call identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve information about the Ringg AI workspace associated with the API key. */
    "ringg_ai.get_workspace": {
      input: Record<string, never>;
      output: {
        /** The authenticated Ringg AI workspace. */
        workspace_info: {
          /**
           * The unique workspace identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace display name.
           * @minLength 1
           */
          name: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Initiate one outbound call with a Ringg AI assistant and caller number. */
    "ringg_ai.initiate_call": {
      input: Record<string, unknown>;
      output: {
        /**
         * The result status returned by Ringg AI.
         * @minLength 1
         */
        status: string;
        /** The initiated call data. */
        data: {
          /**
           * The unique identifier of the initiated call.
           * @minLength 1
           */
          call_id: string;
          [key: string]: unknown;
        };
        /**
         * The result message returned by Ringg AI.
         * @minLength 1
         */
        message: string;
        [key: string]: unknown;
      };
    };
    /** List assistants available in the current Ringg AI workspace. */
    "ringg_ai.list_assistants": {
      input: {
        /**
         * The maximum number of items to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The assistant list data envelope. */
        data: {
          /** The assistants available in the workspace. */
          agents: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Ringg AI call history with pagination and optional filters. */
    "ringg_ai.list_calls": {
      input: {
        /**
         * The inclusive call start date in ISO 8601 format.
         * @format date-time
         */
        start_date?: string;
        /**
         * The inclusive call end date in ISO 8601 format.
         * @format date-time
         */
        end_date?: string;
        /**
         * The maximum number of items to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The assistant identifier used to filter calls.
         * @minLength 1
         */
        agent_id?: string;
        /** The call status used to filter results. */
        status?: "registered" | "ongoing" | "retry" | "error" | "completed" | "failed" | "cancelled" | "forwarded";
        /**
         * The campaign bulk list identifier used to filter calls.
         * @minLength 1
         */
        bulk_list_id?: string;
      };
      output: {
        /** The calls in the current result page. */
        calls: Array<Record<string, unknown>>;
        /** The maximum number of calls requested for this page. */
        limit: number;
        /** The number of calls skipped before this page. */
        offset: number;
        /** The number of calls returned in this page. */
        count: number;
        /** The total number of calls matching the filters. */
        total: number;
        [key: string]: unknown;
      };
    };
    /** List voices available for Ringg AI assistants, optionally filtered by language. */
    "ringg_ai.list_voices": {
      input: {
        /**
         * A language code or comma-separated language codes, such as en-US or en-US,hi-IN.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** The voices available to Ringg AI assistants. */
        voices: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List caller numbers available in the current Ringg AI workspace. */
    "ringg_ai.list_workspace_numbers": {
      input: {
        /**
         * The maximum number of items to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The caller numbers available in the workspace. */
        workspace_numbers: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
