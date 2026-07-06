import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Dynatrace monitored entity by entity ID. */
    "dynatrace.get_entity": {
      input: {
        /**
         * The Dynatrace entity ID to read.
         * @minLength 1
         */
        entityId: string;
        /**
         * Comma-separated Dynatrace fields selector, such as +properties or +evidenceDetails.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** A normalized Dynatrace monitored entity. */
        entity: {
          /** The Dynatrace entity identifier. */
          entityId: string | null;
          /** The monitored entity display name. */
          displayName: string | null;
          /** The monitored entity type. */
          type: string | null;
          /** The raw object returned by Dynatrace. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by Dynatrace. */
        raw: Record<string, unknown>;
      };
    };
    /** List Dynatrace monitored entities with optional selector, fields, and pagination. */
    "dynatrace.list_entities": {
      input: {
        /**
         * Dynatrace entitySelector expression used to filter monitored entities.
         * @minLength 1
         */
        entitySelector?: string;
        /**
         * The cursor from a previous Dynatrace response used to fetch the next page.
         * @minLength 1
         */
        nextPageKey?: string;
        /**
         * The number of Dynatrace results to return in one page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * Comma-separated Dynatrace fields selector, such as +properties or +evidenceDetails.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Dynatrace monitored entities returned for the request. */
        entities: Array<{
          /** The Dynatrace entity identifier. */
          entityId: string | null;
          /** The monitored entity display name. */
          displayName: string | null;
          /** The monitored entity type. */
          type: string | null;
          /** The raw object returned by Dynatrace. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of matching Dynatrace entities. */
        totalCount: number | null;
        /** The page size returned by Dynatrace. */
        pageSize: number | null;
        /** The cursor for the next page when available. */
        nextPageKey: string | null;
        /** The raw object returned by Dynatrace. */
        raw: Record<string, unknown>;
      };
    };
    /** List Dynatrace Problems API v2 problems with optional selectors and pagination. */
    "dynatrace.list_problems": {
      input: {
        /**
         * Dynatrace problemSelector expression used to filter problems.
         * @minLength 1
         */
        problemSelector?: string;
        /**
         * Dynatrace entitySelector expression used to filter monitored entities.
         * @minLength 1
         */
        entitySelector?: string;
        /**
         * The cursor from a previous Dynatrace response used to fetch the next page.
         * @minLength 1
         */
        nextPageKey?: string;
        /**
         * The number of Dynatrace results to return in one page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * Dynatrace timeframe expression such as now-2h or an ISO-8601 timestamp.
         * @minLength 1
         */
        from?: string;
        /**
         * Dynatrace timeframe expression such as now-2h or an ISO-8601 timestamp.
         * @minLength 1
         */
        to?: string;
        /**
         * Comma-separated Dynatrace fields selector, such as +properties or +evidenceDetails.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Dynatrace problems returned for the request. */
        problems: Array<{
          /** The Dynatrace problem identifier. */
          problemId: string | null;
          /** The user-facing Dynatrace problem display identifier. */
          displayId: string | null;
          /** The problem title returned by Dynatrace. */
          title: string | null;
          /** The problem status returned by Dynatrace. */
          status: string | null;
          /** The problem severity level returned by Dynatrace. */
          severityLevel: string | null;
          /** The raw object returned by Dynatrace. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of matching Dynatrace problems. */
        totalCount: number | null;
        /** The page size returned by Dynatrace. */
        pageSize: number | null;
        /** The cursor for the next page when available. */
        nextPageKey: string | null;
        /** The raw object returned by Dynatrace. */
        raw: Record<string, unknown>;
      };
    };
  }
}
