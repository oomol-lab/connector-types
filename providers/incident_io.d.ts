import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single incident.io action by ID. */
    "incident_io.get_action": {
      input: {
        /**
         * The action identifier to load.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized incident.io action with stable top-level fields and raw upstream data. */
        action: {
          /** The unique action identifier. */
          id: string;
          /** The unique identifier of the incident this action belongs to. */
          incidentId: string;
          /** The action description. */
          description: string;
          /** The action status returned by incident.io. */
          status: string;
          /** The assigned user's display name when present. */
          assigneeName: string | null;
          /** The assigned user's email address when present. */
          assigneeEmail: string | null;
          /** When the action was created. */
          createdAt: string | null;
          /** When the action was last updated. */
          updatedAt: string | null;
          /** When the action was completed. */
          completedAt: string | null;
          /** The raw action object returned by incident.io. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a single incident.io incident by full ID or numeric reference. */
    "incident_io.get_incident": {
      input: {
        /**
         * The incident full identifier or numeric reference to load.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized incident.io incident with stable top-level fields and raw upstream data. */
        incident: {
          /** The unique incident identifier. */
          id: string;
          /** The incident reference displayed in incident.io. */
          reference: string | null;
          /** The incident name or explanation. */
          name: string | null;
          /** The detailed incident summary. */
          summary: string | null;
          /** The incident homepage permalink. */
          permalink: string | null;
          /** The incident status category. */
          statusCategory: string | null;
          /** The incident status name. */
          statusName: string | null;
          /** The incident severity name. */
          severityName: string | null;
          /** The incident mode. */
          mode: string | null;
          /** The incident visibility. */
          visibility: string | null;
          /** When the incident was created. */
          createdAt: string | null;
          /** When the incident was last updated. */
          updatedAt: string | null;
          /** The raw incident object returned by incident.io. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List incident.io actions with optional incident and mode filters. */
    "incident_io.list_actions": {
      input: {
        /**
         * Only return actions related to this incident.
         * @minLength 1
         */
        incidentId?: string;
        /** The incident mode to include in the result set. */
        incidentMode?: "standard" | "retrospective" | "test" | "tutorial" | "stream";
      };
      output: {
        /** The actions returned by incident.io. */
        actions: Array<{
          /** The unique action identifier. */
          id: string;
          /** The unique identifier of the incident this action belongs to. */
          incidentId: string;
          /** The action description. */
          description: string;
          /** The action status returned by incident.io. */
          status: string;
          /** The assigned user's display name when present. */
          assigneeName: string | null;
          /** The assigned user's email address when present. */
          assigneeEmail: string | null;
          /** When the action was created. */
          createdAt: string | null;
          /** When the action was last updated. */
          updatedAt: string | null;
          /** When the action was completed. */
          completedAt: string | null;
          /** The raw action object returned by incident.io. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List incident.io incident statuses configured for the organization. */
    "incident_io.list_incident_statuses": {
      input: Record<string, never>;
      output: {
        /** The statuses returned by incident.io. */
        incidentStatuses: Array<{
          /** The unique status identifier. */
          id: string;
          /** The status name. */
          name: string;
          /** The status description. */
          description: string;
          /** The status category returned by incident.io. */
          category: string;
          /** The order of this incident status. */
          rank: number;
          /** When the status was created. */
          createdAt: string | null;
          /** When the status was last updated. */
          updatedAt: string | null;
          /** The raw incident status object returned by incident.io. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List incident.io incidents with optional stable filters and pagination. */
    "incident_io.list_incidents": {
      input: {
        /**
         * The number of incidents to request. incident.io allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        pageSize?: number;
        /**
         * The incident.io pagination cursor returned by a previous list call.
         * @minLength 1
         */
        after?: string;
        /** The incident ordering requested from incident.io. */
        sortBy?: "created_at_oldest_first" | "created_at_newest_first";
        /** Whether all or any provided incident filters must match. */
        filterMode?: "all" | "any";
        /** The incident status category to filter by. */
        statusCategoryOneOf?: "triage" | "declined" | "merged" | "canceled" | "live" | "learning" | "closed" | "paused";
        /** The incident status category to filter by. */
        statusCategoryNotIn?: "triage" | "declined" | "merged" | "canceled" | "live" | "learning" | "closed" | "paused";
        /**
         * Only return incidents with this severity identifier.
         * @minLength 1
         */
        severityOneOf?: string;
        /**
         * Only return incidents whose severity rank is greater than or equal to this severity.
         * @minLength 1
         */
        severityGte?: string;
        /**
         * Only return incidents whose severity rank is less than or equal to this severity.
         * @minLength 1
         */
        severityLte?: string;
        /**
         * Only return incidents with this incident type identifier.
         * @minLength 1
         */
        incidentTypeOneOf?: string;
        /**
         * The incident modes to include.
         * @minItems 1
         */
        modeOneOf?: Array<"standard" | "retrospective" | "test" | "tutorial" | "stream">;
      };
      output: {
        /** The incidents returned by incident.io. */
        incidents: Array<{
          /** The unique incident identifier. */
          id: string;
          /** The incident reference displayed in incident.io. */
          reference: string | null;
          /** The incident name or explanation. */
          name: string | null;
          /** The detailed incident summary. */
          summary: string | null;
          /** The incident homepage permalink. */
          permalink: string | null;
          /** The incident status category. */
          statusCategory: string | null;
          /** The incident status name. */
          statusName: string | null;
          /** The incident severity name. */
          severityName: string | null;
          /** The incident mode. */
          mode: string | null;
          /** The incident visibility. */
          visibility: string | null;
          /** When the incident was created. */
          createdAt: string | null;
          /** When the incident was last updated. */
          updatedAt: string | null;
          /** The raw incident object returned by incident.io. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by incident.io when listing resources. */
        paginationMeta: {
          /** The cursor to pass as the after parameter when loading the next page. */
          after: string | null;
          /** The maximum number of records requested from incident.io. */
          pageSize: number | null;
          /** The total matching record count when incident.io provides it. */
          totalRecordCount: number | null;
          /** The raw pagination_meta object returned by incident.io. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List incident.io severities configured for the organization. */
    "incident_io.list_severities": {
      input: Record<string, never>;
      output: {
        /** The severities returned by incident.io. */
        severities: Array<{
          /** The unique severity identifier. */
          id: string;
          /** The severity name. */
          name: string;
          /** The severity description. */
          description: string;
          /** The rank used to sort severities, where lower numbers are less severe. */
          rank: number;
          /** When the severity was created. */
          createdAt: string | null;
          /** When the severity was last updated. */
          updatedAt: string | null;
          /** The raw severity object returned by incident.io. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
