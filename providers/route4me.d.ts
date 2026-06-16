import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Route4Me optimization problem from parameters and destination addresses. */
    "route4me.create_optimization": {
      input: {
        /** The optimization parameters object accepted by Route4Me. */
        parameters: Record<string, unknown>;
        /**
         * The destination list to optimize.
         * @minItems 1
         */
        addresses: Array<{
          /**
           * The destination address or label accepted by Route4Me.
           * @minLength 1
           */
          address: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /**
         * The optimization problem identifier.
         * @minLength 1
         */
        optimizationProblemId: string;
        /** The Route4Me optimization state when present. */
        state: number | null;
        /** The route IDs returned inside the optimization response. */
        routeIds: Array<string>;
        /**
         * The number of routes included in the optimization response.
         * @minimum 0
         */
        routeCount: number;
        /**
         * The number of addresses included in the optimization response.
         * @minimum 0
         */
        addressCount: number;
        /** The raw optimization object returned by Route4Me. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one or more Route4Me optimization problems by ID. */
    "route4me.delete_optimizations": {
      input: {
        /**
         * The optimization problem IDs to delete.
         * @minItems 1
         */
        optimizationProblemIds: Array<string>;
      };
      output: {
        /** Whether Route4Me reported a successful deletion. */
        status: boolean;
        /**
         * The number of optimization problems removed by Route4Me.
         * @minimum 0
         */
        removed: number;
        /** The raw deletion response returned by Route4Me. */
        raw: Record<string, unknown>;
      };
    };
    /** List Route4Me optimization problems, or fetch one optimization by its ID. */
    "route4me.list_optimizations": {
      input: {
        /**
         * The optimization problem ID to fetch directly.
         * @minLength 1
         */
        optimizationProblemId?: string;
        /**
         * The optimization state filter documented by Route4Me.
         * @minimum 0
         * @maximum 6
         */
        state?: number;
        /**
         * The maximum number of optimization problems to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The result offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /** An ISO date string in YYYY-MM-DD format. */
        startDate?: string;
        /** An ISO date string in YYYY-MM-DD format. */
        endDate?: string;
      };
      output: {
        /** The optimization summaries returned by Route4Me. */
        optimizations: Array<{
          /**
           * The optimization problem identifier.
           * @minLength 1
           */
          optimizationProblemId: string;
          /** The Route4Me optimization state when present. */
          state: number | null;
          /** The route IDs returned inside the optimization response. */
          routeIds: Array<string>;
          /**
           * The number of routes included in the optimization response.
           * @minimum 0
           */
          routeCount: number;
          /**
           * The number of addresses included in the optimization response.
           * @minimum 0
           */
          addressCount: number;
          /** The raw optimization object returned by Route4Me. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
