import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a JSON-friendly Perdoo GraphQL query or mutation. */
    "perdoo.execute_graphql": {
      input: {
        /**
         * The GraphQL document to execute.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
        /**
         * The GraphQL operation name to execute.
         * @minLength 1
         */
        operationName?: string;
      };
      output: {
        /** The raw GraphQL data object returned by Perdoo. */
        data: unknown;
        /** A raw JSON object returned by Perdoo. */
        extensions?: Record<string, unknown>;
      };
    };
    /** Retrieve one Perdoo goal by UUID. */
    "perdoo.get_goal": {
      input: {
        /**
         * A Perdoo UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Perdoo goal. */
        goal: {
          /**
           * A Perdoo UUID.
           * @format uuid
           */
          id: string;
          /** The Perdoo goal type. */
          type: "STRATEGIC_PILLAR" | "KPI" | "OBJECTIVE" | "KEY_RESULT" | "INITIATIVE";
          /** The goal name. */
          name: string;
          /** The goal description. */
          description?: string | null;
          /** Whether the goal is private. */
          private: boolean;
          /** The goal's current value. */
          currentValue?: number | null;
          /** The Perdoo commit status. */
          status?: "NO_STATUS" | "OFF_TRACK" | "NEEDS_ATTENTION" | "ON_TRACK" | "ACCOMPLISHED" | null;
          /** The Perdoo objective stage. */
          stage?: "DRAFT" | "ACTIVE" | "CLOSED" | null;
          /** The goal progress percentage. */
          progress?: number | null;
          /** Whether the goal is archived. */
          archived: boolean;
          /** The metric unit configured for the goal. */
          metricUnit: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          startDate?: string | null;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          endDate?: string | null;
          /**
           * An ISO 8601 timestamp returned by Perdoo.
           * @format date-time
           */
          createdDate: string;
          /**
           * An ISO 8601 timestamp returned by Perdoo.
           * @format date-time
           */
          lastEditedDate: string;
          /** A compact Perdoo company. */
          company: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The company name. */
            name: string;
            [key: string]: unknown;
          };
          /** A compact parent Perdoo goal. */
          parent?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The goal name. */
            name: string;
            /** The Perdoo goal type. */
            type: "STRATEGIC_PILLAR" | "KPI" | "OBJECTIVE" | "KEY_RESULT" | "INITIATIVE";
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo user. */
          lead?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /**
             * The user's email address.
             * @format email
             */
            email: string;
            /** The user's first name. */
            firstName?: string | null;
            /** The user's last name. */
            lastName?: string | null;
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo timeframe. */
          timeframe?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The timeframe name. */
            name: string;
            /**
             * A date in YYYY-MM-DD format.
             * @format date
             */
            startDate: string;
            /**
             * A date in YYYY-MM-DD format.
             * @format date
             */
            endDate: string;
            [key: string]: unknown;
          } | null;
          /**
           * A Perdoo GraphQL pagination cursor.
           * @minLength 1
           */
          cursor?: string | null;
          /** A raw JSON object returned by Perdoo. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List Perdoo goals with the documented GraphQL goal filters and cursor pagination. */
    "perdoo.list_goals": {
      input: {
        /**
         * The number of goals to return after the cursor.
         * @exclusiveMinimum 0
         */
        first?: number;
        /**
         * A Perdoo GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /** The Perdoo goal type. */
        type?: "STRATEGIC_PILLAR" | "KPI" | "OBJECTIVE" | "KEY_RESULT" | "INITIATIVE";
        /** The Perdoo commit status. */
        status?: "NO_STATUS" | "OFF_TRACK" | "NEEDS_ATTENTION" | "ON_TRACK" | "ACCOMPLISHED";
        /** The Perdoo objective stage. */
        stage?: "DRAFT" | "ACTIVE" | "CLOSED";
        /** Whether to return archived goals. */
        archived?: boolean;
        /** Whether archived goals should be included. */
        includeArchived?: boolean;
        /**
         * The Perdoo ordering expression.
         * @minLength 1
         */
        orderBy?: string;
      };
      output: {
        /** Goals returned by Perdoo. */
        goals: Array<{
          /**
           * A Perdoo UUID.
           * @format uuid
           */
          id: string;
          /** The Perdoo goal type. */
          type: "STRATEGIC_PILLAR" | "KPI" | "OBJECTIVE" | "KEY_RESULT" | "INITIATIVE";
          /** The goal name. */
          name: string;
          /** The goal description. */
          description?: string | null;
          /** Whether the goal is private. */
          private: boolean;
          /** The goal's current value. */
          currentValue?: number | null;
          /** The Perdoo commit status. */
          status?: "NO_STATUS" | "OFF_TRACK" | "NEEDS_ATTENTION" | "ON_TRACK" | "ACCOMPLISHED" | null;
          /** The Perdoo objective stage. */
          stage?: "DRAFT" | "ACTIVE" | "CLOSED" | null;
          /** The goal progress percentage. */
          progress?: number | null;
          /** Whether the goal is archived. */
          archived: boolean;
          /** The metric unit configured for the goal. */
          metricUnit: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          startDate?: string | null;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          endDate?: string | null;
          /**
           * An ISO 8601 timestamp returned by Perdoo.
           * @format date-time
           */
          createdDate: string;
          /**
           * An ISO 8601 timestamp returned by Perdoo.
           * @format date-time
           */
          lastEditedDate: string;
          /** A compact Perdoo company. */
          company: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The company name. */
            name: string;
            [key: string]: unknown;
          };
          /** A compact parent Perdoo goal. */
          parent?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The goal name. */
            name: string;
            /** The Perdoo goal type. */
            type: "STRATEGIC_PILLAR" | "KPI" | "OBJECTIVE" | "KEY_RESULT" | "INITIATIVE";
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo user. */
          lead?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /**
             * The user's email address.
             * @format email
             */
            email: string;
            /** The user's first name. */
            firstName?: string | null;
            /** The user's last name. */
            lastName?: string | null;
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo timeframe. */
          timeframe?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The timeframe name. */
            name: string;
            /**
             * A date in YYYY-MM-DD format.
             * @format date
             */
            startDate: string;
            /**
             * A date in YYYY-MM-DD format.
             * @format date
             */
            endDate: string;
            [key: string]: unknown;
          } | null;
          /**
           * A Perdoo GraphQL pagination cursor.
           * @minLength 1
           */
          cursor?: string | null;
          /** A raw JSON object returned by Perdoo. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Perdoo cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Perdoo GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Perdoo GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
        /** The total number of matching goals. */
        totalCount: number;
        /** The number of returned edges. */
        edgeCount: number;
      };
    };
    /** Create or update a Perdoo progress update for exactly one goal, key result, or KPI. */
    "perdoo.upsert_commit": {
      input: {
        /**
         * A Perdoo UUID.
         * @format uuid
         */
        goalId?: string;
        /**
         * A Perdoo UUID.
         * @format uuid
         */
        keyResultId?: string;
        /**
         * A Perdoo UUID.
         * @format uuid
         */
        kpiId?: string;
        /**
         * A Perdoo UUID.
         * @format uuid
         */
        commitId?: string;
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        commitDate?: string;
        /**
         * The Perdoo commit type, such as MANUAL.
         * @minLength 1
         */
        commitType?: string;
        /** The progress value to submit. */
        value?: number;
        /** The Perdoo commit status. */
        status?: "NO_STATUS" | "OFF_TRACK" | "NEEDS_ATTENTION" | "ON_TRACK" | "ACCOMPLISHED";
        /**
         * The progress update description.
         * @minLength 1
         */
        description?: string;
        /**
         * A Perdoo UUID.
         * @format uuid
         */
        userId?: string;
      };
      output: {
        /** A Perdoo progress update. */
        commit: {
          /**
           * A Perdoo UUID.
           * @format uuid
           */
          id: string;
          /** The progress update description. */
          description?: string | null;
          /** The commit type returned by Perdoo. */
          commitType: string;
          /**
           * An ISO 8601 timestamp returned by Perdoo.
           * @format date-time
           */
          createdDate: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          commitDate: string;
          /** The submitted progress value. */
          value: number;
          /** The change in value produced by the commit. */
          delta: number;
          /** The previous value before the commit. */
          valueBefore: number;
          /** The Perdoo commit status. */
          status: "NO_STATUS" | "OFF_TRACK" | "NEEDS_ATTENTION" | "ON_TRACK" | "ACCOMPLISHED";
          /** The Perdoo commit status. */
          statusBefore: "NO_STATUS" | "OFF_TRACK" | "NEEDS_ATTENTION" | "ON_TRACK" | "ACCOMPLISHED";
          /** A compact Perdoo progress target. */
          keyResult?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The target name. */
            name: string;
            /** The target's current value. */
            currentValue?: number | null;
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo progress target. */
          kpi?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The target name. */
            name: string;
            /** The target's current value. */
            currentValue?: number | null;
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo goal progress target. */
          goal?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /** The target name. */
            name: string;
            /** The Perdoo goal type. */
            type: "STRATEGIC_PILLAR" | "KPI" | "OBJECTIVE" | "KEY_RESULT" | "INITIATIVE";
            /** The target's current value. */
            currentValue?: number | null;
            [key: string]: unknown;
          } | null;
          /** A compact Perdoo user. */
          user?: {
            /**
             * A Perdoo UUID.
             * @format uuid
             */
            id: string;
            /**
             * The user's email address.
             * @format email
             */
            email: string;
            /** The user's first name. */
            firstName?: string | null;
            /** The user's last name. */
            lastName?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Mutation validation errors returned by Perdoo. */
        errors: Array<{
          /** The field that failed validation. */
          field: string;
          /** Validation messages returned by Perdoo. */
          messages: Array<string>;
        }>;
      };
    };
  }
}
