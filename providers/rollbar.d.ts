import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Rollbar deploy by deploy ID. */
    "rollbar.get_deploy": {
      input: {
        /**
         * The Rollbar deploy ID.
         * @minimum 1
         */
        deployId: number;
      };
      output: {
        /** A normalized Rollbar deploy. */
        deploy: {
          /**
           * The Rollbar deploy ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /** The environment to which the revision was deployed. */
          environment: string;
          /** The deployed revision string returned by Rollbar. */
          revision: string;
          /** A string value returned by Rollbar. */
          localUsername: string | null;
          /** A string value returned by Rollbar. */
          comment: string | null;
          /** A string value returned by Rollbar. */
          status: string | null;
          /** An integer value returned by Rollbar. */
          userId: number | null;
          /** An integer value returned by Rollbar. */
          startTime: number | null;
          /** An integer value returned by Rollbar. */
          finishTime: number | null;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Rollbar item by item ID. */
    "rollbar.get_item": {
      input: {
        /**
         * The Rollbar item ID.
         * @minimum 1
         */
        itemId: number;
      };
      output: {
        /** A normalized Rollbar item summary. */
        item: {
          /**
           * The Rollbar item ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar item counter.
           * @minimum 1
           */
          counter: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /** The Rollbar item title. */
          title: string;
          /** The Rollbar environment name. */
          environment: string;
          /** The platform returned by Rollbar. */
          platform: string | null;
          /** The framework returned by Rollbar. */
          framework: string | null;
          /** The Rollbar item level. */
          level: string | null;
          /** The Rollbar item status. */
          status: string | null;
          /**
           * The total occurrence count on the item.
           * @minimum 1
           */
          totalOccurrences: number;
          /** An integer value returned by Rollbar. */
          uniqueOccurrences: number | null;
          /** An integer value returned by Rollbar. */
          assignedUserId: number | null;
          /** An integer value returned by Rollbar. */
          assignedTeamId: number | null;
          /** An integer value returned by Rollbar. */
          groupItemId: number | null;
          /**
           * The most recent occurrence ID for the item.
           * @minimum 1
           */
          lastOccurrenceId: number;
          /**
           * The timestamp of the last occurrence.
           * @minimum 1
           */
          lastOccurrenceTimestamp: number;
          /**
           * The timestamp of the first occurrence.
           * @minimum 1
           */
          firstOccurrenceTimestamp: number;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Rollbar occurrence by occurrence ID. */
    "rollbar.get_occurrence": {
      input: {
        /**
         * The Rollbar occurrence ID.
         * @minimum 1
         */
        occurrenceId: number;
      };
      output: {
        /** A normalized Rollbar occurrence. */
        occurrence: {
          /**
           * The Rollbar occurrence ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /**
           * The Rollbar item ID.
           * @minimum 1
           */
          itemId: number;
          /**
           * The occurrence timestamp in milliseconds.
           * @minimum 1
           */
          timestamp: number;
          /**
           * The occurrence payload version.
           * @minimum 1
           */
          version: number;
          /** An integer value returned by Rollbar. */
          billable: number | null;
          /** The raw JSON object returned by Rollbar. */
          data: Record<string, unknown>;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Rollbar project by project ID. */
    "rollbar.get_project": {
      input: {
        /**
         * The Rollbar project ID.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** A normalized Rollbar project. */
        project: {
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar account ID.
           * @minimum 1
           */
          accountId: number;
          /** The Rollbar project status. */
          status: string;
          /** The Rollbar project name. */
          name: string;
          /**
           * The project creation timestamp.
           * @minimum 1
           */
          dateCreated: number;
          /**
           * The project last-modified timestamp.
           * @minimum 1
           */
          dateModified: number;
          /** Selected Rollbar project settings. */
          settings: {
            /** The time format configured for the project. */
            timeFormat: string | null;
            /** The timezone configured for the project. */
            timezone: string | null;
            /** The raw JSON object returned by Rollbar. */
            integrations: Record<string, unknown> | null;
            /** Encryption at rest settings returned by Rollbar. */
            encryptionAtRest: {
              /** Whether encryption at rest is enabled. */
              enabled: boolean;
              /** An integer value returned by Rollbar. */
              enabledAt: number | null;
            } | null;
            /** Grouping settings returned by Rollbar. */
            grouping: {
              /** Whether grouping auto-upgrade is enabled. */
              autoUpgrade: boolean | null;
              /** Recent code versions attached to the grouping settings. */
              recentVersions: Array<string>;
            } | null;
          };
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List deploys in the connected Rollbar project. */
    "rollbar.list_deploys": {
      input: {
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request from Rollbar.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
      };
      output: {
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page: number;
        /** The deploys returned by Rollbar. */
        deploys: Array<{
          /**
           * The Rollbar deploy ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /** The environment to which the revision was deployed. */
          environment: string;
          /** The deployed revision string returned by Rollbar. */
          revision: string;
          /** A string value returned by Rollbar. */
          localUsername: string | null;
          /** A string value returned by Rollbar. */
          comment: string | null;
          /** A string value returned by Rollbar. */
          status: string | null;
          /** An integer value returned by Rollbar. */
          userId: number | null;
          /** An integer value returned by Rollbar. */
          startTime: number | null;
          /** An integer value returned by Rollbar. */
          finishTime: number | null;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List environments in the connected Rollbar project. */
    "rollbar.list_environments": {
      input: {
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request from Rollbar.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
      };
      output: {
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page: number;
        /** The environments returned by Rollbar. */
        environments: Array<{
          /**
           * The Rollbar environment ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /** The Rollbar environment name. */
          environment: string;
          /** Whether the environment is visible in Rollbar. */
          visible: boolean;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List occurrences for one Rollbar item. */
    "rollbar.list_item_occurrences": {
      input: {
        /**
         * The Rollbar item ID.
         * @minimum 1
         */
        itemId: number;
        /**
         * The last occurrence ID from the previous page.
         * @minimum 1
         */
        lastId?: number;
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request from Rollbar.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
      };
      output: {
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page: number;
        /** The occurrences returned by Rollbar. */
        occurrences: Array<{
          /**
           * The Rollbar occurrence ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /**
           * The Rollbar item ID.
           * @minimum 1
           */
          itemId: number;
          /**
           * The occurrence timestamp in milliseconds.
           * @minimum 1
           */
          timestamp: number;
          /**
           * The occurrence payload version.
           * @minimum 1
           */
          version: number;
          /** An integer value returned by Rollbar. */
          billable: number | null;
          /** The raw JSON object returned by Rollbar. */
          data: Record<string, unknown>;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Rollbar items in the connected project with optional filters. */
    "rollbar.list_items": {
      input: {
        /**
         * Filter by assigned Rollbar username, or use assigned or unassigned.
         * @minLength 1
         */
        assignedUser?: string;
        /**
         * Filter by one or more assigned Rollbar team names.
         * @minItems 1
         */
        assignedTeam?: Array<string>;
        /**
         * Filter by one or more Rollbar environments.
         * @minItems 1
         */
        environment?: Array<string>;
        /**
         * Filter by one or more Rollbar frameworks.
         * @minItems 1
         */
        framework?: Array<string>;
        /**
         * Filter by one or more Rollbar item IDs.
         * @minItems 1
         */
        itemIds?: Array<number>;
        /**
         * Filter by one or more Rollbar item levels.
         * @minItems 1
         */
        level?: Array<"debug" | "info" | "warning" | "error" | "critical">;
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page?: number;
        /**
         * Search query in the same format as the Rollbar Items page.
         * @minLength 1
         */
        query?: string;
        /**
         * Filter by one or more Rollbar item statuses.
         * @minItems 1
         */
        status?: Array<"active" | "resolved" | "muted" | "archived">;
        /** Whether to include only snoozed items or to exclude them. */
        isSnoozed?: boolean;
      };
      output: {
        /**
         * The 1-based page number to request from Rollbar.
         * @minimum 1
         */
        page: number;
        /** The total number of matching items when Rollbar returns it. */
        totalCount: number | null;
        /** The Rollbar items returned by the request. */
        items: Array<{
          /**
           * The Rollbar item ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Rollbar item counter.
           * @minimum 1
           */
          counter: number;
          /**
           * The Rollbar project ID.
           * @minimum 1
           */
          projectId: number;
          /** The Rollbar item title. */
          title: string;
          /** The Rollbar environment name. */
          environment: string;
          /** The platform returned by Rollbar. */
          platform: string | null;
          /** The framework returned by Rollbar. */
          framework: string | null;
          /** The Rollbar item level. */
          level: string | null;
          /** The Rollbar item status. */
          status: string | null;
          /**
           * The total occurrence count on the item.
           * @minimum 1
           */
          totalOccurrences: number;
          /** An integer value returned by Rollbar. */
          uniqueOccurrences: number | null;
          /** An integer value returned by Rollbar. */
          assignedUserId: number | null;
          /** An integer value returned by Rollbar. */
          assignedTeamId: number | null;
          /** An integer value returned by Rollbar. */
          groupItemId: number | null;
          /**
           * The most recent occurrence ID for the item.
           * @minimum 1
           */
          lastOccurrenceId: number;
          /**
           * The timestamp of the last occurrence.
           * @minimum 1
           */
          lastOccurrenceTimestamp: number;
          /**
           * The timestamp of the first occurrence.
           * @minimum 1
           */
          firstOccurrenceTimestamp: number;
          /** The raw JSON object returned by Rollbar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
