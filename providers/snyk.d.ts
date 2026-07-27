import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Snyk organization by ID. */
    "snyk.get_org": {
      input: {
        /**
         * The Snyk organization ID.
         * @format uuid
         */
        orgId: string;
      };
      output: {
        /**
         * The requested Snyk organization ID.
         * @format uuid
         */
        orgId: string;
        /** A Snyk JSON:API resource object. */
        organization: Record<string, unknown>;
        /** The raw Snyk JSON:API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one Snyk project by organization ID and project ID. */
    "snyk.get_project": {
      input: {
        /**
         * The Snyk organization ID that owns the project.
         * @format uuid
         */
        orgId: string;
        /**
         * The Snyk project ID.
         * @format uuid
         */
        projectId: string;
        /** Whether to expand project target relationships. */
        includeTarget?: boolean;
        /** Whether to include latest issue count metadata for this project. */
        includeLatestIssueCounts?: boolean;
        /** Whether to include latest dependency total metadata for this project. */
        includeLatestDependencyTotal?: boolean;
      };
      output: {
        /**
         * The requested Snyk organization ID.
         * @format uuid
         */
        orgId: string;
        /**
         * The requested Snyk project ID.
         * @format uuid
         */
        projectId: string;
        /** A Snyk JSON:API resource object. */
        project: Record<string, unknown>;
        /** The raw Snyk JSON:API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch the Snyk principal associated with the configured API token. */
    "snyk.get_self": {
      input: Record<string, never>;
      output: {
        /** A Snyk JSON:API resource object. */
        principal: Record<string, unknown>;
        /** The raw Snyk JSON:API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Snyk issues in an organization with common filters. */
    "snyk.list_org_issues": {
      input: {
        /**
         * Number of Snyk results to return per page. Snyk accepts 10 through 100.
         * @minimum 10
         * @maximum 100
         */
        limit?: number;
        /**
         * Snyk cursor for the page immediately after this cursor.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * Snyk cursor for the page immediately before this cursor.
         * @minLength 1
         */
        endingBefore?: string;
        /**
         * The Snyk organization ID that owns the issues.
         * @format uuid
         */
        orgId: string;
        /**
         * Only return issues related to this scan item ID.
         * @format uuid
         */
        scanItemId?: string;
        /**
         * Only return issues related to this scan item type.
         * @minLength 1
         */
        scanItemType?: string;
        /**
         * Only return issues of this Snyk issue type.
         * @minLength 1
         */
        type?: string;
        /**
         * Only return issues updated before this timestamp.
         * @format date-time
         */
        updatedBefore?: string;
        /**
         * Only return issues updated after this timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Only return issues created before this timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Only return issues created after this timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Snyk effective severity levels to match.
         * @minItems 1
         */
        effectiveSeverityLevel?: Array<"info" | "low" | "medium" | "high" | "critical">;
        /**
         * Snyk issue statuses to match.
         * @minItems 1
         */
        status?: Array<"open" | "resolved">;
        /** Whether to return ignored or non-ignored issues. */
        ignored?: boolean;
      };
      output: {
        /**
         * The requested Snyk organization ID.
         * @format uuid
         */
        orgId: string;
        /** Snyk issue resources. */
        issues: Array<Record<string, unknown>>;
        /** Snyk JSON:API pagination or resource links. */
        links: Record<string, unknown>;
        /** Snyk JSON:API metadata when returned. */
        meta: Record<string, unknown> | null;
        /** The raw Snyk JSON:API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Snyk organizations accessible to the configured API token. */
    "snyk.list_orgs": {
      input: {
        /**
         * Number of Snyk results to return per page. Snyk accepts 10 through 100.
         * @minimum 10
         * @maximum 100
         */
        limit?: number;
        /**
         * Snyk cursor for the page immediately after this cursor.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * Snyk cursor for the page immediately before this cursor.
         * @minLength 1
         */
        endingBefore?: string;
        /**
         * Only return organizations within this Snyk group ID.
         * @format uuid
         */
        groupId?: string;
        /** Whether to only return organizations that are not part of a group. */
        isPersonal?: boolean;
        /**
         * Only return organizations whose slug exactly matches this value.
         * @minLength 1
         * @maxLength 100
         */
        slug?: string;
        /**
         * Only return organizations whose name contains this value.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** Whether to expand each organization with the caller's member role. */
        includeMemberRole?: boolean;
      };
      output: {
        /** Snyk organization resources. */
        organizations: Array<Record<string, unknown>>;
        /** Snyk JSON:API pagination or resource links. */
        links: Record<string, unknown>;
        /** Snyk JSON:API metadata when returned. */
        meta: Record<string, unknown> | null;
        /** The raw Snyk JSON:API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Snyk projects in an organization with useful filters. */
    "snyk.list_projects": {
      input: {
        /**
         * Number of Snyk results to return per page. Snyk accepts 10 through 100.
         * @minimum 10
         * @maximum 100
         */
        limit?: number;
        /**
         * Snyk cursor for the page immediately after this cursor.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * Snyk cursor for the page immediately before this cursor.
         * @minLength 1
         */
        endingBefore?: string;
        /**
         * The Snyk organization ID that owns the projects.
         * @format uuid
         */
        orgId: string;
        /**
         * Only return projects that belong to these Snyk target IDs.
         * @minItems 1
         */
        targetIds?: Array<string>;
        /**
         * Only return projects that match this target reference.
         * @minLength 1
         */
        targetReference?: string;
        /**
         * Only return projects that match this target file.
         * @minLength 1
         */
        targetFile?: string;
        /**
         * Only return projects that match this target runtime.
         * @minLength 1
         */
        targetRuntime?: string;
        /**
         * Only return projects that match these Snyk project IDs.
         * @minItems 1
         */
        projectIds?: Array<string>;
        /**
         * Only return projects that match these names.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * Only return projects with names starting with these prefixes.
         * @minItems 1
         */
        namesStartWith?: Array<string>;
        /**
         * Only return projects that match these origins.
         * @minItems 1
         */
        origins?: Array<string>;
        /**
         * Only return projects that match these project types.
         * @minItems 1
         */
        types?: Array<string>;
        /**
         * Only return projects that match all provided key:value tags.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Snyk business criticality values to match.
         * @minItems 1
         */
        businessCriticality?: Array<"critical" | "high" | "medium" | "low">;
        /**
         * Snyk environment values to match.
         * @minItems 1
         */
        environment?: Array<"frontend" | "backend" | "internal" | "external" | "mobile" | "saas" | "onprem" | "hosted" | "distributed">;
        /**
         * Snyk lifecycle values to match.
         * @minItems 1
         */
        lifecycle?: Array<"production" | "development" | "sandbox">;
        /** Whether to expand project target relationships. */
        includeTarget?: boolean;
        /** Whether to include latest issue count metadata for each project. */
        includeLatestIssueCounts?: boolean;
        /** Whether to include latest dependency total metadata for each project. */
        includeLatestDependencyTotal?: boolean;
        /**
         * Only return projects uploaded and monitored before this timestamp.
         * @format date-time
         */
        cliMonitoredBefore?: string;
        /**
         * Only return projects uploaded and monitored after this timestamp.
         * @format date-time
         */
        cliMonitoredAfter?: string;
      };
      output: {
        /**
         * The requested Snyk organization ID.
         * @format uuid
         */
        orgId: string;
        /** Snyk project resources. */
        projects: Array<Record<string, unknown>>;
        /** Snyk JSON:API pagination or resource links. */
        links: Record<string, unknown>;
        /** Snyk JSON:API metadata when returned. */
        meta: Record<string, unknown> | null;
        /** The raw Snyk JSON:API response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
