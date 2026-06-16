import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Loomio poll by numeric ID or poll key. */
    "loomio.get_poll": {
      input: {
        /**
         * Numeric poll ID or poll key to retrieve.
         * @minLength 1
         */
        pollIdOrKey: string;
      };
      output: {
        /** Detailed Loomio poll payload returned by the show endpoint. */
        poll: {
          /** Unique poll identifier returned by Loomio. */
          id: number;
          /** Poll key returned by Loomio when available. */
          key?: string | null;
          /** Poll title returned by Loomio when available. */
          title?: string | null;
          /** Poll type returned by Loomio when available. */
          pollType?: string | null;
          /** Poll status returned by Loomio when available. */
          status?: string | null;
          /** Poll details body returned by Loomio when available. */
          details?: string | null;
          /** Group identifier attached to the poll when available. */
          groupId?: number | null;
          /** Author identifier attached to the poll when available. */
          authorId?: number | null;
          /** Discussion identifier attached to the poll when available. */
          discussionId?: number | null;
          /** Poll creation timestamp returned by Loomio when available. */
          createdAt?: string | null;
          /** Poll closing timestamp returned by Loomio when available. */
          closingAt?: string | null;
          /** Poll closed timestamp returned by Loomio when available. */
          closedAt?: string | null;
          /** Current outcome payload returned by Loomio when available. */
          currentOutcome?: Record<string, unknown> | null;
          /** Poll options returned by Loomio. */
          options?: Array<{
            /** Unique option identifier returned by Loomio. */
            id: number;
            /** Display name of the poll option when Loomio returns it. */
            name?: string | null;
            /** Display order priority of the poll option when Loomio returns it. */
            priority?: number | null;
            /** Icon identifier returned by Loomio for the poll option. */
            icon?: string | null;
            /** Color value returned by Loomio for the poll option. */
            color?: string | null;
            /** Prompt text returned by Loomio for the poll option. */
            prompt?: string | null;
            /** Meaning text returned by Loomio for the poll option. */
            meaning?: string | null;
            /** Raw poll option payload returned by Loomio. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Raw poll payload returned by Loomio. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Loomio polls in one group with optional status filtering and offset pagination. */
    "loomio.list_polls": {
      input: {
        /**
         * Group identifier to list polls from.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /** Poll status filter accepted by Loomio. */
        status?: "active" | "closed" | "all";
        /**
         * Maximum number of polls to return.
         * @maximum 200
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based offset for poll pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Polls returned by Loomio. */
        polls: Array<{
          /** Unique poll identifier returned by Loomio. */
          id: number;
          /** Poll key returned by Loomio when available. */
          key?: string | null;
          /** Poll title returned by Loomio when available. */
          title?: string | null;
          /** Poll type returned by Loomio when available. */
          pollType?: string | null;
          /** Group identifier attached to the poll when available. */
          groupId?: number | null;
          /** Author identifier attached to the poll when available. */
          authorId?: number | null;
          /** Discussion identifier attached to the poll when available. */
          discussionId?: number | null;
          /** Poll creation timestamp returned by Loomio when available. */
          createdAt?: string | null;
          /** Poll closing timestamp returned by Loomio when available. */
          closingAt?: string | null;
          /** Poll closed timestamp returned by Loomio when available. */
          closedAt?: string | null;
          /** Current outcome payload returned by Loomio when available. */
          currentOutcome?: Record<string, unknown> | null;
          /** Raw poll payload returned by Loomio. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * Total number of polls matching the filter.
         * @minimum 0
         */
        total: number;
        /** Raw pagination metadata returned by Loomio. */
        rawMeta: Record<string, unknown> | null;
      };
    };
  }
}
