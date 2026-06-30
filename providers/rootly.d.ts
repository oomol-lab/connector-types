import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Rootly user associated with the API key. */
    "rootly.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Rootly JSON:API resource. */
        resource: {
          /**
           * The Rootly resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Rootly resource type.
           * @minLength 1
           */
          type?: string;
          /** The Rootly resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Rootly resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Rootly JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** The raw Rootly JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Rootly incident by UUID or slug. */
    "rootly.get_incident": {
      input: {
        /**
         * The Rootly resource UUID or slug.
         * @minLength 1
         */
        id: string;
        /** Related Rootly resources to include in the JSON:API response. */
        include?: Array<string>;
      };
      output: {
        /** A Rootly JSON:API resource. */
        resource: {
          /**
           * The Rootly resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Rootly resource type.
           * @minLength 1
           */
          type?: string;
          /** The Rootly resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Rootly resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Rootly JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** The raw Rootly JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rootly incidents with common filters and pagination. */
    "rootly.list_incidents": {
      input: {
        /**
         * The Rootly cursor from meta.next_cursor.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Search text for Rootly incident filtering.
         * @minLength 1
         */
        search?: string;
        /**
         * Rootly incident kind filter.
         * @minLength 1
         */
        kind?: string;
        /**
         * Rootly incident status filter.
         * @minLength 1
         */
        status?: string;
        /** Whether to filter private incidents. */
        private?: boolean;
        /**
         * Rootly user ID filter.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * Rootly severity name filter.
         * @minLength 1
         */
        severity?: string;
        /**
         * Rootly severity ID filter.
         * @minLength 1
         */
        severityId?: string;
        /**
         * Comma-separated Rootly label filter.
         * @minLength 1
         */
        labels?: string;
        /**
         * Comma-separated Rootly service ID filter.
         * @minLength 1
         */
        serviceIds?: string;
        /**
         * Comma-separated Rootly service name filter.
         * @minLength 1
         */
        serviceNames?: string;
        /**
         * Comma-separated Rootly team ID filter.
         * @minLength 1
         */
        teamIds?: string;
        /**
         * Comma-separated Rootly team name filter.
         * @minLength 1
         */
        teamNames?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * The Rootly sort expression, such as name or -created_at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Rootly JSON:API resources. */
        resources: Array<{
          /**
           * The Rootly resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Rootly resource type.
           * @minLength 1
           */
          type?: string;
          /** The Rootly resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Rootly resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Included Rootly JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** Rootly pagination or resource links. */
        links?: Record<string, unknown>;
        /** Rootly response metadata. */
        meta?: Record<string, unknown>;
        /** The raw Rootly JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rootly services with common filters and pagination. */
    "rootly.list_services": {
      input: {
        /** Related Rootly resources to include in the JSON:API response. */
        include?: Array<string>;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Search text for Rootly service filtering.
         * @minLength 1
         */
        search?: string;
        /**
         * Rootly service name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Rootly service slug filter.
         * @minLength 1
         */
        slug?: string;
        /**
         * Rootly service external ID filter.
         * @minLength 1
         */
        externalId?: string;
        /** Whether alert broadcast is enabled for the service. */
        alertBroadcastEnabled?: boolean;
        /** Whether incident broadcast is enabled for the service. */
        incidentBroadcastEnabled?: boolean;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * The Rootly sort expression, such as name or -created_at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Rootly JSON:API resources. */
        resources: Array<{
          /**
           * The Rootly resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Rootly resource type.
           * @minLength 1
           */
          type?: string;
          /** The Rootly resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Rootly resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Included Rootly JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** Rootly pagination or resource links. */
        links?: Record<string, unknown>;
        /** Rootly response metadata. */
        meta?: Record<string, unknown>;
        /** The raw Rootly JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rootly teams with common filters and pagination. */
    "rootly.list_teams": {
      input: {
        /** Related Rootly resources to include in the JSON:API response. */
        include?: Array<string>;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Search text for Rootly team filtering.
         * @minLength 1
         */
        search?: string;
        /**
         * Rootly team name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Rootly team slug filter.
         * @minLength 1
         */
        slug?: string;
        /**
         * Rootly team external ID filter.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Rootly team color filter.
         * @minLength 1
         */
        color?: string;
        /** Whether alert broadcast is enabled for the team. */
        alertBroadcastEnabled?: boolean;
        /** Whether incident broadcast is enabled for the team. */
        incidentBroadcastEnabled?: boolean;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * The ISO 8601 timestamp for this filter.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * The Rootly sort expression, such as name or -created_at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Rootly JSON:API resources. */
        resources: Array<{
          /**
           * The Rootly resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Rootly resource type.
           * @minLength 1
           */
          type?: string;
          /** The Rootly resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Rootly resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Included Rootly JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** Rootly pagination or resource links. */
        links?: Record<string, unknown>;
        /** Rootly response metadata. */
        meta?: Record<string, unknown>;
        /** The raw Rootly JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
