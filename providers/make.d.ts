import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Activate a Make scenario. */
    "make.activate_scenario": {
      input: {
        /**
         * The Make scenario ID.
         * @exclusiveMinimum 0
         */
        scenarioId: number;
      };
      output: {
        /** Whether Make accepted the operation. */
        success: boolean;
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** Deactivate a Make scenario. */
    "make.deactivate_scenario": {
      input: {
        /**
         * The Make scenario ID.
         * @exclusiveMinimum 0
         */
        scenarioId: number;
      };
      output: {
        /** Whether Make accepted the operation. */
        success: boolean;
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current Make credential authorization details and scopes. */
    "make.get_current_authorization": {
      input: Record<string, never>;
      output: {
        /** Make authorization information. */
        authorization: {
          /** The scopes granted to the Make credential. */
          scope?: Array<string>;
          /** The authentication method used by Make. */
          authUsed?: string;
          [key: string]: unknown;
        };
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the authenticated Make user profile. */
    "make.get_current_user": {
      input: {
        /** Whether pending organization invitations are included. */
        includeInvitedOrg?: boolean;
        /** Make user columns to include in the response. */
        cols?: Array<string>;
      };
      output: {
        /** A Make user profile. */
        user: {
          /**
           * The Make resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Make user name. */
          name?: string;
          /**
           * The Make user email address.
           * @format email
           */
          email?: string;
          /** The Make user language. */
          language?: string;
          /**
           * The Make user avatar URL.
           * @format uri
           */
          avatar?: string;
          [key: string]: unknown;
        };
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for one Make scenario. */
    "make.get_scenario": {
      input: {
        /**
         * The Make scenario ID.
         * @exclusiveMinimum 0
         */
        scenarioId: number;
        /** Make scenario columns to include in the response. */
        cols?: Array<string>;
      };
      output: {
        /** A Make scenario. */
        scenario: {
          /**
           * The Make scenario ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Make scenario name. */
          name?: string;
          /**
           * The Make team ID.
           * @exclusiveMinimum 0
           */
          teamId?: number;
          /**
           * The Make organization ID.
           * @exclusiveMinimum 0
           */
          organizationId?: number;
          /** The Make scenario description. */
          description?: string;
          /**
           * The Make resource ID.
           * @exclusiveMinimum 0
           */
          folderId?: number;
          /** Whether the Make scenario is active. */
          isActive?: boolean;
          /** Whether the Make scenario is paused. */
          isPaused?: boolean;
          /** Whether the Make scenario is locked. */
          islocked?: boolean;
          /** Whether the Make scenario is invalid. */
          isinvalid?: boolean;
          /** The last edit timestamp returned by Make. */
          lastEdit?: string;
          /** The creation timestamp returned by Make. */
          created?: string;
          /** The next execution timestamp returned by Make. */
          nextExec?: string;
          /** The Make scenario type. */
          type?: "scenario" | "tool";
          [key: string]: unknown;
        };
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get daily usage for a Make scenario over the previous 30 days. */
    "make.get_scenario_usage": {
      input: {
        /**
         * The Make scenario ID.
         * @exclusiveMinimum 0
         */
        scenarioId: number;
        /** Whether usage days are calculated in the organization timezone. */
        organizationTimezone?: boolean;
      };
      output: {
        /** Daily Make scenario usage records. */
        usage: Array<Record<string, unknown>>;
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Make scenarios for one team or organization. */
    "make.list_scenarios": {
      input: {
        /**
         * The Make team ID.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * The Make organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Specific Make scenario IDs to retrieve.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * The Make resource ID.
         * @exclusiveMinimum 0
         */
        folderId?: number;
        /** Whether to return only active or inactive scenarios. */
        isActive?: boolean;
        /** Whether to return only scenario concepts. */
        concept?: boolean;
        /** The Make scenario type. */
        type?: "scenario" | "tool";
        /** Make scenario columns to include in the response. */
        cols?: Array<string>;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Make scenario field to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The Make sorting direction. */
        sortDir?: "asc" | "desc";
      };
      output: {
        /** The Make scenarios returned by the API. */
        scenarios: Array<{
          /**
           * The Make scenario ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Make scenario name. */
          name?: string;
          /**
           * The Make team ID.
           * @exclusiveMinimum 0
           */
          teamId?: number;
          /**
           * The Make organization ID.
           * @exclusiveMinimum 0
           */
          organizationId?: number;
          /** The Make scenario description. */
          description?: string;
          /**
           * The Make resource ID.
           * @exclusiveMinimum 0
           */
          folderId?: number;
          /** Whether the Make scenario is active. */
          isActive?: boolean;
          /** Whether the Make scenario is paused. */
          isPaused?: boolean;
          /** Whether the Make scenario is locked. */
          islocked?: boolean;
          /** Whether the Make scenario is invalid. */
          isinvalid?: boolean;
          /** The last edit timestamp returned by Make. */
          lastEdit?: string;
          /** The creation timestamp returned by Make. */
          created?: string;
          /** The next execution timestamp returned by Make. */
          nextExec?: string;
          /** The Make scenario type. */
          type?: "scenario" | "tool";
          [key: string]: unknown;
        }>;
        /** Make pagination metadata. */
        pg?: {
          /** The cursor for the last page when returned by Make. */
          last?: string;
          /** Whether Make reports a last-page cursor. */
          showLast?: boolean;
          /** The active sort field returned by Make. */
          sortBy?: string;
          /** The active sort direction returned by Make. */
          sortDir?: string;
          /** The result limit returned by Make. */
          limit?: number;
          /** The result offset returned by Make. */
          offset?: number;
          [key: string]: unknown;
        };
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Make teams visible to the authenticated credential. */
    "make.list_teams": {
      input: {
        /**
         * The Make organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Make team field to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The Make sorting direction. */
        sortDir?: "asc" | "desc";
      };
      output: {
        /** The Make teams returned by the API. */
        teams: Array<{
          /**
           * The Make resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Make team name. */
          name?: string;
          /**
           * The Make organization ID.
           * @exclusiveMinimum 0
           */
          organizationId?: number;
          [key: string]: unknown;
        }>;
        /** Make pagination metadata. */
        pg?: {
          /** The cursor for the last page when returned by Make. */
          last?: string;
          /** Whether Make reports a last-page cursor. */
          showLast?: boolean;
          /** The active sort field returned by Make. */
          sortBy?: string;
          /** The active sort direction returned by Make. */
          sortDir?: string;
          /** The result limit returned by Make. */
          limit?: number;
          /** The result offset returned by Make. */
          offset?: number;
          [key: string]: unknown;
        };
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
    /** Run a Make scenario once on demand. */
    "make.run_scenario_once": {
      input: {
        /**
         * The Make scenario ID.
         * @exclusiveMinimum 0
         */
        scenarioId: number;
        /** Scenario input values keyed by the Make scenario input name. */
        data?: Record<string, unknown>;
        /** Whether Make should wait for the scenario execution to finish. */
        responsive?: boolean;
        /**
         * The callback URL Make should call when the scenario execution finishes.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /** The Make scenario execution ID. */
        executionId?: string;
        /** The Make scenario execution status when returned by Make. */
        status?: string;
        /** An object returned by the Make API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
